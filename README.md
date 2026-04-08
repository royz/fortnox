# @unifetch/fortnox

TypeScript SDK for the [Fortnox API](https://api.fortnox.se/apidocs), fully typed from the official OpenAPI specification - with corrections applied where the spec has incorrect or overly permissive types.

Zero dependencies. Fully compatible with edge runtimes such as [Cloudflare Workers](https://workers.cloudflare.com/) and Vercel Edge Functions.

---

> ### 💼 Need a Custom Fortnox Integration?
>
> Whether you're building a bespoke ERP workflow, automating invoicing, or connecting Fortnox to your own platform - I can help.
>
> **Get in touch:** [rajorshi.me@gmail.com](mailto:rajorshi.me@gmail.com)
>

---

## Installation

```bash
npm install @unifetch/fortnox
# or
pnpm add @unifetch/fortnox
```

---

## Clients

There are two clients to choose from.

### `initFortnox` - full client

Includes both the resource-based API (`fortnox.invoices.getList()`) and the path-based API (`fortnox.path()`). This is the right choice for most server-side applications where bundle size is not a concern.

```ts
import { initFortnox } from "@unifetch/fortnox";
```

### `initFortnoxMini` - minimal client

Includes **only** the path-based API (`fortnox.path()`). The entire resource-based layer - including the map of all routes and operation IDs - is absent from this client, which means a bundler can **tree-shake it away entirely**. Use this when bundle size is a hard constraint, such as in [Cloudflare Workers](https://workers.cloudflare.com/) or Vercel Edge Functions.

```ts
import { initFortnoxMini } from "@unifetch/fortnox/mini";
```

The difference in practice, measured with `wrangler deploy --dry-run` on a fresh Hono + Cloudflare Workers project:

| | Size | Gzip |
|---|---|---|
| Fresh Hono project (baseline) | 61.96 KiB | 15.05 KiB |
| With `initFortnox` | 99.92 KiB | 19.61 KiB |
| With `initFortnoxMini` | 64.63 KiB | 15.84 KiB |

`initFortnoxMini` adds less than **0.8 KiB gzipped** over the baseline, versus over **4.5 KiB** for the full client.

---

## Route variant

Both clients accept an optional `"official" | "patched"` generic that controls which type definitions are used. It defaults to `"patched"`.

| Variant | Description |
|---|---|
| `"patched"` *(default)* | Corrected types - fixes inaccuracies in Fortnox's official spec (e.g. response wrapper properties incorrectly marked as optional). Recommended for most projects. |
| `"official"` | Raw, unmodified types exactly as they appear in Fortnox's official OpenAPI specification. |

```ts
// "patched" is the default - no generic needed
const fortnox = initFortnox({ accessToken: "..." });

// Explicitly patched
const fortnox = initFortnox<"patched">({ accessToken: "..." });

// Official, unmodified Fortnox types
const fortnox = initFortnox<"official">({ accessToken: "..." });
```

The same generic is available on `initFortnoxMini`:

```ts
import { initFortnoxMini } from "@unifetch/fortnox/mini";

const fortnox = initFortnoxMini<"official">({ accessToken: "..." });
```

---

## Initialization

Both clients support two authentication options.

### Option 1 - Access token

Use this if you manage your own OAuth flow and already have a Fortnox access token.

```ts
import { initFortnox } from "@unifetch/fortnox";

const fortnox = initFortnox({ accessToken: "your-access-token" });
```

### Option 2 - Proxy via unifetch.dev

[unifetch.dev](https://unifetch.dev) acts as a proxy layer that internally handles OAuth and token rotation, removing the complecity of managing credentials yourself.

```ts
import { initFortnox } from "@unifetch/fortnox";

const fortnox = initFortnox({
  proxy: {
    baseUrl: "https://proxy.unifetch.dev/fortnox",
    apiKey: "your-api-key",     // Generate on the unifetch.dev dashboard
    tenantId: "your-tenant-id", // Your company's unique Fortnox ID, visible on the unifetch.dev dashboard
  },
});
```

---

## Usage

Every response is a discriminated union of `{ error: null; data: T }` or `{ error: ErrorResponse; data: null }`. Once you handle (or narrow) the error branch, TypeScript automatically infers that `data` is non-null.

`initFortnox` supports both APIs below. `initFortnoxMini` supports only the path-based API.

### Resource-based API (recommended)

Access resources by name and call operations by their ID. Both the resource name and the operation ID are autocompleted by TypeScript.

> **Note:** Operation names (e.g. `getList`, `create`, `bookkeep`) are **manually curated** and are not derived from the official Fortnox OpenAPI spec. The official spec uses operation IDs that are inconsistent and ambiguous across endpoints. The names used here follow a consistent, human-readable convention defined in [`overrides/operation-ids.json`](overrides/operation-ids.json).

#### Fetching a list

```ts
const { data, error } = await fortnox.invoices.getList();

if (error) {
  console.error(error.ErrorInformation.message);
} else {
  // data is non-null here - TypeScript knows this after the error check
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

#### Fetching a single resource

```ts
const { data, error } = await fortnox.invoices.get({
  params: { DocumentNumber: "100" },
});

if (error) throw error;

console.log(data.Invoice.CustomerName);
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

#### Calling an action on a resource

```ts
const { data, error } = await fortnox.invoices.bookkeep({
  params: { DocumentNumber: "100" },
});
```

### Path-based API

Call any endpoint directly by its raw path. The path, parameters, and response are fully typed.

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

This is the only API available on `initFortnoxMini`:

```ts
import { initFortnoxMini } from "@unifetch/fortnox/mini";

const fortnox = initFortnoxMini({ accessToken: "your-access-token" });

const { data, error } = await fortnox.path("/3/invoices").get();
```

---

## File downloads and uploads

### Binary responses (Archive & Inbox)

Some routes - particularly under the **Archive** and **Inbox** sections of the Fortnox API - can return either a JSON response containing folder/file metadata, or the raw binary content of a file, depending on the resource requested. These endpoints are typed to return a **union** of both possibilities.

Use the `isBinaryResponse()` type guard, importable from `@unifetch/fortnox/utils`, to discriminate between the two at runtime:

```ts
import { isBinaryResponse } from "@unifetch/fortnox/utils";

const { data, error } = await fortnox.path("/3/archive/{id}").get({
  params: { id: "abc123" },
});

if (error) throw error;

if (isBinaryResponse(data)) {
  // data is { file: ArrayBuffer; filename: string; mimetype: string }
  console.log(data.filename, data.mimetype);
  // e.g. write data.file to disk or return it as a download response
} else {
  // data is the JSON folder/file metadata object
  console.log(data.Folder);
}
```

When the Fortnox API returns a binary response, the library reads the raw response body into an `ArrayBuffer` and wraps it in the following shape:

```ts
type BinaryResponse = {
  file: ArrayBuffer;
  filename: string;  // derived from the Content-Disposition header
  mimetype: string;  // derived from the Content-Type header
};
```

### File uploads

Routes that accept a file upload (e.g. uploading a document to the Archive or Inbox) expect the following shape as the request body:

```ts
{
  file: Buffer<ArrayBuffer>;
  filename: string;
}
```

The library handles the multipart encoding internally - it constructs a `FormData` request body automatically. You do not need to set any headers or build the form yourself:

```ts
import { readFile } from "node:fs/promises";

const { data, error } = await fortnox.archive.upload({
  body: {
    file: await readFile("./invoice.pdf"),
    filename: "invoice.pdf",
  },
});
```

---

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

- `ErrorSource: "fortnox"` - the Fortnox API returned a non-2xx response.
- `ErrorSource: "unknown"` - a network or unexpected error occurred.

---

## License

ISC
