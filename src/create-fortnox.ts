import {
	type ErrorResponse,
	type InitFortnoxOptions,
	METHODS,
	request,
} from "./request";
import type { OmitNever } from "./types/utility-types";

type FortnoxInput<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = TRoutes[TPath][TMethod] extends { request: infer R } ? R : never;

type FortnoxInputCleaned<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = OmitNever<FortnoxInput<TRoutes, TPath, TMethod>>;

type FortnoxOutput<
	TRoutes extends object,
	TPath extends keyof TRoutes,
	TMethod extends keyof TRoutes[TPath],
> = TRoutes[TPath][TMethod] extends { response: { body: infer B } } ? B : never;

type FortnoxResult<TData> = Promise<
	{ error: ErrorResponse; data: null } | { error: null; data: TData }
>;

type FortnoxMethods<TRoutes extends object, TPath extends keyof TRoutes> = {
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

export type FortnoxFn<TRoutes extends object> = <TPath extends keyof TRoutes>(
	path: TPath,
) => FortnoxMethods<TRoutes, TPath>;

export function createInitFortnox<TRoutes extends object>(): {
	(options: { accessToken: string }): FortnoxFn<TRoutes>;
	(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxFn<TRoutes>;
} {
	function initFortnox(options: { accessToken: string }): FortnoxFn<TRoutes>;
	function initFortnox(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxFn<TRoutes>;
	function initFortnox(initOptions: InitFortnoxOptions): FortnoxFn<TRoutes> {
		return function fortnox<TPath extends keyof TRoutes>(
			path: TPath,
		): FortnoxMethods<TRoutes, TPath> {
			return Object.fromEntries(
				METHODS.map((method) => [
					method,
					(options: Record<string, unknown>) =>
						request({ path: path as string, method, ...options }, initOptions),
				]),
			) as unknown as FortnoxMethods<TRoutes, TPath>;
		};
	}
	return initFortnox;
}
