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

type FortnoxErrorRespose = {
  "ErrorInformation": {
    "error": number,
    "message": string,
    "code": number,
  }
}

type InitFortnoxOptions = { accessToken: string } | { proxyUrl: string; apiKey: string; tenantId: string; };

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


function validateRequestOptions(reqOptions: RequestOptions) {
  if (reqOptions.skipValidation) {
    return;
  }

  const methods = (paths as any)[reqOptions.path];

  const schemas = methods[reqOptions.method.toLowerCase()] as ZodType | undefined;
  if (!schemas) return;

  const { error } = schemas.safeParse({
    query: reqOptions.query,
    params: reqOptions.params,
    body: reqOptions.body,
  })

  if (error) {
    console.error("Validation failed:", formatZodError(error));
    throw new Error("Request validation failed");
  }
}

async function request(reqOptions: RequestOptions, initOptions: InitFortnoxOptions) {
  validateRequestOptions(reqOptions);

  let headers: Record<string, string>;
  let baseUrl: string;

  if ("accessToken" in initOptions) {
    headers = {
      "Authorization": `Bearer ${initOptions.accessToken}`,
    };
    baseUrl = "https://api.fortnox.se";
  } else {
    headers = {
      "x-api-key": initOptions.apiKey,
      "x-tenant-id": initOptions.tenantId,
    };
    baseUrl = initOptions.proxyUrl;
  }

  const searchParams = new URLSearchParams();
  if (reqOptions.query) {
    Object.entries(reqOptions.query).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
  }

  let path = reqOptions.path;
  if (reqOptions.params) {
    Object.entries(reqOptions.params).forEach(([key, value]) => {
      path = path.replace(`{${key}}`, encodeURIComponent(String(value)));
    });
  }

  const url = `${baseUrl}${path}${searchParams.size > 0 ? `?${searchParams.toString()}` : ""}`;

  console.log({
    url,
    method: reqOptions.method,
    body: reqOptions.body,
    headers,
  });

  return {} as any;
  // return new Promise<Response>(resolve => resolve(new Response()));
}

type InferInput<T> = T extends { input: infer TInput extends ZodType } ? z.infer<TInput> : never;
type InferOutput<T> = T extends { output: infer TOutput extends ZodType } ? z.infer<TOutput> : never;

function initFortnox(initOptions: InitFortnoxOptions) {
  return function fortnox<TPath extends keyof Paths>(path: TPath): { [TMethod in keyof Paths[TPath]]: (options: InferInput<Paths[TPath][TMethod]>) => Promise<{ error: FortnoxErrorRespose, data: null } | { error: null, data: InferOutput<Paths[TPath][TMethod]> }> } {
    return Object.fromEntries(
      METHODS.map(method => [
        method.toLowerCase(),
        (options: any) => request({ path, method, ...options }, initOptions),
      ])
    ) as unknown as { [TMethod in keyof Paths[TPath]]: (options: InferInput<Paths[TPath][TMethod]>) => Promise<{ error: FortnoxErrorRespose, data: null } | { error: null, data: InferOutput<Paths[TPath][TMethod]> }> };
  }
}


const fx = initFortnox({ accessToken: 'text-access-token' });
const fx2 = initFortnox({ proxyUrl: "https://test.test", apiKey: "xxyyxx", tenantId: "12345678" });

const res = await fx("/3/invoices/{DocumentNumber}").get({
  params: { DocumentNumber: "123" },
});

if (res.error) throw "";

res.data;