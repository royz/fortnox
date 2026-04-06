import type {
	FortnoxInputCleaned,
	FortnoxMethods,
	FortnoxOutput,
	FortnoxPathFn,
	FortnoxResult,
	ResolveRoutes,
	RouteVariant,
} from "./create-fortnox-mini";
import { type InitFortnoxOptions, METHODS, request } from "./request";
import {
	RESOURCE_OPERATIONS,
	type ResourceOperations,
} from "./types/resource-operations.gen";
import type { OmitNever } from "./types/utility-types";

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

/** Full Fortnox client with both resource accessors and path-based fallback. */
export type FortnoxClient<TRoutes extends object> =
	FortnoxResources<TRoutes> & {
		path: FortnoxPathFn<TRoutes>;
	};

export function createInitFortnox<TVariant extends RouteVariant = "patched">(): {
	(options: { accessToken: string }): FortnoxClient<ResolveRoutes<TVariant>>;
	(options: {
		proxy: { baseUrl: string; apiKey: string; tenantId: string };
	}): FortnoxClient<ResolveRoutes<TVariant>>;
} {
	type TRoutes = ResolveRoutes<TVariant>;

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
