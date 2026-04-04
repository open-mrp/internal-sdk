# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@augno/internal-sdk` is a TypeScript SDK providing a type-safe API client for the Augno internal V2 API. It uses **openapi-fetch** with types auto-generated from an OpenAPI spec. Published to GitHub Packages.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run build` | Compile TypeScript (`tsc`) |
| `npm run check-types` | Type-check without emitting (`tsc --noEmit`) |
| `npm run generate` | Regenerate `src/types.ts` from `specs/internal_openapi_spec.json` |
| `npm run yalc:publish` | Build and publish locally via yalc for testing in other projects |
| `npm run yalc:watch` | Build, publish via yalc, then watch for changes |
| `npm run release` | Build and publish via changesets (uses bun) |

There are no tests or linting configured.

## Architecture

### OpenAPI-First Type Generation

Types flow from `specs/internal_openapi_spec.json` → `npm run generate` → `src/types.ts`. The `types.ts` file is **auto-generated** and should never be edited manually. To update types, place the new OpenAPI spec in `specs/` and run `npm run generate`.

### Source Files

- **`src/index.ts`** — Main entry point. Exports `createV2Client()` factory function, `V2ClientOptions` type, and re-exports `components`/`paths` types. The client wraps `openapi-fetch` with middleware that:
  - Attaches `Augno-Account` header via a `getAccountID()` callback
  - Handles 401 responses with automatic token refresh (POST to `/v1/auth/access-tokens`)
  - Prevents concurrent refresh requests with a shared promise pattern
  - Skips auth middleware for login and token refresh paths
  - Calls `onAuthFailure()` callback on permanent auth failure
- **`src/enums.ts`** — `RequestHeaders` enum for custom HTTP header names
- **`src/types.ts`** — Auto-generated OpenAPI types (do not edit)

### Package Configuration

- **Module format**: ESM (`"type": "module"`, target ES2022, module NodeNext)
- **Package manager**: Bun (used for release scripts, `bun.lock` present)
- **Registry**: GitHub Packages (`@augno` scope via `.npmrc`)
- **Strict TypeScript**: All strict checks enabled including `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`
