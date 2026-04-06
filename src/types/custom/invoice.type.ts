import type { FortnoxListWrap } from "../utility-types";

export type HouseWorkType =
	| "CONSTRUCTION"
	| "ELECTRICITY"
	| "GLASSMETALWORK"
	| "GROUNDDRAINAGEWORK"
	| "MASONRY"
	| "PAINTINGWALLPAPERING"
	| "HVAC"
	| "MAJORAPPLIANCEREPAIR"
	| "MOVINGSERVICES"
	| "ITSERVICES"
	| "CLEANING"
	| "TEXTILECLOTHING"
	| "SNOWPLOWING"
	| "GARDENING"
	| "BABYSITTING"
	| "OTHERCARE"
	| "OTHERCOSTS"
	| "SOLARCELLS"
	| "STORAGESELFPRODUCEDELECTRICITY"
	| "CHARGINGSTATIONELECTRICVEHICLE"
	| "HOMEMAINTENANCE"
	| "FURNISHING"
	| "TRANSPORTATIONSERVICES"
	| "WASHINGANDCAREOFCLOTHING";

export type InvoiceType =
	| "INVOICE"
	| "AGREEMENTINVOICE"
	| "INTRESTINVOICE"
	| "SUMMARYINVOICE"
	| "CASHINVOICE";

export type TaxReductionType = "none" | "rot" | "rut" | "green";

export type InvoiceRow = {
	AccountNumber: number;
	ArticleNumber: string;
	ContributionPercent: string;
	ContributionValue: string;
	Cost: number;
	CostCenter: string | null;
	DeliveredQuantity: string;
	Description: string;
	Discount: number;
	DiscountType: "AMOUNT" | "PERCENT";
	HouseWork: boolean;
	HouseWorkHoursToReport: number | null;
	HouseWorkType: HouseWorkType | null;
	Price: number;
	PriceExcludingVAT: number;
	Project: string;
	RowId: number;
	StockPointCode: string | null;
	Total: number;
	TotalExcludingVAT: number;
	Unit: string;
	VAT: number;
	VATCode: string;
};

type EDIInformation = {
	EDIGlobalLocationNumber: string;
	EDIGlobalLocationNumberDelivery: string;
	EDIInvoiceExtra1: string;
	EDIInvoiceExtra2: string;
	EDIOurElectronicReference: string;
	EDIStatus: string;
	EDIYourElectronicReference: string;
};

type EmailInformation = {
	EmailAddressBCC: string;
	EmailAddressCC: string;
	EmailAddressFrom: string | null;
	EmailAddressTo: string;
	EmailBody: string;
	EmailSubject: string;
};

export type Invoice = {
	"@url": string;
	"@urlTaxReductionList": string;
	AccountingMethod: "ACCRUAL" | "CASH";
	Address1: string;
	Address2: string;
	AdministrationFee: number;
	AdministrationFeeVAT: number;
	Balance: number;
	BasisTaxReduction: number;
	Booked: boolean;
	Cancelled: boolean;
	City: string;
	Comments: string;
	ContractReference: number;
	ContributionPercent: number;
	ContributionValue: number;
	CostCenter: string;
	Country: string;
	Credit: string;
	CreditInvoiceReference: string;
	Currency: string;
	CurrencyRate: number;
	CurrencyUnit: number;
	CustomerName: string;
	CustomerNumber: string;
	DeliveryAddress1: string;
	DeliveryAddress2: string;
	DeliveryCity: string;
	DeliveryCountry: string;
	DeliveryDate: string | null;
	DeliveryName: string;
	DeliveryZipCode: string;
	DocumentNumber: string;
	DueDate: string;
	EDIInformation: EDIInformation;
	EUQuarterlyReport: boolean;
	EmailInformation: EmailInformation;
	ExternalInvoiceReference1: string;
	ExternalInvoiceReference2: string;
	FinalPayDate: string | null;
	Freight: number;
	FreightVAT: number;
	Gross: number;
	HouseWork: boolean;
	InvoiceDate: string;
	InvoicePeriodEnd: string;
	InvoicePeriodReference: string;
	InvoicePeriodStart: string;
	InvoiceReference: string;
	InvoiceRows: InvoiceRow[];
	InvoiceType: InvoiceType;
	Labels: { Id: number }[];
	Language: "SV" | "EN";
	LastRemindDate: string | null;
	Net: number;
	NotCompleted: boolean;
	NoxFinans: boolean;
	OCR: string;
	OfferReference: string;
	OrderReference: string;
	OrganisationNumber: string;
	OurReference: string;
	OutboundDate: string;
	PaymentWay: "CASH" | "CARD" | "AG";
	Phone1: string;
	Phone2: string;
	PriceList: string;
	PrintTemplate: string;
	Project: string;
	Remarks: string;
	Reminders: number;
	RoundOff: number;
	Sent: boolean;
	TaxReduction: number | null;
	TaxReductionType: TaxReductionType;
	TermsOfDelivery: string;
	TermsOfPayment: string;
	TimeBasisReference: number | null;
	Total: number;
	TotalToPay: number;
	TotalVAT: number;
	VATIncluded: boolean;
	VoucherNumber: number | null;
	VoucherSeries: string | null;
	VoucherYear: number | null;
	WarehouseReady: boolean;
	WayOfDelivery: string;
	YourOrderNumber: string;
	YourReference: string;
	ZipCode: string;
};

export type InvoiceResponse = { Invoice: Invoice };

type InvoiceListItem = Pick<
	Invoice,
	| "@url"
	| "Balance"
	| "Booked"
	| "Cancelled"
	| "CostCenter"
	| "Currency"
	| "CurrencyRate"
	| "CurrencyUnit"
	| "CustomerName"
	| "CustomerNumber"
	| "DocumentNumber"
	| "DueDate"
	| "ExternalInvoiceReference1"
	| "ExternalInvoiceReference2"
	| "InvoiceDate"
	| "InvoiceType"
	| "NoxFinans"
	| "OCR"
	| "VoucherNumber"
	| "VoucherSeries"
	| "VoucherYear"
	| "WayOfDelivery"
	| "TermsOfPayment"
	| "Project"
	| "Sent"
	| "Total"
	| "FinalPayDate"
>;

export type InvoiceListWrap = FortnoxListWrap<"Invoices", InvoiceListItem>;
