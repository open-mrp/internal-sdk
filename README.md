# @augno/internal-sdk

A type-safe API client for the Augno internal V2 API.

## Installation

This package is hosted on GitHub Packages. Configure npm to use GitHub Packages for the `@augno` scope:

```bash
echo "@augno:registry=https://npm.pkg.github.com" >> .npmrc
```

Then install:

```bash
npm install @augno/internal-sdk
```

## Usage

```typescript
import { createV2Client } from '@augno/internal-sdk';

const client = createV2Client({
    baseUrl: 'https://api.augno.com',
    getAccountID: () => currentAccountId,
    onAuthFailure: (error) => {
        // Handle auth failure (e.g., redirect to login)
    },
});

// Make type-safe API calls
const { data, error } = await client.GET('/v1/users/{id}', {
    params: { path: { id: 'user-123' } },
});
```

## Development

### Generate Types

Types are generated from the OpenAPI specification:

```bash
npm run generate
```

### Build

```bash
npm run build
```

### Publish

Ensure you have a valid `GITHUB_TOKEN` environment variable set, then:

```bash
npm publish
```

