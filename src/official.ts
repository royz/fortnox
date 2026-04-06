import {
	type ErrorResponse,
	type InitFortnoxOptions,
	METHODS,
	request,
} from "./request";
import type { Routes } from "./types/official-routes.gen";
import type { OmitNever } from "./types/utility-types";

type FortnoxInput<
	TPath extends keyof Routes,
	TMethod extends keyof Routes[TPath],
> = Routes[TPath][TMethod] extends { request: infer R } ? R : never;

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
