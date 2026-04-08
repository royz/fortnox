import type { FortnoxListWrap } from "../utility-types";

export type WriteOff = {
	AccountNumber: number;
	Amount: number;
	CostCenter: string;
	Currency: string;
	Description: string;
	Project: string;
	TransactionInformation: string;
};

export type InvoicePayment = {
	"@url": string;
	Amount: number;
	AmountCurrency: number;
	Booked: boolean;
	Currency: string;
	CurrencyRate: number;
	CurrencyUnit: number;
	ExternalInvoiceReference1: string;
	ExternalInvoiceReference2: string;
	InvoiceCustomerName: string;
	InvoiceCustomerNumber: string;
	InvoiceDueDate: string;
	InvoiceNumber: number;
	InvoiceOCR: string;
	InvoiceTotal: string;
	ModeOfPayment: string;
	ModeOfPaymentAccount: number;
	Number: string;
	PaymentDate: string;
	Source: string;
	VoucherNumber: number;
	VoucherSeries: string;
	VoucherYear: number;
	WriteOffs: WriteOff[];
};

export type InvoicePaymentResponse = { InvoicePayment: InvoicePayment };

export type InvoicePaymentListItem = {
	"@url": string;
	Amount: number;
	Booked: boolean;
	Currency: string;
	CurrencyRate: number;
	CurrencyUnit: number;
	InvoiceNumber: number;
	Number: string;
	PaymentDate: string;
	Source: string;
	WriteOffExist: boolean;
};

export type InvoicePaymentListResponse = FortnoxListWrap<
	"InvoicePayments",
	InvoicePaymentListItem
>;
