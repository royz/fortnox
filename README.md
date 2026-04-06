# @unifetch/fortnox

TypeScript SDK for the [Fortnox API](https://api.fortnox.se/apidocs), fully typed from the official OpenAPI specification — with corrections applied where the spec has incorrect or overly permissive types.

## Installation

```bash
npm install @unifetch/fortnox
# or
pnpm add @unifetch/fortnox
```

## Initialization

There are two ways to initialize the client.

### 1. Access token

Use this if you manage your own oAuth flow and already have a Fortnox access token.

```ts
import { initFortnox } from "@unifetch/fortnox";

const fortnox = initFortnox({
  accessToken: "your-access-token",
});
```

### 2. Proxy via unifetch.dev

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

## Usage

Call `fortnox` with an API path (with autocomplete suggestions) to get a set of typed HTTP methods for that endpoint.

```ts
const { data, error } = await fortnox("/3/invoices").get();

if (error) {
  console.error(error.ErrorInformation.message);
  // or handle the error some other way
} else {
  // data is non-null here — TypeScript knows this after the error check
  console.log(data.Invoices);
}
```

Every response is a discriminated union of `{ error: null; data: T }` or `{ error: ErrorResponse; data: null }`. Once you handle (or narrow) the error branch, TypeScript automatically infers that `data` is non-null.

### With query parameters

```ts
const { data, error } = await fortnox("/3/invoices").get({
  query: { fromdate: "2024-01-01", todate: "2024-12-31" },
});

if (error) throw error;

for (const invoice of data.Invoices) {
  console.log(invoice.DocumentNumber, invoice.Total);
}
```

### Creating a resource

```ts
const { data, error } = await fortnox("/3/invoices").post({
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

### Fetching a single resource by ID

```ts
const { data, error } = await fortnox("/3/invoices/{DocumentNumber}").get({
  params: { DocumentNumber: "100" },
});

if (error) throw error;

console.log(data.Invoice.CustomerName);
```

## Type definitions

### `@unifetch/fortnox` (default) — patched types

The default import uses **patched type definitions**. Fortnox's official OpenAPI spec has a number of incorrect or missing type constraints (e.g. response wrapper properties marked as optional when they are always present). This package fixes those issues so the types accurately reflect real API behavior. But some of the "patched" types can still be incorrect since we do not have clear documentation.

```ts
import { initFortnox } from "@unifetch/fortnox";
// or equivalently:
import { initFortnox } from "@unifetch/fortnox/patched";
```

### `@unifetch/fortnox/official` — unmodified types

If you need the raw types exactly as they appear in Fortnox's official OpenAPI specification, import from the `/official` subpath.

```ts
import { initFortnox } from "@unifetch/fortnox/official";
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
