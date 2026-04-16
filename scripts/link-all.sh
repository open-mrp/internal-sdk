#!/usr/bin/env bash
# One-shot orchestrator: regenerate the OpenAPI spec in api/, copy it into
# internal-sdk/, regenerate types, build, publish via yalc, and link into
# the dashboard consumer.
#
# Prerequisite: the augno/core monorepo is checked out with api/ and dashboard/
# as sibling directories of internal-sdk/.

set -e
SDK_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MONOREPO_ROOT="$(cd "$SDK_ROOT/.." && pwd)"
API_ROOT="$MONOREPO_ROOT/api"
DASHBOARD_ROOT="$MONOREPO_ROOT/dashboard"

if [ ! -d "$API_ROOT" ]; then
  echo "Expected sibling directory not found: $API_ROOT" >&2
  exit 1
fi
if [ ! -d "$DASHBOARD_ROOT" ]; then
  echo "Expected sibling directory not found: $DASHBOARD_ROOT" >&2
  exit 1
fi

echo "[1/5] Regenerating OpenAPI spec in api/..."
cd "$API_ROOT" && make openapi

echo "[2/5] Copying internal_openapi_spec.json into internal-sdk/specs/..."
mkdir -p "$SDK_ROOT/specs"
cp "$API_ROOT/specs/internal_openapi_spec.json" "$SDK_ROOT/specs/internal_openapi_spec.json"

echo "[3/5] Regenerating TypeScript types from spec..."
cd "$SDK_ROOT" && bun run generate

echo "[4/5] Building and publishing to yalc store..."
cd "$SDK_ROOT" && bun run yalc:publish

echo "[5/5] Linking into dashboard/..."
"$DASHBOARD_ROOT/scripts/sdk-link.sh"

echo ""
echo "✓ @augno/internal-sdk is now yalc-linked in dashboard."
echo "  Continuous rebuild: cd internal-sdk && bun run yalc:watch"
echo "  Teardown:           cd internal-sdk && bun run unlink:all"
