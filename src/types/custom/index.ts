export type * from "./invoice.type";
export type * from "./voucher.type";

/** Pagination information */
export type MetaInformation = {
	"@CurrentPage": number;
	"@TotalPages": number;
	"@TotalResources": number;
};
