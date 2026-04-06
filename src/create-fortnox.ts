import {
	type ErrorResponse,
	type InitFortnoxOptions,
	METHODS,
	request,
} from "./request";
import {
	RESOURCE_OPERATIONS,
	type ResourceOperations,
} from "./types/resource-operations.gen";
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

/** Resolves the callable type for a single resource operation (path + method pair). */
type FortnoxOpMethod<
	TRoutes extends object,
	TPath,
	TMethod,
> = TPath extends keyof TRoutes
	? TMethod extends keyof TRoutes[TPath]
		? TRoutes[TPath][TMethod] extends {
				request: { params: never; body: never };
			}
			? (
					options?: FortnoxInputCleaned<TRoutes, TPath, TMethod>,
				) => FortnoxResult<FortnoxOutput<TRoutes, TPath, TMethod>>
			: (
					options: FortnoxInputCleaned<TRoutes, TPath, TMethod>,
				) => FortnoxResult<FortnoxOutput<TRoutes, TPath, TMethod>>
		: never
	: never;

/** Methods for a single resource, keyed by operation ID, filtered to only those present in TRoutes. */
type FortnoxResourceMethods<
	TRoutes extends object,
	TResource extends keyof ResourceOperations,
> = OmitNever<{
	[TOp in keyof ResourceOperations[TResource]]: ResourceOperations[TResource][TOp] extends {
		path: infer P;
		method: infer M;
	}
		? FortnoxOpMethod<TRoutes, P, M>
		: never;
}>;

/** Resource-based accessor shape: fortnox.invoices.getList(...) */
type FortnoxResources<TRoutes extends object> = {
	[TResource in keyof ResourceOperations]: FortnoxResourceMethods<
		TRoutes,
		TResource
	>;
};

/** Path-based accessor: fortnox.path("/3/invoices").get(...) */
export type FortnoxPathFn<TRoutes extends object> = <
	TPath extends keyof TRoutes,
>(
	path: TPath,
) => FortnoxMethods<TRoutes, TPath>;

/** Full Fortnox client with both resource accessors and path-based fallback. */
export type FortnoxClient<TRoutes extends object> =
	FortnoxResources<TRoutes> & {
		path: FortnoxPathFn<TRoutes>;
	};

export function createInitFortnox<TRoutes extends object>(): {
	(options: { accessToken: string }): FortnoxClient<TRoutes>;
	(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxClient<TRoutes>;
} {
	function initFortnox(options: {
		accessToken: string;
	}): FortnoxClient<TRoutes>;
	function initFortnox(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxClient<TRoutes>;
	function initFortnox(
		initOptions: InitFortnoxOptions,
	): FortnoxClient<TRoutes> {
		const pathFn = <TPath extends keyof TRoutes>(
			path: TPath,
		): FortnoxMethods<TRoutes, TPath> => {
			return Object.fromEntries(
				METHODS.map((method) => [
					method,
					(options: Record<string, unknown>) =>
						request({ path: path as string, method, ...options }, initOptions),
				]),
			) as unknown as FortnoxMethods<TRoutes, TPath>;
		};

		const client = { path: pathFn } as unknown as FortnoxClient<TRoutes>;

		for (const [resource, ops] of Object.entries(RESOURCE_OPERATIONS)) {
			const resourceMethods: Record<string, unknown> = {};
			for (const [opId, { path, method }] of Object.entries(
				ops as Record<string, { path: string; method: string }>,
			)) {
				resourceMethods[opId] = (options: Record<string, unknown> = {}) =>
					request(
						{ path, method: method as (typeof METHODS)[number], ...options },
						initOptions,
					);
			}
			(client as unknown as Record<string, unknown>)[resource] =
				resourceMethods;
		}

		return client;
	}
	return initFortnox;
}
