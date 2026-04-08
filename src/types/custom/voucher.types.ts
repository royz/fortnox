import type { FortnoxListWrap } from "../utility-types";

export type VoucherReferenceType =
	| "ACCRUAL"
	| "CASHINVOICE"
	| "INVOICE"
	| "INVOICEPAYMENT"
	| "MANUAL"
	| "SUPPLIERPAYMENT"
	| "SUPPLIERINVOICE";

export type VoucherRow = {
	Account: number;
	CostCenter: string;
	Credit: number;
	Debit: number;
	Description: string;
	Project: string;
	Quantity: number;
	Removed: boolean;
	TransactionInformation: string;
};

export type Voucher = {
	"@url": string;
	ApprovalState: number;
	Comments: string | null;
	CostCenter: string;
	Description: string;
	Project: string;
	ReferenceNumber: string;
	ReferenceType: VoucherReferenceType;
	TransactionDate: string;
	VoucherNumber: number;
	VoucherRows: VoucherRow[];
	VoucherSeries: string;
	Year: number;
};

export type VoucherResponse = { Voucher: Voucher };

export type VoucherListItem = Pick<
	Voucher,
	| "@url"
	| "ApprovalState"
	| "Comments"
	| "Description"
	| "ReferenceNumber"
	| "ReferenceType"
	| "TransactionDate"
	| "VoucherNumber"
	| "VoucherSeries"
	| "Year"
>;

export type VoucherListResponse = FortnoxListWrap<"Vouchers", VoucherListItem>;
