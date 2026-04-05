import type { Routes } from "./types/official-routes";

const METHODS = ["get", "post", "put", "delete", "patch"] as const;

type RequestMethod = (typeof METHODS)[number];

type RequestOptions = {
	path: string;
	method: RequestMethod;
	query?: Record<string, unknown>;
	params?: Record<string, unknown>;
	body?: unknown;
};

type FortnoxErrorResponse = {
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

type ErrorResponse = {
	ErrorSource: "fortnox" | "unknown";
	ErrorInformation: {
		error: number;
		message: string;
		code: number;
	};
};

export type InitFortnoxOptions =
	| { accessToken: string }
	| { proxy: { baseUrl: string; apiKey: string; tenantId: string } };

type FortnoxInput<
	TPath extends keyof Routes,
	TMethod extends keyof Routes[TPath],
> = Routes[TPath][TMethod] extends { request: infer R } ? R : never;

type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] };

type FortnoxInputCleaned<
	TPath extends keyof Routes,
	TMethod extends keyof Routes[TPath],
> = OmitNever<FortnoxInput<TPath, TMethod>>;

type FortnoxOutput<
	TPath extends keyof Routes,
	TMethod extends keyof Routes[TPath],
> = Routes[TPath][TMethod] extends { response: { body: infer B } } ? B : never;

type FortnoxResult<TData> = Promise<
	{ error: ErrorResponse; data: null } | { error: null; data: TData }
>;

type FortnoxMethods<TPath extends keyof Routes> = {
	[TMethod in keyof Routes[TPath]]: Routes[TPath][TMethod] extends {
		request: { params: never; body: never };
	}
		? (
				options?: FortnoxInputCleaned<TPath, TMethod>,
			) => FortnoxResult<FortnoxOutput<TPath, TMethod>>
		: (
				options: FortnoxInputCleaned<TPath, TMethod>,
			) => FortnoxResult<FortnoxOutput<TPath, TMethod>>;
};

async function request(
	reqOptions: RequestOptions,
	initOptions: InitFortnoxOptions,
) {
	try {
		let headers: Record<string, string>;
		let baseUrl: string;

		if ("accessToken" in initOptions) {
			headers = {
				Authorization: `Bearer ${initOptions.accessToken}`,
			};
			baseUrl = "https://api.fortnox.se";
		} else {
			headers = {
				"x-api-key": initOptions.proxy.apiKey,
				"x-tenant-id": initOptions.proxy.tenantId,
			};
			baseUrl = initOptions.proxy.baseUrl;
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

		const response = await fetch(url, {
			method: reqOptions.method.toUpperCase(),
			body: reqOptions.body ? JSON.stringify(reqOptions.body) : null,
			headers,
		});

		const responseData = await response.json();

		if (response.status < 300) {
			return { error: null, data: responseData };
		} else {
			return {
				error: {
					ErrorSource: "fortnox" as const,
					ErrorInformation: (responseData as FortnoxErrorResponse)
						.ErrorInformation,
				} satisfies ErrorResponse,
				data: null,
			};
		}
	} catch (e: unknown) {
		return {
			error: {
				ErrorSource: "unknown" as const,
				ErrorInformation: {
					message: e instanceof Error ? e.message : String(e),
					error: -1,
					code: -1,
				},
			} satisfies ErrorResponse,
			data: null,
		};
	}
}

type FortnoxFn = <TPath extends keyof Routes>(
	path: TPath,
) => FortnoxMethods<TPath>;

export function initFortnox(options: { accessToken: string }): FortnoxFn;
export function initFortnox(options: {
	proxy: { baseUrl: string; apiKey: string; tenantId: string };
}): FortnoxFn;
export function initFortnox(initOptions: InitFortnoxOptions): FortnoxFn {
	return function fortnox<TPath extends keyof Routes>(
		path: TPath,
	): FortnoxMethods<TPath> {
		return Object.fromEntries(
			METHODS.map((method) => [
				method,
				(options: Record<string, unknown>) =>
					request({ path, method, ...options }, initOptions),
			]),
		) as unknown as FortnoxMethods<TPath>;
	};
}
