# Vendored STLC CLI bundle

This directory contains **pre-built** artifacts from `@pkg/stlc` (`packages/stlc` in `stlc-main`): `dist/index.cjs` plus `codegen.*.mjs` workers bundled by esbuild. They mirror what `pnpm turbo build:bundle --filter=@pkg/stlc` produces upstream.

Keeping a copy here avoids `workspace:^` resolution when the SDK repo consumes STLC tooling in isolation.

**Refresh** after upstream changes:

1. Build `@pkg/stlc` in `stlc-main` (`pnpm turbo build:bundle --filter=@pkg/stlc`).
2. Replace `vendor/stlc/dist/` with `stlc-main/packages/stlc/dist/` (full directory copy).

**License**: Stainless / STLC tooling is upstream; augment this file if lawyers require verbatim license text in-repo.
