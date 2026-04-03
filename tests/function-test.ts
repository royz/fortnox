import { writeFile } from "node:fs/promises";
import type { ZodError, ZodType } from "zod";
import z from "zod";
import { env } from "./env";
import { paths } from "./path-list";

type Paths = typeof paths;

const METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH"] as const;

type RequestMethod = (typeof METHODS)[number];

type RequestOptions = {
	path: string;
	method: RequestMethod;
	query?: Record<string, any>;
	params?: Record<string, any>;
	body?: any;
};

type FortnoxErrorRespose = {
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

type ErrorRespose = {
	ErrorSource: "fortnox" | "validation" | "unknown";
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

type InitFortnoxOptions =
	| { accessToken: string; skipValidation?: boolean }
	| {
			proxyUrl: string;
			apiKey: string;
			tenantId: string;
			skipValidation?: boolean;
	  };

function validateRequestOptions(
	reqOptions: RequestOptions,
): ZodError | undefined {
	const methods = (paths as any)[reqOptions.path];

	const schemas = methods[reqOptions.method.toLowerCase()]?.input as
		| ZodType
		| undefined;
	if (!schemas) return undefined;

	const { error } = schemas.safeParse({
		query: reqOptions.query,
		params: reqOptions.params,
		body: reqOptions.body,
	});
	return error;
}

async function request(
	reqOptions: RequestOptions,
	initOptions: InitFortnoxOptions,
) {
	try {
		if (!initOptions.skipValidation) {
			const error = validateRequestOptions(reqOptions);
			if (error) {
				return {
					ErrorSource: "validation",
					ErrorInformation: {
						message: z.prettifyError(error),
						error: -1,
						code: -1,
					},
				} satisfies ErrorRespose;
			}
		}

		let headers: Record<string, string>;
		let baseUrl: string;

		if ("accessToken" in initOptions) {
			headers = {
				Authorization: `Bearer ${initOptions.accessToken}`,
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

		const response = await fetch(url, {
			method: reqOptions.method,
			body: reqOptions.body ? JSON.stringify(reqOptions.body) : null,
			headers,
		});

		const resposneData = await response.json();

		if (response.status < 300) {
			// Success
			return { error: null, data: resposneData };
		} else {
			// Error
			return {
				error: {
					ErrorSource: "fortnox",
					ErrorInformation: (resposneData as FortnoxErrorRespose)
						.ErrorInformation,
				} satisfies ErrorRespose,
				data: null,
			};
		}
	} catch (e: any) {
		return {
			ErrorSource: "unknown",
			ErrorInformation: {
				message: e.message,
				error: -1,
				code: -1,
			},
		} satisfies ErrorRespose;
	}
}

type InferInput<T> = T extends { input: infer TInput extends ZodType }
	? z.infer<TInput>
	: never;
type InferOutput<T> = T extends { output: infer TOutput extends ZodType }
	? z.infer<TOutput>
	: never;

type FortnoxResult<TData> = Promise<
	{ error: ErrorRespose; data: null } | { error: null; data: TData }
>;
type FortnoxMethods<TPath extends keyof Paths> = {
	[TMethod in keyof Paths[TPath]]: undefined extends InferInput<
		Paths[TPath][TMethod]
	>
		? (
				options?: InferInput<Paths[TPath][TMethod]>,
			) => FortnoxResult<InferOutput<Paths[TPath][TMethod]>>
		: (
				options: InferInput<Paths[TPath][TMethod]>,
			) => FortnoxResult<InferOutput<Paths[TPath][TMethod]>>;
};

function initFortnox(initOptions: InitFortnoxOptions) {
	return function fortnox<TPath extends keyof Paths>(
		path: TPath,
	): FortnoxMethods<TPath> {
		return Object.fromEntries(
			METHODS.map((method) => [
				method.toLowerCase(),
				(options: any) => request({ path, method, ...options }, initOptions),
			]),
		) as any;
	};
}

// const fx = initFortnox({ accessToken: 'text-access-token' });
const fx = initFortnox({
	proxyUrl: env.PROXY_URL,
	apiKey: env.API_KEY,
	tenantId: env.TENANT_ID,
});

const res = await fx("/3/invoices").get();

if (res.error) throw res.error;

await writeFile("response.json", JSON.stringify(res.data, null, 2), "utf-8");
console.log(res.data.MetaInformation);
