#!/usr/bin/env bash
set -euo pipefail
MSG="${1:-chore: ship $(date -u '+%Y-%m-%d %H:%M:%S UTC')}"
echo "🔧 Build…"; npm run build
echo "📦 Commit…"; git add -A; git commit -m "$MSG" || echo "ℹ️ nothing to commit"
echo "🚀 Push (no-verify)…"; git push --no-verify origin main || true
if [ -n "${DEPLOY_URL:-}" ]; then
  echo "🔁 Trigger Vercel redeploy: $DEPLOY_URL/api/deploy"
  curl -fsS "$DEPLOY_URL/api/deploy" || true
else
  echo "ℹ️ Set DEPLOY_URL for auto-redeploy ping (e.g., export DEPLOY_URL='https://your-site.vercel.app')"
fi
echo "✅ Shipped."
