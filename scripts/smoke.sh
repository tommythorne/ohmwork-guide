#!/usr/bin/env bash
set -e
echo "🔎 Smoke: ensuring modules use content-driven pattern..."
for m in app/modules/module-*; do
  [ -d "$m" ] || continue
  if [ ! -f "$m/page.tsx" ] || [ ! -f "$m/content.ts" ]; then
    echo "⚠️  Missing page.tsx or content.ts in $m"
  fi
done
echo "🛠 Building..."
npm ci --prefer-offline --no-audit --no-fund
npm run build
echo "✅ Build OK"
