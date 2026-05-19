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

## Regenerating the SDK (`pnpm codegen`)

[`scripts/codegen`](scripts/codegen) runs `stlc build`. STLC performs `git clean` during integration,
which deletes **untracked** files inside this repo. To avoid wiping `specs/internal_openapi_spec.json`,
either **commit that file**, or—in the augno monorepo—let codegen use the sibling API export at
`../api/specs/internal_openapi_spec.json` (that path is chosen automatically when present). Set
`INTERNAL_SDK_OPENAPI_SPEC` to force a different spec file.

Keep **`.gitignore`** tracked in git so `git clean` cannot remove it. [`scripts/utils/git-swap.sh`](scripts/utils/git-swap.sh)
also skips deleting `.gitignore` when flattening `./dist` for git-based installs.

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
