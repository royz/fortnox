import {
	type ErrorResponse,
	type InitFortnoxOptions,
	METHODS,
	request,
} from "./request";
import type { OmitNever } from "./types/utility-types";

export type FortnoxInput<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = TRoutes[TPath][TMethod] extends { request: infer R } ? R : never;

export type FortnoxInputCleaned<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = OmitNever<FortnoxInput<TRoutes, TPath, TMethod>>;

export type FortnoxOutput<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = TRoutes[TPath][TMethod] extends { response: { body: infer B } } ? B : never;

export type FortnoxResult<TData> = Promise<
	{ error: ErrorResponse; data: null } | { error: null; data: TData }
>;

export type FortnoxMethods<
	TRoutes extends object,
	TPath extends keyof TRoutes,
> = {
	[TMethod in keyof TRoutes[TPath]]: TRoutes[TPath][TMethod] extends {
		request: { params: never; body: never };
	}
		? (
				options?: FortnoxInputCleaned<TRoutes, TPath, TMethod>,
			) => FortnoxResult<FortnoxOutput<TRoutes, TPath, TMethod>>
		: (
				options: FortnoxInputCleaned<TRoutes, TPath, TMethod>,
			) => FortnoxResult<FortnoxOutput<TRoutes, TPath, TMethod>>;
};

/** Path-based accessor: fortnox.path("/3/invoices").get(...) */
export type FortnoxPathFn<TRoutes extends object> = <
	TPath extends keyof TRoutes,
>(
	path: TPath,
) => FortnoxMethods<TRoutes, TPath>;

/** Minimal Fortnox client with only the path-based accessor. Ideal for edge runtimes. */
export type FortnoxPathClient<TRoutes extends object> = {
	path: FortnoxPathFn<TRoutes>;
};

export function createInitFortnoxMini<TRoutes extends object>(): {
	(options: { accessToken: string }): FortnoxPathClient<TRoutes>;
	(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxPathClient<TRoutes>;
} {
	function initFortnoxMini(options: {
		accessToken: string;
	}): FortnoxPathClient<TRoutes>;
	function initFortnoxMini(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxPathClient<TRoutes>;
	function initFortnoxMini(
		initOptions: InitFortnoxOptions,
	): FortnoxPathClient<TRoutes> {
		const path = <TPath extends keyof TRoutes>(
			p: TPath,
		): FortnoxMethods<TRoutes, TPath> => {
			return Object.fromEntries(
				METHODS.map((method) => [
					method,
					(options: Record<string, unknown>) =>
						request({ path: p as string, method, ...options }, initOptions),
				]),
			) as unknown as FortnoxMethods<TRoutes, TPath>;
		};

		return { path };
	}

	return initFortnoxMini;
}
