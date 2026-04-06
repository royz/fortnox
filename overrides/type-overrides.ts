import type { HTTP_METHODS } from "../lib/utils";
import type { Routes } from "../src/types/official-routes.gen";

type Route = keyof Routes;
type Method = (typeof HTTP_METHODS)[number];

type CustomType = string;

const typeOverrides = new Map<
	Route[],
	{ [key in Method]?: { request?: CustomType; response?: CustomType } }
>();

// Invoices
typeOverrides.set(["/3/invoices"], {
	get: { response: "InvoiceListResponse" },
});

typeOverrides.set(["/3/invoices/{DocumentNumber}"], {
	get: { response: "InvoiceResponse" },
});

// Vouchers
typeOverrides.set(
	["/3/vouchers", "/3/vouchers/sublist/{VoucherSeries}", "/3/vouchers/sublist"],
	{
		get: { response: "VoucherListResponse" },
	},
);
typeOverrides.set(["/3/vouchers/{VoucherSeries}/{VoucherNumber}"], {
	get: { response: "VoucherResponse" },
});

export const flattenedTypeOverrides: {
	[key in Route]?: {
		[key in Method]?: {
			request?: CustomType;
			response?: CustomType;
		};
	};
} = Object.fromEntries(
	Array.from(typeOverrides.entries()).flatMap(([routes, methods]) =>
		routes.map((route) => [route, methods] as const),
	),
);
