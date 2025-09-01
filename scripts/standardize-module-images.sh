#!/usr/bin/env bash
set -euo pipefail

APPLY="${APPLY:-0}" # 0 = dry-run, 1 = apply
TS="$(date +%s)"

red()   { printf "\033[31m%s\033[0m\n" "$*"; }
green() { printf "\033[32m%s\033[0m\n" "$*"; }
cyan()  { printf "\033[36m%s\033[0m\n" "$*"; }
bold()  { printf "\033[1m%s\033[0m\n" "$*"; }

root_dir="$(pwd)"

# Utility: turn /images/module-XX/foo.jpg into public path
to_public_path() {
  local src="$1"
  # strip leading slash and prefix with public/
  echo "public${src}"
}

# Process one module content.ts
process_module() {
  local content_path="$1"
  local mod
  mod="$(echo "$content_path" | grep -oE 'module-[0-9]+' | cut -d- -f2)"
  local mod2
  mod2="$(printf "%02d" "$mod")"

  local img_dir="public/images/module-${mod2}"
  if [[ ! -d "$img_dir" ]]; then
    echo "  [warn] No image dir: $img_dir (skipping file checks, will still rewrite srcs if needed)"
  fi

  bold "→ Module ${mod2} — $content_path"
  local manifest="scripts/_image_renames/module-${mod2}.manifest.$TS.txt"
  : > "$manifest"

  # 1) Collect hero first (scroll order #1)
  local hero
  hero="$(grep -oP 'imageSrc:\s*"\K\/images\/module-'"$mod2"'\/[^"]+' "$content_path" | head -n1 || true)"

  # 2) Collect article images in file order
  local imgs
  imgs="$(grep -oP 'src:\s*"\K\/images\/module-'"$mod2"'\/[^"]+' "$content_path" || true)"

  # Build ordered list (hero first if present)
  mapfile -t ordered < <(
    { if [[ -n "$hero" ]]; then echo "$hero"; fi; echo "$imgs"; } | awk 'NF' | nl -ba
  )

  if [[ "${#ordered[@]}" -eq 0 ]]; then
    red "  No image src references found in this module."
    return 0
  fi

  cyan "  Proposed sequence (hero first if present):"
  for line in "${ordered[@]}"; do echo "    $line"; done

  echo
  bold "  Building rename map to m${mod2}-YY.jpg …"

  # 3) Compute mapping old -> new (paths + content replacements)
  declare -A seen_new_name=()
  declare -a map_old=()
  declare -a map_new=()

  local idx=0
  while read -r num path; do
    # num is from nl; strip
    local src_path="$path"
    [[ -z "$src_path" ]] && continue
    idx=$((idx+1))
    local ext
    ext="${src_path##*.}"
    # normalize to .jpg regardless of current (adjust here if you want to preserve)
    ext="jpg"

    local new_name
    new_name="$(printf "m%s-%02d.%s" "$mod2" "$idx" "$ext")"

    # ensure unique target (paranoia)
    while [[ -n "${seen_new_name[$new_name]+x}" ]]; do
      idx=$((idx+1))
      new_name="$(printf "m%s-%02d.%s" "$mod2" "$idx" "$ext")"
    done
    seen_new_name[$new_name]=1

    local old_pub
    old_pub="$(to_public_path "$src_path")"
    local new_pub="public/images/module-${mod2}/${new_name}"
    local new_src="/images/module-${mod2}/${new_name}"

    map_old+=("$old_pub")
    map_new+=("$new_pub")

    printf "%s -> %s\n" "$src_path" "$new_src" | tee -a "$manifest" >/dev/null
  done < <(printf '%s\n' "${ordered[@]}" | sed -E 's/^[[:space:]]*([0-9]+)[[:space:]]+//' )

  echo
  cyan "  Manifest written: $manifest"
  echo

  # 4) Show extras in the folder that are NOT referenced (optional)
  if [[ -d "$img_dir" ]]; then
    bold "  Unreferenced files in ${img_dir}:"
    comm -23 \
      <( (ls "$img_dir" 2>/dev/null || true) | sort ) \
      <( printf '%s\n' "${map_new[@]}" | sed -E "s#^public/images/module-${mod2}/##" | sort ) | \
      sed 's/^/    /' || true
    echo
  fi

  # 5) Apply (git mv + replace src strings), or dry-run
  if [[ "$APPLY" -eq 1 ]]; then
    bold "  APPLY=1 → Renaming files and updating content.ts"
    # backup content.ts
    cp "$content_path" "${content_path}.bak.${TS}"

    # Rename files (if they exist and paths differ)
    local i
    for i in "${!map_old[@]}"; do
      local o="${map_old[$i]}"
      local n="${map_new[$i]}"
      local o_rel="${o#"${root_dir}/"}"
      local n_rel="${n#"${root_dir}/"}"

      # ensure directory
      mkdir -p "$(dirname "$n")"

      if [[ -f "$o" ]]; then
        if [[ "$o" != "$n" ]]; then
          git mv -f "$o_rel" "$n_rel" || { echo "    [warn] git mv failed for $o_rel -> $n_rel"; }
          echo "    mv: $o_rel -> $n_rel"
        else
          echo "    keep: $o_rel"
        fi
      else
        echo "    [miss] file not found on disk: $o_rel (will still rewrite src if necessary)"
      fi

      # Replace src strings in content.ts (use exact old src)
      local old_src="/${o_rel#public/}"
      local new_src="/${n_rel#public/}"
      # Escape slashes for sed
      local old_esc new_esc
      old_esc="$(printf '%s' "$old_src" | sed 's/[\/&]/\\&/g')"
      new_esc="$(printf '%s' "$new_src" | sed 's/[\/&]/\\&/g')"
      sed -i "s/${old_esc}/${new_esc}/g" "$content_path"
    done

    green "  ✅ Updated: $content_path"
  else
    bold "  DRY-RUN (set APPLY=1 to execute):"
    local i
    for i in "${!map_old[@]}"; do
      local o="${map_old[$i]}"
      local n="${map_new[$i]}"
      local o_rel="${o#"${root_dir}/"}"
      local n_rel="${n#"${root_dir}/"}"
      echo "    git mv \"$o_rel\" \"$n_rel\""
      local old_src="/${o_rel#public/}"
      local new_src="/${n_rel#public/}"
      echo "    sed -i 's#${old_src}#${new_src}#g' \"$content_path\""
    done
    echo
    cyan "  (Nothing changed; review manifest above. Re-run with APPLY=1 to apply.)"
  fi
}

main() {
  shopt -s nullglob
  mapfile -t contents < <(ls app/modules/module-*/content.ts 2>/dev/null || true)
  if [[ "${#contents[@]}" -eq 0 ]]; then
    red "No module content files found at app/modules/module-*/content.ts"
    exit 1
  fi

  for content in "${contents[@]}"; do
    process_module "$content"
    echo "-------------------------------------------------------------------------------"
  done

  echo
  bold "Done."
}

main "$@"
