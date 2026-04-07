import {
	createInitFortnoxMini,
	type FortnoxPathClient,
	type ResolveRoutes,
	type RouteVariant,
} from "./create-fortnox-mini";
import type { InitFortnoxOptions } from "./request";

export function initFortnoxMini<TVariant extends RouteVariant = "patched">(
	options: InitFortnoxOptions,
): FortnoxPathClient<ResolveRoutes<TVariant>> {
	return createInitFortnoxMini<TVariant>()(options);
}
