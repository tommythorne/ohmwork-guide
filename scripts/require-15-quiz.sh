#!/usr/bin/env bash
set -e
fail=0
for f in app/modules/module-*/content.ts; do
  [ -f "$f" ] || continue
  count=$(grep -c 'stem:' "$f" || true)
  mod=$(basename "$(dirname "$f")")
  if [ "$count" -lt 15 ]; then
    echo "❌ $mod has only $count quiz questions (need 15): $f"
    fail=1
  else
    echo "✅ $mod quiz count OK ($count)"
  fi
done
exit $fail
