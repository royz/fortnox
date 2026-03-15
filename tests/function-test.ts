import z from "zod";
import { paths } from "./path-list";
import type { ZodType } from "zod";

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

function formatZodError(error: z.ZodError) {
  const errors: Record<string, Record<string, string[]>> = {};

  for (const issue of error.issues) {
    const [root, ...path] = issue.path.map(String);
    if (!root) continue;

    if (!(root in errors)) {
      errors[root] = {};
    }

    const pathKey = path.length > 0 ? path.join(".") : "_";
    if (!(pathKey in errors[root]!)) {
      errors[root]![pathKey] = [];
    }
    errors[root]![pathKey]!.push(issue.message);
  }

  return errors;
}


function validateRequestOptions(options: RequestOptions) {
  if (options.skipValidation) {
    return;
  }

  const methods = (paths as any)[options.path];

  const schemas = methods[options.method.toLowerCase()] as ZodType | undefined;
  if (!schemas) return;

  const { error } = schemas.safeParse({
    query: options.query,
    params: options.params,
    body: options.body,
  })

  if (error) {
    console.error("Validation failed:", formatZodError(error));
    throw new Error("Request validation failed");
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

  return new Promise<Response>(resolve => resolve(new Response()));
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
  params: { DocumentNumber: "123" },
  body: {}
})