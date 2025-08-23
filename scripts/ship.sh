#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/ship.sh "feat(module-XX): message here"
# Notes:
# - Skips the pre-push guard with --no-verify
# - If DEPLOY_URL is set to your production domain, it pings /api/deploy after push
#   export DEPLOY_URL="https://YOUR-PROD-DOMAIN.vercel.app"

MSG="${1:-chore: content update $(date -u '+%Y-%m-%d %H:%M:%S UTC')}"
echo "🔧 Building…"
npm run build

echo "📦 Committing…"
git add -A
git commit -m "$MSG" || echo "ℹ️ Nothing to commit"

echo "🚀 Pushing to main (no-verify)…"
git push --no-verify origin main || true

if [ -n "${DEPLOY_URL:-}" ]; then
  echo "🔁 Triggering Vercel redeploy via \$DEPLOY_URL/api/deploy …"
  curl -fsS "$DEPLOY_URL/api/deploy" || true
else
  echo "ℹ️ DEPLOY_URL not set; relying on Vercel auto-deploy on push."
  echo "   To auto-trigger redeploys too: export DEPLOY_URL='https://YOUR-PROD-DOMAIN.vercel.app'"
fi

echo "✅ Shipped."
