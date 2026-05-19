## Setting up the environment

This repository uses [`pnpm`](https://pnpm.io/).
Other package managers may work but are not officially supported for development.

To set up the repository, run:

```sh
$ pnpm install
$ pnpm build
```

This will install all the required dependencies and build output files to `dist/`.

## Modifying/Adding code

Most of the SDK is generated code. Modifications to code will be persisted between generations, but may
result in merge conflicts between manual patches and changes from the generator. The generator will never
modify the contents of the `src/lib/` and `examples/` directories.

## Regenerating from OpenAPI (STLC)

The TypeScript client and resource tree are produced by **Stainless Core** (`stlc build`), not by ad-hoc scripts. This repo vendors the prebuilt CLI bundle under `vendor/stlc/dist/` so you do not need a separate `stlc-main` checkout or `workspace:^` dependency resolution.

### One-time / when the API spec changes

1. Copy the latest internal OpenAPI JSON from `augno/api` into `specs/internal_openapi_spec.json` (or run your usual spec sync from the monorepo root).
2. If `api/stainless/internal/stainless.yml` changed, sync `stainless/stainless.yml` here the same way.

### Run codegen

```sh
$ pnpm codegen
```

Requirements:

- Git working tree must be **clean**, or set `STLC_CODEGEN_COMMIT=1` so the vendored CLI can run with `--commit` (it will commit **all** unstaged changes in this repo—review before using).
- Output is written to this package root via STLC’s staging layout: `--output` defaults to the parent of this repository (e.g. `core/` when `internal-sdk` lives at `core/internal-sdk`). Override with `STLC_PARENT_DIR=/path/to/parent` if your directory layout differs.

To refresh the bundled `stlc` binary after upstream changes, rebuild `@pkg/stlc` in `stlc-main` and replace `vendor/stlc/dist/` wholesale. See `vendor/stlc/README.md`.

## Adding and running examples

All files in the `examples/` directory are not modified by the generator and can be freely edited or added to.

```ts
// add an example to examples/<your-example>.ts

#!/usr/bin/env -S npm run tsn -T
…
```

```sh
$ chmod +x examples/<your-example>.ts
# run the example against your api
$ pnpm tsn -T examples/<your-example>.ts
```

## Using the repository from source

If you’d like to use the repository from source, you can either install from git or link to a cloned repository:

To install via git:

```sh
$ npm install git+ssh://git@github.com:augno/internal-sdk.git
```

Alternatively, to link a local copy of the repo:

```sh
# Clone
$ git clone https://www.github.com/augno/internal-sdk
$ cd internal-sdk

# With yarn
$ yarn link
$ cd ../my-package
$ yarn link @augno/internal-sdk

# With pnpm
$ pnpm link --global
$ cd ../my-package
$ pnpm link --global @augno/internal-sdk
```

## Running tests

Most tests require you to [set up a mock server](https://github.com/dgellow/steady) against the OpenAPI spec to run the tests.

```sh
$ ./scripts/mock
```

```sh
$ pnpm run test
```

## Linting and formatting

This repository uses [prettier](https://www.npmjs.com/package/prettier) and
[eslint](https://www.npmjs.com/package/eslint) to format the code in the repository.

To lint:

```sh
$ pnpm lint
```

To format and fix all lint issues automatically:

```sh
$ pnpm fix
```
