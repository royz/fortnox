import type { HTTP_METHODS } from "../lib/utils";
import type { Routes } from "../src/types/official-routes.gen";

type Route = keyof Routes;
type Method = (typeof HTTP_METHODS)[number];

type CustomType = string;

export const typeOverrides = {
	"/3/invoices": {
		get: {
			response: "InvoiceListWrap",
		},
	},
	"/3/invoices/{DocumentNumber}": {
		get: {
			response: "InvoiceResponse",
		},
	},
} satisfies {
	[key in Route]?: {
		[key in Method]?: {
			request?: CustomType;
			response?: CustomType;
		};
	};
};
