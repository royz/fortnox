import { createInitFortnox } from "./create-fortnox";
import { createInitFortnoxMini } from "./create-fortnox-mini";
import type { Routes } from "./types/official-routes.gen";

export const initFortnox = createInitFortnox<Routes>();
export const initFortnoxMini = createInitFortnoxMini<Routes>();
