# @unifetch/fortnox

TypeScript SDK for the [Fortnox API](https://api.fortnox.se/apidocs), fully typed from the official OpenAPI specification — with corrections applied where the spec has incorrect or overly permissive types.

Zero dependencies. Fully compatible with edge runtimes such as [Cloudflare Workers](https://workers.cloudflare.com/) and Vercel Edge Functions.

## Installation

```bash
npm install @unifetch/fortnox
# or
pnpm add @unifetch/fortnox
```

## Initialization

There are two clients to choose from, each with two ways to initialize.

### `initFortnox` — full client

Includes the resource-based API (`fortnox.invoices.getList()`) and the path-based API (`fortnox.path()`). This is the right choice for most server-side applications where bundle size is not a concern.

### `initFortnoxMini` — minimal client

Includes **only** the path-based API (`fortnox.path()`). The entire resource-based layer — including the map of all routes and operation IDs — is absent from this client, which means a bundler can **tree-shake it away entirely**. Use this when bundle size is a hard constraint, such as in [Cloudflare Workers](https://workers.cloudflare.com/) (1 MB compressed limit), Vercel Edge Functions, or any other edge runtime.

```ts
import { initFortnoxMini } from "@unifetch/fortnox";

const fortnox = initFortnoxMini({ accessToken: "your-access-token" });

// Only .path() is available — resource accessors like fortnox.invoices are not
const { data, error } = await fortnox.path("/3/invoices").get();
```

---

### Authentication option 1 — Access token

Use this if you manage your own oAuth flow and already have a Fortnox access token.

```ts
import { initFortnox } from "@unifetch/fortnox";

const fortnox = initFortnox({
  accessToken: "your-access-token",
});
```

The same option is available on `initFortnoxMini`:

```ts
import { initFortnoxMini } from "@unifetch/fortnox";

const fortnox = initFortnoxMini({
  accessToken: "your-access-token",
});
```

### Authentication option 2 — Proxy via unifetch.dev

[unifetch.dev](https://unifetch.dev) acts as a proxy layer that internally handles OAuth and token rotation, removing the need to manage credentials yourself.

```ts
import { initFortnox } from "@unifetch/fortnox";

const fortnox = initFortnox({
  proxy: {
    baseUrl: "https://proxy.unifetch.dev/fortnox",
    apiKey: "your-api-key", // You generate it on unifetch.dev dashboard
    tenantId: "your-tenant-id", // Your company's unique fortnox id. You can see it on unifetch.dev dashboard.
  },
});
```

The same option is available on `initFortnoxMini`:

```ts
import { initFortnoxMini } from "@unifetch/fortnox";

const fortnox = initFortnoxMini({
  proxy: {
    baseUrl: "https://proxy.unifetch.dev/fortnox",
    apiKey: "your-api-key",
    tenantId: "your-tenant-id",
  },
});
```

## Usage

Every response is a discriminated union of `{ error: null; data: T }` or `{ error: ErrorResponse; data: null }`. Once you handle (or narrow) the error branch, TypeScript automatically infers that `data` is non-null.

There are two ways to call the API. `initFortnox` supports both. `initFortnoxMini` supports only the path-based API.

### Resource-based API (recommended)

Access resources by name and call operations by their ID. Both the resource name and operation ID are autocompleted by TypeScript.

> **Note:** The operation names (e.g. `getList`, `create`, `bookkeep`) are **manually curated** and are not derived from the official Fortnox OpenAPI specification. The official spec uses operation ids that are inconsistent and ambiguous across endpoints. The names used here follow a consistent, human-readable convention defined in [`overrides/operation-ids.json`](overrides/operation-ids.json).

```ts
const { data, error } = await fortnox.invoices.getList();

if (error) {
  console.error(error.ErrorInformation.message);
} else {
  // data is non-null here — TypeScript knows this after the error check
  console.log(data.Invoices);
}
```

#### With query parameters

```ts
const { data, error } = await fortnox.invoices.getList({
  query: { fromdate: "2024-01-01", todate: "2024-12-31" },
});

if (error) throw error;

for (const invoice of data.Invoices) {
  console.log(invoice.DocumentNumber, invoice.Total);
}
```

#### Creating a resource

```ts
const { data, error } = await fortnox.invoices.create({
  body: {
    Invoice: {
      CustomerNumber: "1",
      InvoiceRows: [
        { ArticleNumber: "A1", DeliveredQuantity: 2 },
      ],
    },
  },
});

if (error) throw error;

console.log(data.Invoice.DocumentNumber);
```

#### Fetching a single resource by ID

```ts
const { data, error } = await fortnox.invoices.get({
  params: { DocumentNumber: "100" },
});

if (error) throw error;

console.log(data.Invoice.CustomerName);
```

#### Calling an action on a resource

```ts
const { data, error } = await fortnox.invoices.bookkeep({
  params: { DocumentNumber: "100" },
});
```

### Path-based API

If you want to access an endpoint directly by its raw path, use `fortnox.path()`. This is equivalent to the resource-based API under the hood. The path and all the parameters are fully typed.

```ts
const { data, error } = await fortnox.path("/3/invoices").get();

if (error) throw error;

console.log(data.Invoices);
```

```ts
const { data, error } = await fortnox.path("/3/invoices/{DocumentNumber}").get({
  params: { DocumentNumber: "100" },
});
```

## Type definitions

### `@unifetch/fortnox` (default) — patched types

The default import uses **patched type definitions**. Fortnox's official OpenAPI spec has a number of incorrect or missing type constraints (e.g. response wrapper properties marked as optional when they are always present). This package fixes those issues so the types accurately reflect real API behavior. But some of the "patched" types can still be incorrect since we do not have clear documentation.

```ts
import { initFortnox, initFortnoxMini } from "@unifetch/fortnox";
// or equivalently:
import { initFortnox, initFortnoxMini } from "@unifetch/fortnox/patched";
```

### `@unifetch/fortnox/official` — unmodified types

If you need the raw types exactly as they appear in Fortnox's official OpenAPI specification, import from the `/official` subpath.

```ts
import { initFortnox, initFortnoxMini } from "@unifetch/fortnox/official";
```

> **Note:** The official types may include inaccuracies inherited from the upstream spec. Prefer the default (patched) import unless you have a specific reason to use the unmodified types.

## Error handling

The error object has the following shape:

```ts
type ErrorResponse = {
  ErrorSource: "fortnox" | "unknown";
  ErrorInformation: {
    error: number;
    message: string;
    code: number;
  };
};
```

- `ErrorSource: "fortnox"` — the Fortnox API returned a non-2xx response.
- `ErrorSource: "unknown"` — a network or unexpected error occurred.

## License

ISC
