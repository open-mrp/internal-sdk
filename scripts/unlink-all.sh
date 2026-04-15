#!/usr/bin/env bash
# One-shot teardown: restore dashboard's @augno/internal-sdk dep to the latest
# published GitHub Packages version and remove all yalc artefacts.
#
# Run this before committing — ensures no file:.yalc/... refs or .yalc/ state
# leaks into the repo.

set -e
SDK_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MONOREPO_ROOT="$(cd "$SDK_ROOT/.." && pwd)"
DASHBOARD_ROOT="$MONOREPO_ROOT/dashboard"

if [ ! -d "$DASHBOARD_ROOT" ]; then
  echo "Expected sibling directory not found: $DASHBOARD_ROOT" >&2
  exit 1
fi

echo "Unlinking @augno/internal-sdk from dashboard/..."
"$DASHBOARD_ROOT/scripts/sdk-unlink.sh"

echo ""
echo "✓ @augno/internal-sdk yalc link removed from dashboard."
