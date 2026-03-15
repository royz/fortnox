import type z from "zod";
import type { paths } from "./path-list";

type Paths = typeof paths;

async function request(options: {
  path: string;
  method: string;
  queryParams?: Record<string, any>;
  pathParams?: Record<string, any>;
  requestBody?: any;
}) {
  let url = `https://api.fortnox.se${options.path}`;
  if (options.pathParams) {
    Object.entries(options.pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });
  }

  if (options.queryParams && Object.keys(options.queryParams).length > 0) {
    const flattenedQueryParams = Object.entries(options.queryParams).map(([k, v]) => [k, String(v)])
    url = `${url}?${new URLSearchParams(flattenedQueryParams).toString()}`;
  }

  return fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: options.requestBody && options.method.toLowerCase() !== "get" ? JSON.stringify(options.requestBody) : null,
  })
}

type MethodSchema = { pathParams: z.ZodTypeAny; queryParams: z.ZodTypeAny; requestBody: any };

function fortnox<TPath extends keyof Paths>(path: TPath): { [TMethod in keyof Paths[TPath]]: (options: z.infer<Paths[TPath][TMethod]>) => void } {
  return {} as any;
}
// function fortnox<TPath extends keyof Paths>(path: TPath): { [TMethod in keyof Paths[TPath]]: Paths[TPath][TMethod] extends MethodSchema ? (options: {
//   pathParams: z.infer<Paths[TPath][TMethod]["pathParams"]>;
//   queryParams: z.infer<Paths[TPath][TMethod]["queryParams"]>;
//   requestBody?: any;
// }) => void : never } {
//   return {} as any;
// }

fortnox("/3/invoices/{DocumentNumber}").put({
  params: { DocumentNumber: "sa" },
  body: {}
})