import { createInitFortnox, type FortnoxClient } from "./create-fortnox";
import type { ResolveRoutes, RouteVariant } from "./create-fortnox-mini";
import type { InitFortnoxOptions } from "./request";

export function initFortnox<TVariant extends RouteVariant = "patched">(
	options: { accessToken: string },
): FortnoxClient<ResolveRoutes<TVariant>>;
export function initFortnox<TVariant extends RouteVariant = "patched">(
	options: { proxy: { baseUrl: string; apiKey: string; tenantId: string } },
): FortnoxClient<ResolveRoutes<TVariant>>;
export function initFortnox<TVariant extends RouteVariant = "patched">(
	options: InitFortnoxOptions,
): FortnoxClient<ResolveRoutes<TVariant>> {
	return createInitFortnox<TVariant>()(options as any);
}
