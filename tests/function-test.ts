import type z from "zod";
import { paths } from "./path-list";

type Paths = typeof paths;

const METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH"] as const;

type RequestMethod = typeof METHODS[number];

type RequestOptions = {
  path: string;
  method: RequestMethod;
  query?: Record<string, any>;
  params?: Record<string, any>;
  body?: any;
  /** if true, skip zod validation of request parameters */
  skipValidation?: boolean;
}

function validateRequestOptions(options: RequestOptions) {
  if (options.skipValidation) {
    return;
  }

  const methods = (paths as any)[options.path];
  if (!methods) return;

  const schemas = methods[options.method.toLowerCase()];
  if (!schemas) return;

  if (schemas.params) {
    schemas.params.parse(options.params);
  }

  if (schemas.query) {
    schemas.query.parse(options.query);
  }

  if (schemas.body) {
    schemas.body.parse(options.body);
  }
}

async function request(options: RequestOptions) {
  validateRequestOptions(options);

  let url = `https://api.fortnox.se${options.path}`;
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });
  }

  if (options.query && Object.keys(options.query).length > 0) {
    const flattenedQueryParams = Object.entries(options.query).map(([k, v]) => [k, String(v)])
    url = `${url}?${new URLSearchParams(flattenedQueryParams).toString()}`;
  }

  console.log({
    url,
    method: options.method,
    body: options.body,
  });

  // return fetch(url, {
  //   method: options.method,
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json",
  //   },
  //   body: options.body && options.method.toLowerCase() !== "get" ? JSON.stringify(options.body) : null,
  // })

  return new Promise<Response>(resolve => setTimeout(() => resolve(new Response()), 1000));
}

function fortnox<TPath extends keyof Paths>(path: TPath): { [TMethod in keyof Paths[TPath]]: (options: z.infer<Paths[TPath][TMethod]>) => void } {
  return Object.fromEntries(
    METHODS.map(method => [
      method.toLowerCase(),
      (options: any) => request({ path, method, ...options }),
    ])
  ) as { [TMethod in keyof Paths[TPath]]: (options: z.infer<Paths[TPath][TMethod]>) => Promise<Response> };
}

const v = fortnox("/3/invoices/{DocumentNumber}").put({
  params: { DocumentNumber: "sa" },
  body: {}
})