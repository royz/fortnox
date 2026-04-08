import type { BinaryResponse } from "../request";
import type {
	ArticleListResponse,
	ArticleResponse,
	InvoiceListResponse,
	InvoicePaymentListResponse,
	InvoicePaymentResponse,
	InvoiceResponse,
	TaxReductionListResponse,
	TaxReductionResponse,
	VoucherListResponse,
	VoucherResponse,
} from "./custom";
import type {
	FileattachmentsAttachment,
	FileattachmentsNumberOfAttachments,
	FortnoxAnlAdjustAssetValueWrap,
	FortnoxAnlAssetActionsSingleItem,
	FortnoxAnlAssetsActionResponse,
	FortnoxAnlAssetsDepreciationResponseWrap,
	FortnoxAnlAssetsListItemWrap,
	FortnoxAnlAssetsSingleItemResponseWrap,
	FortnoxAnlAssetsSinglePayloadItemWrap,
	FortnoxAnlAssetTypesListResponseWrap,
	FortnoxAnlAssetTypesSingleResponseWrap,
	FortnoxAnlCreateAssetTypeWrap,
	FortnoxAnlDepreciationWrap,
	FortnoxAnlScrapAssetWrap,
	FortnoxAnlSellAssetWrap,
	FortnoxAnlUpdateAssetTypeWrap,
	FortnoxArticleSingleItemWrap,
	FortnoxArticleSinglePayloadItemWrap,
	FortnoxBfAccountChartListItemWrap,
	FortnoxBfAccountListItemWrap,
	FortnoxBfAccountSingleItemWrap,
	FortnoxBfAccountSinglePayloadItemWrap,
	FortnoxBfFinancialYearListItemWrap,
	FortnoxBfFinancialYearSingleItemWrap,
	FortnoxBfFinancialYearSinglePayloadItemWrap,
	FortnoxBfPreDefinedVoucherSeriesListItemWrap,
	FortnoxBfPreDefinedVoucherSeriesSingleItemWrap,
	FortnoxBfPreDefinedVoucherSeriesSinglePayloadItemWrap,
	FortnoxBfVoucherSeriesListItemWrap,
	FortnoxBfVoucherSeriesSingleItemWrap,
	FortnoxBfVoucherSeriesSinglePayloadItemWrap,
	FortnoxBfVoucherSinglePayloadItemWrap,
	FortnoxCompanyCompanySettingsResponseWrap,
	FortnoxCompanyInformationSingleItemWrap,
	FortnoxContractInvoiceContractAccrualListItemWrap,
	FortnoxContractInvoiceContractAccrualSingleItemWrap,
	FortnoxContractInvoiceContractAccrualSinglePayloadItemWrap,
	FortnoxContractInvoiceContractCreatePayloadWrap,
	FortnoxContractInvoiceContractListResponseWrap,
	FortnoxContractInvoiceContractResponseWrap,
	FortnoxContractInvoiceContractTemplateListResponseWrap,
	FortnoxContractInvoiceContractTemplateResponseWrap,
	FortnoxContractInvoiceContractTemplateSinglePayloadItemWrap,
	FortnoxContractInvoiceContractUpdateAndCreateInvoicePayloadWrap,
	FortnoxContractInvoiceContractUpdateAndFinishPayloadWrap,
	FortnoxContractInvoiceContractUpdateAndIncreaseInvoiceCountPayloadWrap,
	FortnoxContractInvoiceContractUpdatePayloadWrap,
	FortnoxCostCenterListItemWrap,
	FortnoxCostCenterSingleItemWrap,
	FortnoxCostCenterSinglePayloadItemWrap,
	FortnoxCurrencyListItemWrap,
	FortnoxCurrencySingleItemWrap,
	FortnoxCurrencySinglePayloadItemWrap,
	FortnoxDaArticleFileConnectionListItemWrap,
	FortnoxDaArticleFileConnectionSingleItemWrap,
	FortnoxDaArticleFileConnectionSinglePayloadItemWrap,
	FortnoxDaAssetFileConnectionCreatePayload,
	FortnoxDaAssetFileConnectionListItemWrap,
	FortnoxDaEmailSendersWrap,
	FortnoxDaEmailSenderTrustedWrap,
	FortnoxDaInboxFolderResponseWrap,
	FortnoxDaSupplierInvoiceFileConnectionListItemWrap,
	FortnoxDaSupplierInvoiceFileConnectionSingleItemWrap,
	FortnoxDaSupplierInvoiceFileConnectionSinglePayloadItemWrap,
	FortnoxDaVoucherFileConnectionListItemWrap,
	FortnoxDaVoucherFileConnectionSingleItemWrap,
	FortnoxDaVoucherFileConnectionSinglePayloadItemWrap,
	FortnoxDeleteWrap,
	FortnoxDocumentTagListItemWrap,
	FortnoxDocumentTagSingleItemWrap,
	FortnoxDocumentTagSinglePayloadItemWrap,
	FortnoxEUVatLimitRegulationResponseWrap,
	FortnoxFileStorageFolderSingleItemWrap,
	FortnoxItemUrlConnectionListItemWrap,
	FortnoxItemUrlConnectionSingleItemWrap,
	FortnoxItemUrlConnectionSinglePayloadItemWrap,
	FortnoxKfCustomerListItemWrap,
	FortnoxKfCustomerReferenceRowRowWrap,
	FortnoxKfCustomerReferenceSingleItemWrap,
	FortnoxKfCustomerSingleItemWrap,
	FortnoxKfCustomerSinglePayloadItemWrap,
	FortnoxKfInvoiceAccrualListItemWrap,
	FortnoxKfInvoiceAccrualSingleItemWrap,
	FortnoxKfInvoiceAccrualSinglePayloadItemWrap,
	FortnoxKfInvoicePaymentSingleItemWrap,
	FortnoxKfInvoicePaymentSinglePayloadItemWrap,
	FortnoxKfInvoiceSinglePayloadItemWrap,
	FortnoxKfNoxInvoiceCreatePayloadWrap,
	FortnoxKfNoxInvoiceSingleItemWrap,
	FortnoxKfNoxInvoiceUpdateAndPausePayloadWrap,
	FortnoxKfNoxInvoiceUpdateAndRepostPaymentPayloadWrap,
	FortnoxKfNoxInvoiceUpdateAndStopPayloadWrap,
	FortnoxKfNoxInvoiceUpdateAndTakeFeesPayloadWrap,
	FortnoxKfNoxInvoiceUpdateAndUnpausePayloadWrap,
	FortnoxKfTermsOfDeliveryListItemWrap,
	FortnoxKfTermsOfDeliverySingleItemWrap,
	FortnoxKfTermsOfDeliverySinglePayloadItemWrap,
	FortnoxLfSupplierInvoiceAccrualListItemWrap,
	FortnoxLfSupplierInvoiceAccrualSingleItemWrap,
	FortnoxLfSupplierInvoiceAccrualSinglePayloadItemWrap,
	FortnoxLfSupplierInvoiceListItemWrap,
	FortnoxLfSupplierInvoicePaymentListItemWrap,
	FortnoxLfSupplierInvoicePaymentSingleItemWrap,
	FortnoxLfSupplierInvoicePaymentSinglePayloadItemWrap,
	FortnoxLfSupplierInvoiceSingleItemWrap,
	FortnoxLfSupplierInvoiceSinglePayloadItemWrap,
	FortnoxLfSupplierListItemWrap,
	FortnoxLfSupplierSingleItemWrap,
	FortnoxLfSupplierSinglePayloadItemWrap,
	FortnoxLockedPeriodSettingsSingleItemWrap,
	FortnoxLonAbsenceTransactionsListItemWrap,
	FortnoxLonAbsenceTransactionsSingleItemWrap,
	FortnoxLonAbsenceTransactionsSinglePayloadItemWrap,
	FortnoxLonAttendanceTransactionsListItemWrap,
	FortnoxLonAttendanceTransactionsSingleItemWrap,
	FortnoxLonAttendanceTransactionsSinglePayloadItemWrap,
	FortnoxLonEmployeeListItemWrap,
	FortnoxLonEmployeeSingleItemWrap,
	FortnoxLonEmployeeSinglePayloadItemWrap,
	FortnoxLonExpensesListItemWrap,
	FortnoxLonExpensesSingleItemWrap,
	FortnoxLonExpensesSinglePayloadItemWrap,
	FortnoxLonSalaryTransactionsListItemWrap,
	FortnoxLonSalaryTransactionsSingleItemWrap,
	FortnoxLonSalaryTransactionsSinglePayloadItemWrap,
	FortnoxLonScheduleTimeSingleItemWrap,
	FortnoxLonScheduleTimeSinglePayloadItemWrap,
	FortnoxLonVacationDebtBasisSingleItemWrap,
	FortnoxMeSingleItemWrap,
	FortnoxModeOfPaymentListItemWrap,
	FortnoxModeOfPaymentSingleItemWrap,
	FortnoxModeOfPaymentSinglePayloadItemWrap,
	FortnoxOfferOfferListResponseWrap,
	FortnoxOfferOfferResponseWrap,
	FortnoxOfferOfferSinglePayloadItemWrap,
	FortnoxOrderOrderListResponseWrap,
	FortnoxOrderOrderResponseWrap,
	FortnoxOrderOrderSinglePayloadItemWrap,
	FortnoxPreDefinedAccountListItemWrap,
	FortnoxPreDefinedAccountSingleItemWrap,
	FortnoxPreDefinedAccountSinglePayloadItemWrap,
	FortnoxPriceListItemWrap,
	FortnoxPriceListListItemWrap,
	FortnoxPriceListSingleItemWrap,
	FortnoxPriceListSinglePayloadItemWrap,
	FortnoxPriceSingleItemWrap,
	FortnoxPriceSinglePayloadItemWrap,
	FortnoxPrintTemplateListItemWrap,
	FortnoxProjectProjectListItemWrap,
	FortnoxProjectProjectSingleItemWrap,
	FortnoxProjectProjectSinglePayloadItemWrap,
	FortnoxSinvoiceExternalUrlConnectionSingleItemWrap,
	FortnoxSinvoiceExternalUrlConnectionSinglePayloadItem,
	FortnoxTaxReductionCreatePayloadWrap,
	FortnoxTaxReductionUpdatePayloadWrap,
	FortnoxTermsOfPaymentListItemWrap,
	FortnoxTermsOfPaymentSingleItemWrap,
	FortnoxTermsOfPaymentSinglePayloadItemWrap,
	FortnoxUnitListItemWrap,
	FortnoxUnitSingleItemWrap,
	FortnoxUnitSinglePayloadItemWrap,
	FortnoxWayOfDeliveryListItemWrap,
	FortnoxWayOfDeliverySingleItemWrap,
	FortnoxWayOfDeliverySinglePayloadItemWrap,
	IntegrationPartnerAppSalesResponse,
	WarehouseCustomDocumentType,
	WarehouseCustomInboundDocument,
	WarehouseCustomOutboundDocument,
	WarehouseDocumentReference,
	WarehouseIncomingGoods,
	WarehouseManualDocument,
	WarehouseManualInboundDocument,
	WarehouseManualInboundDocumentPatch,
	WarehouseManualOutboundDocument,
	WarehouseManualOutboundDocumentPatch,
	WarehousePackageItem,
	WarehousePartialPurchaseOrder,
	WarehouseProductionOrder,
	WarehouseProductionOrderPatch,
	WarehousePurchaseOrder,
	WarehousePurchaseOrderMailSettings,
	WarehousePurchaseOrderRowNote,
	WarehouseReleaseParentOrder,
	WarehouseResponseStateChange,
	WarehouseStockBalance,
	WarehouseStockLocation,
	WarehouseStockPoint,
	WarehouseStockTaking,
	WarehouseStockTakingRow,
	WarehouseStockTransferDocument,
	WarehouseTenantInfo,
} from "./patched-schemas.gen";

export interface Routes {
	"/3/absencetransactions": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter by employee id
					 */
					employeeid?: string;
					/**
					 * filter by date
					 */
					date?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonAbsenceTransactionsListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLonAbsenceTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonAbsenceTransactionsSingleItemWrap;
			};
		};
	};
	"/3/absencetransactions/{id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonAbsenceTransactionsSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: FortnoxLonAbsenceTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonAbsenceTransactionsSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/absencetransactions/{id}/{Date}/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					id: string;
					/**
					 * of the absence transaction
					 */
					Date: string;
					/**
					 * status code of the absence transaction
					 */
					Code:
						| "ASK"
						| "FPE"
						| "FRA"
						| "HAV"
						| "KOM"
						| "MIL"
						| "NAR"
						| "OS1"
						| "OS2"
						| "OS3"
						| "OS4"
						| "OS5"
						| "PAP"
						| "PEM"
						| "PER"
						| "SEM"
						| "SJK"
						| "SMB"
						| "SVE"
						| "TJL"
						| "UTB"
						| "VAB";
				};
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonAbsenceTransactionsListItemWrap;
			};
		};
	};
	"/3/accountcharts": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxBfAccountChartListItemWrap;
			};
		};
	};
	"/3/accounts": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * field to sort returned list on
					 */
					sortby?: "number";
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Sru of accounts to list
					 */
					sru?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: FortnoxBfAccountListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query?: {
					/**
					 * financial year to create account against
					 */
					financialyear?: number;
				};
				body: FortnoxBfAccountSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/accounts/{Number}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the account
					 */
					Number: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxBfAccountSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the account
					 */
					Number: number;
				};
				query?: {
					/**
					 * financial year to update account against
					 */
					financialyear?: number;
				};
				body: FortnoxBfAccountSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxBfAccountSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * account to delete
					 */
					Number: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/archive": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * name of folder
					 */
					path?: string;
					/**
					 * fileId from fileattachments
					 */
					fileid?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxFileStorageFolderSingleItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query?: {
					/**
					 * id of folder
					 */
					folderid?: string;
					/**
					 * name of folder
					 */
					path?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
		delete: {
			request: {
				params: never;
				query?: {
					/**
					 * identifies file/folder to remove
					 */
					path?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/archive/{id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the file
					 */
					id: string;
				};
				query?: {
					/**
					 * Path of folder to show
					 */
					path?: string;
					/**
					 * fileId from fileattachments
					 */
					fileid?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies file/folder to remove
					 */
					id: string;
				};
				query?: {
					/**
					 * Path of file/folder to remove
					 */
					path?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articlefileconnections": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Articlenumber of file connections to list
					 */
					articlenumber?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxDaArticleFileConnectionListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDaArticleFileConnectionSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articlefileconnections/{FileId}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the article file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxDaArticleFileConnectionSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the article file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articles": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * possibility to filter supplier invoices
					 */
					filter?: "active" | "inactive";
					/**
					 * field to sort returned list
					 */
					sortby?:
						| "articlenumber"
						| "quantityinstock"
						| "reservedquantity"
						| "stockvalue";
					/**
					 * filter by article number
					 */
					articlenumber?: string;
					/**
					 * filter by description
					 */
					description?: string;
					/**
					 * filter by ean
					 */
					ean?: string;
					/**
					 * filter by supplier number
					 */
					suppliernumber?: string;
					/**
					 * filter by manufacturer
					 */
					manufacturer?: string;
					/**
					 * filter by manufacturerarticlenumber
					 */
					manufacturerarticlenumber?: string;
					/**
					 * filter by web shop
					 */
					webshop?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: ArticleListResponse;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxArticleSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articles/{ArticleNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the article
					 */
					ArticleNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: ArticleResponse;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the article
					 */
					ArticleNumber: number;
				};
				query: never;
				body: FortnoxArticleSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxArticleSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the article
					 */
					ArticleNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articleurlconnections": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * identifies the article
					 */
					articlenumber?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxItemUrlConnectionListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxItemUrlConnectionSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/articleurlconnections/{id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the article url connection
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxItemUrlConnectionSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Id of article url connection to update
					 */
					id: string;
				};
				query: never;
				body: FortnoxItemUrlConnectionSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxItemUrlConnectionSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the article url connection
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/assetfileconnections": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Assetid of asset file connections to list
					 */
					assetid?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxDaAssetFileConnectionListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDaAssetFileConnectionCreatePayload;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/assetfileconnections/{FileId}": {
		delete: {
			request: {
				params: {
					/**
					 * File id of asset file connection to delete
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/assets": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Asset number
					 */
					number?: string;
					/**
					 * Asset description
					 */
					description?: string;
					/**
					 * Asset type
					 */
					type?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxAnlAssetsListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxAnlAssetsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxAnlAssetsSingleItemResponseWrap;
			};
		};
	};
	"/3/assets/changeob/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlAssetActionsSingleItem;
			};
			response: {
				body: FortnoxAnlAssetsActionResponse;
			};
		};
	};
	"/3/assets/depreciate": {
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxAnlDepreciationWrap;
			};
			response: {
				body: FortnoxAnlAssetsDepreciationResponseWrap;
			};
		};
	};
	"/3/assets/depreciations/{ToDate}": {
		get: {
			request: {
				params: {
					/**
					 * toDate
					 */
					ToDate: string;
				};
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxAnlAssetsListItemWrap;
			};
		};
	};
	"/3/assets/scrap/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlScrapAssetWrap;
			};
			response: {
				body: FortnoxAnlAssetsActionResponse;
			};
		};
	};
	"/3/assets/sell/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlSellAssetWrap;
			};
			response: {
				body: FortnoxAnlAssetsActionResponse;
			};
		};
	};
	"/3/assets/types": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxAnlAssetTypesListResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxAnlCreateAssetTypeWrap;
			};
			response: {
				body: FortnoxAnlAssetTypesSingleResponseWrap;
			};
		};
	};
	"/3/assets/types/{id}": {
		get: {
			request: {
				params: {
					/**
					 * id
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxAnlAssetTypesSingleResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * id
					 */
					id: number;
				};
				query: never;
				body: FortnoxAnlUpdateAssetTypeWrap;
			};
			response: {
				body: FortnoxAnlAssetTypesSingleResponseWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * id
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/assets/writedown/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlAdjustAssetValueWrap;
			};
			response: {
				body: FortnoxAnlAssetsActionResponse;
			};
		};
	};
	"/3/assets/writeup/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlAdjustAssetValueWrap;
			};
			response: {
				body: FortnoxAnlAssetsActionResponse;
			};
		};
	};
	"/3/assets/{Id}": {
		get: {
			request: {
				params: {
					/**
					 * Asset number
					 */
					Id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxAnlAssetsSingleItemResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Asset ID
					 */
					Id: string;
				};
				query: never;
				body: FortnoxAnlAssetsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxAnlAssetsSingleItemResponseWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Asset number
					 */
					Id: string;
				};
				query: never;
				body: FortnoxDeleteWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/attendancetransactions": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter by employee id
					 */
					employeeid?: string;
					/**
					 * filter by date
					 */
					date?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonAttendanceTransactionsListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLonAttendanceTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonAttendanceTransactionsSingleItemWrap;
			};
		};
	};
	"/3/attendancetransactions/{id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonAttendanceTransactionsSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: FortnoxLonAttendanceTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonAttendanceTransactionsSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the transaction
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/attendancetransactions/{id}/{Date}/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					id: string;
					/**
					 * date of the attendance
					 */
					Date: string;
					/**
					 * status code of the attendance transaction
					 */
					Code:
						| "ARB"
						| "BE2"
						| "BER"
						| "FLX"
						| "HLG"
						| "JO2"
						| "JOR"
						| "MER"
						| "OB1"
						| "OB2"
						| "OB3"
						| "OB4"
						| "OB5"
						| "OK0"
						| "OK1"
						| "OK2"
						| "OK3"
						| "OK4"
						| "OK5"
						| "OT1"
						| "OT2"
						| "OT3"
						| "OT4"
						| "OT5"
						| "RES"
						| "TID";
				};
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonAttendanceTransactionsListItemWrap;
			};
		};
	};
	"/3/companyinformation": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxCompanyInformationSingleItemWrap;
			};
		};
	};
	"/3/contractaccruals": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractAccrualListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxContractInvoiceContractAccrualSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/contractaccruals/{DocumentNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Document number of contract accrual to show
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractAccrualSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Document number of contract accrual to update
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxContractInvoiceContractAccrualSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractAccrualSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Document number of contract accrual to delete
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/contracts": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Filter contracts by start of contract period
					 */
					periodstart?: string;
					/**
					 * Filter contracts by end of contract period
					 */
					periodend?: string;
					/**
					 * Filter contracts by status
					 */
					filter?: "active" | "inactive" | "finished";
					/**
					 * Filter contracts by document number
					 */
					documentnumber?: number;
					/**
					 * Filter contracts by customer number
					 */
					customernumber?: string;
					/**
					 * Filter contracts by template number
					 */
					templatenumber?: number;
					/**
					 * Filter contracts by number of remaining invoices
					 */
					invoicesremaining?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractListResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxContractInvoiceContractCreatePayloadWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/contracts/{DocumentNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the contract
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the contract
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxContractInvoiceContractUpdatePayloadWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractResponseWrap;
			};
		};
	};
	"/3/contracts/{DocumentNumber}/createinvoice": {
		put: {
			request: {
				params: {
					/**
					 * identifies the contract
					 */
					DocumentNumber: string;
				};
				query?: {
					/**
					 * Date of invoicing
					 */
					invoicedate?: string;
				};
				body: FortnoxContractInvoiceContractUpdateAndCreateInvoicePayloadWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractResponseWrap;
			};
		};
	};
	"/3/contracts/{DocumentNumber}/finish": {
		put: {
			request: {
				params: {
					/**
					 * identifies the contract
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxContractInvoiceContractUpdateAndFinishPayloadWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractResponseWrap;
			};
		};
	};
	"/3/contracts/{DocumentNumber}/increaseinvoicecount": {
		put: {
			request: {
				params: {
					/**
					 * identifies the contract
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxContractInvoiceContractUpdateAndIncreaseInvoiceCountPayloadWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractResponseWrap;
			};
		};
	};
	"/3/contracttemplates": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractTemplateListResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxContractInvoiceContractTemplateSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/contracttemplates/{TemplateNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the contract template
					 */
					TemplateNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxContractInvoiceContractTemplateResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the contract template
					 */
					TemplateNumber: number;
				};
				query: never;
				body: FortnoxContractInvoiceContractTemplateSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxContractInvoiceContractTemplateResponseWrap;
			};
		};
	};
	"/3/costcenters": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxCostCenterListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxCostCenterSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/costcenters/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the cost center
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxCostCenterSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the cost center
					 */
					Code: string;
				};
				query: never;
				body: FortnoxCostCenterSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxCostCenterSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the cost center to remove
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/currencies": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxCurrencyListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxCurrencySinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/currencies/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * Code of currency to show
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxCurrencySingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Code of currency to update
					 */
					Code: string;
				};
				query: never;
				body: FortnoxCurrencySinglePayloadItemWrap;
			};
			response: {
				body: FortnoxCurrencySingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Code of currency to delete
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/customerreferences": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * possibility to filter by customer number
					 */
					customer?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxKfCustomerReferenceSingleItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfCustomerReferenceRowRowWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/customerreferences/{CustomerReferenceRowId}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the customer reference row
					 */
					CustomerReferenceRowId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxKfCustomerReferenceSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the customer reference row
					 */
					CustomerReferenceRowId: string;
				};
				query: never;
				body: FortnoxKfCustomerReferenceRowRowWrap;
			};
			response: {
				body: FortnoxKfCustomerReferenceSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the customer reference row
					 */
					CustomerReferenceRowId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/customers": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * possibility to filter customers
					 */
					filter?: "active" | "inactive";
					/**
					 * field to sort returned list
					 */
					sortby?: "customernumber" | "name";
					/**
					 * filter by customer number
					 */
					customernumber?: string;
					/**
					 * filter by name
					 */
					name?: string;
					/**
					 * filter by zip code
					 */
					zipcode?: string;
					/**
					 * filter by city
					 */
					city?: string;
					/**
					 * filter by email
					 */
					email?: string;
					/**
					 * filter by phone
					 */
					phone?: string;
					/**
					 * filter by organisation number
					 */
					organisationnumber?: string;
					/**
					 * filter by gln
					 */
					gln?: string;
					/**
					 * filter by gln delivery
					 */
					glndelivery?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: FortnoxKfCustomerListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfCustomerSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/customers/{CustomerNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Customer number of customer to show
					 */
					CustomerNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxKfCustomerSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Customer number of customer to update
					 */
					CustomerNumber: string;
				};
				query: never;
				body: FortnoxKfCustomerSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxKfCustomerSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Customer number of customer to delete
					 */
					CustomerNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/emailsenders": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxDaEmailSendersWrap;
			};
		};
	};
	"/3/emailsenders/trusted": {
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDaEmailSenderTrustedWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/emailsenders/trusted/{Id}": {
		delete: {
			request: {
				params: {
					/**
					 * identifies the trusted email sender to delete
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/employees": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonEmployeeListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLonEmployeeSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonEmployeeSingleItemWrap;
			};
		};
	};
	"/3/employees/{EmployeeId}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					EmployeeId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonEmployeeSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					EmployeeId: string;
				};
				query: never;
				body: FortnoxLonEmployeeSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonEmployeeSingleItemWrap;
			};
		};
	};
	"/3/euvatlimitregulation": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * eu vat limit regulation for year, if not provided than this will be set to current year
					 */
					year?: number;
				};
				body: never;
			};
			response: {
				body: FortnoxEUVatLimitRegulationResponseWrap;
			};
		};
	};
	"/3/expenses": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonExpensesListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLonExpensesSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonExpensesSingleItemWrap;
			};
		};
	};
	"/3/expenses/{ExpenseCode}": {
		get: {
			request: {
				params: {
					/**
					 * expenseCode
					 */
					ExpenseCode: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonExpensesSingleItemWrap;
			};
		};
	};
	"/3/financialyears": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * date to filter on, for example 2020-06-30
					 */
					Date?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxBfFinancialYearListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxBfFinancialYearSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/financialyears/{Id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the year
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxBfFinancialYearSingleItemWrap;
			};
		};
	};
	"/3/inbox": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxDaInboxFolderResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query?: {
					/**
					 * folder id
					 */
					folderId?: string;
					/**
					 * path
					 */
					path?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/inbox/{Id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the folder
					 */
					Id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the file to remove
					 */
					Id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoiceaccruals": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxKfInvoiceAccrualListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfInvoiceAccrualSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoiceaccruals/{InvoiceNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Invoice number of invoice accrual to show
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxKfInvoiceAccrualSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Invoice number of invoice accrual to update
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceAccrualSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxKfInvoiceAccrualSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Invoice number of invoice accrual to delete
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoicepayments": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * field to sort returned list on
					 */
					sortby?: "paymentdate";
					/**
					 * filter by invoice number
					 */
					invoicenumber?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: InvoicePaymentListResponse;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoicepayments/{Number}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice payment
					 */
					Number: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: InvoicePaymentResponse;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice payment
					 */
					Number: string;
				};
				query: never;
				body: FortnoxKfInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxKfInvoicePaymentSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the invoice payment
					 */
					Number: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoicepayments/{Number}/bookkeep": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice payment
					 */
					Number: string;
				};
				query: never;
				body: FortnoxKfInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: InvoicePaymentResponse;
			};
		};
	};
	"/3/invoices": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Tofinalpaydate of invoices to list
					 */
					tofinalpaydate?: string;
					/**
					 * Fromfinalpaydate of invoices to list
					 */
					fromfinalpaydate?: string;
					/**
					 * possibility to filter invoices
					 */
					filter?:
						| "cancelled"
						| "fullypaid"
						| "unpaid"
						| "unpaidoverdue"
						| "unbooked";
					/**
					 * field to sort returned list on
					 */
					sortby?:
						| "customername"
						| "customernumber"
						| "documentnumber"
						| "invoicedate"
						| "ocr"
						| "total";
					/**
					 * Costcenter of invoices to list
					 */
					costcenter?: string;
					/**
					 * Customername of invoices to list
					 */
					customername?: string;
					/**
					 * Customernumber of invoices to list
					 */
					customernumber?: string;
					/**
					 * Label of invoices to list
					 */
					label?: string;
					/**
					 * Documentnumber of invoices to list
					 */
					documentnumber?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Notcompleted of invoices to list
					 */
					notcompleted?: string;
					/**
					 * Ocr of invoices to list
					 */
					ocr?: string;
					/**
					 * Ourreference of invoices to list
					 */
					ourreference?: string;
					/**
					 * Project of invoices to list
					 */
					project?: string;
					/**
					 * Sent of invoices to list
					 */
					sent?: string;
					/**
					 * Externalinvoicereference1 of invoices to list
					 */
					externalinvoicereference1?: string;
					/**
					 * Externalinvoicereference2 of invoices to list
					 */
					externalinvoicereference2?: string;
					/**
					 * Yourreference of invoices to list
					 */
					yourreference?: string;
					/**
					 * Invoicetype of invoices to list
					 */
					invoicetype?: string;
					/**
					 * Articlenumber of invoices to list
					 */
					articlenumber?: string;
					/**
					 * Articledescription of invoices to list
					 */
					articledescription?: string;
					/**
					 * Currency of invoices to list
					 */
					currency?: string;
					/**
					 * Accountnumberfrom of invoices to list
					 */
					accountnumberfrom?: string;
					/**
					 * Accountnumberto of invoices to list
					 */
					accountnumberto?: string;
					/**
					 * Yourordernumber of invoices to list
					 */
					yourordernumber?: string;
					/**
					 * Credit of invoices to list
					 */
					credit?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: InvoiceListResponse;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/invoices/{DocumentNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: InvoiceResponse;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/bookkeep": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/cancel": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/credit": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/einvoice": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/email": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/eprint": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/externalprint": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/preview": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/print": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/printreminder": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/invoices/{DocumentNumber}/warehouseready": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxKfInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: InvoiceResponse;
			};
		};
	};
	"/3/labels": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxDocumentTagListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDocumentTagSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/labels/{Id}": {
		put: {
			request: {
				params: {
					/**
					 * identifies the label
					 */
					Id: number;
				};
				query: never;
				body: FortnoxDocumentTagSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxDocumentTagSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the label
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/me": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxMeSingleItemWrap;
			};
		};
	};
	"/3/modesofpayments": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxModeOfPaymentListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxModeOfPaymentSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/modesofpayments/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * Code of mode of payment to show
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxModeOfPaymentSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Code of mode of payment to update
					 */
					Code: string;
				};
				query: never;
				body: FortnoxModeOfPaymentSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxModeOfPaymentSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Code of mode of payment to delete
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/noxfinansinvoices": {
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfNoxInvoiceCreatePayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}": {
		get: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}/pause": {
		put: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfNoxInvoiceUpdateAndPausePayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}/report-payment": {
		put: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfNoxInvoiceUpdateAndRepostPaymentPayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}/stop": {
		put: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfNoxInvoiceUpdateAndStopPayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}/take-fees": {
		put: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfNoxInvoiceUpdateAndTakeFeesPayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/noxfinansinvoices/{InvoiceNumber}/unpause": {
		put: {
			request: {
				params: {
					/**
					 * The Fortnox invoice number
					 */
					InvoiceNumber: string;
				};
				query: never;
				body: FortnoxKfNoxInvoiceUpdateAndUnpausePayloadWrap;
			};
			response: {
				body: FortnoxKfNoxInvoiceSingleItemWrap;
			};
		};
	};
	"/3/offers": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * possibility to filter offers
					 */
					filter?:
						| "cancelled"
						| "expired"
						| "completed"
						| "notcompleted"
						| "ordercreated"
						| "ordernotcreated";
					/**
					 * sort returned list of offers
					 */
					sortby?: "customerName" | "id" | "transactionDate" | "total";
					/**
					 * filter by customer name
					 */
					customername?: string;
					/**
					 * filter by customer number
					 */
					customernumber?: string;
					/**
					 * filter by document number
					 */
					documentnumber?: string;
					/**
					 * filter by cost center
					 */
					costcenter?: string;
					/**
					 * filter by label
					 */
					label?: string;
					/**
					 * filter by project
					 */
					project?: string;
					/**
					 * filter by sent
					 */
					sent?: boolean;
					/**
					 * filter by not completed
					 */
					notcompleted?: boolean;
					/**
					 * filter by our reference
					 */
					ourreference?: string;
					/**
					 * filter by your reference
					 */
					yourreference?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: FortnoxOfferOfferListResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/offers/{DocumentNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/cancel": {
		put: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/createinvoice": {
		put: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/createorder": {
		put: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/email": {
		get: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/externalprint": {
		put: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOfferOfferSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOfferOfferResponseWrap;
			};
		};
	};
	"/3/offers/{DocumentNumber}/preview": {
		get: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/offers/{DocumentNumber}/print": {
		get: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/orders": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * possibility to filter orders
					 */
					filter?:
						| "cancelled"
						| "expired"
						| "invoicecreated"
						| "invoicenotcreated";
					/**
					 * field to sort returned list
					 */
					sortby?:
						| "customername"
						| "customernumber"
						| "orderdate"
						| "documentnumber"
						| "total";
					/**
					 * filter by customer name
					 */
					customername?: string;
					/**
					 * filter by customer number
					 */
					customernumber?: string;
					/**
					 * filter by label
					 */
					label?: string;
					/**
					 * filter by document number
					 */
					documentnumber?: string;
					/**
					 * filter by external invoice reference 1
					 */
					externalinvoicereference1?: string;
					/**
					 * filter by external invoice reference 2
					 */
					externalinvoicereference2?: string;
					/**
					 * filter by cost center
					 */
					costcenter?: string;
					/**
					 * filter by project
					 */
					project?: string;
					/**
					 * filter by sent
					 */
					sent?: boolean;
					/**
					 * filter by not completed
					 */
					notcompleted?: boolean;
					/**
					 * filter by ourreference
					 */
					ourreference?: string;
					/**
					 * filter by your reference
					 */
					yourreference?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * filter by order type
					 */
					ordertype?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
					sortorder?: "ascending" | "descending";
				};
				body: never;
			};
			response: {
				body: FortnoxOrderOrderListResponseWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxOrderOrderSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/orders/{DocumentNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOrderOrderSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
	};
	"/3/orders/{DocumentNumber}/cancel": {
		put: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOrderOrderSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
	};
	"/3/orders/{DocumentNumber}/createinvoice": {
		put: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOrderOrderSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
	};
	"/3/orders/{DocumentNumber}/email": {
		get: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
	};
	"/3/orders/{DocumentNumber}/externalprint": {
		put: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: FortnoxOrderOrderSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxOrderOrderResponseWrap;
			};
		};
	};
	"/3/orders/{DocumentNumber}/preview": {
		get: {
			request: {
				params: {
					/**
					 * identifies the offer
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/orders/{DocumentNumber}/print": {
		get: {
			request: {
				params: {
					/**
					 * identifies the order
					 */
					DocumentNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: BinaryResponse;
			};
		};
	};
	"/3/predefinedaccounts": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxPreDefinedAccountListItemWrap;
			};
		};
	};
	"/3/predefinedaccounts/{name}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the predefined account
					 */
					name: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxPreDefinedAccountSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the predefined account
					 */
					name: string;
				};
				query: never;
				body: FortnoxPreDefinedAccountSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxPreDefinedAccountSingleItemWrap;
			};
		};
	};
	"/3/predefinedvoucherseries": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxBfPreDefinedVoucherSeriesListItemWrap;
			};
		};
	};
	"/3/predefinedvoucherseries/{Name}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the predefined voucher series
					 */
					Name: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxBfPreDefinedVoucherSeriesSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the predefined voucher series
					 */
					Name: string;
				};
				query: never;
				body: FortnoxBfPreDefinedVoucherSeriesSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxBfPreDefinedVoucherSeriesSingleItemWrap;
			};
		};
	};
	"/3/pricelists": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxPriceListListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxPriceListSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/pricelists/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the price list
					 */
					Code: string;
				};
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxPriceListSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the price list
					 */
					Code: string;
				};
				query: never;
				body: FortnoxPriceListSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxPriceListSingleItemWrap;
			};
		};
	};
	"/3/prices": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Lists prices by from quantity
					 */
					fromquantity?: number;
				};
				body: never;
			};
			response: {
				body: FortnoxPriceSingleItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxPriceSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/prices/sublist/{PriceList}/{ArticleNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Price list of the prices to list
					 */
					PriceList: string;
					/**
					 * Article number of the prices to list
					 */
					ArticleNumber: string;
				};
				query?: {
					/**
					 * Filter prices by from quantity
					 */
					fromquantity?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxPriceListItemWrap;
			};
		};
	};
	"/3/prices/{PriceList}/{ArticleNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Price list of the price to show
					 */
					PriceList: string;
					/**
					 * Article number of the price to show
					 */
					ArticleNumber: string;
				};
				query?: {
					/**
					 * Get price by from quantity
					 */
					fromquantity?: number;
				};
				body: never;
			};
			response: {
				body: FortnoxPriceSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Price list to update the price for
					 */
					PriceList: string;
					/**
					 * Number of article to update the price for
					 */
					ArticleNumber: string;
				};
				query: never;
				body: FortnoxPriceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxPriceSingleItemWrap;
			};
		};
	};
	"/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}": {
		get: {
			request: {
				params: {
					/**
					 * Price list to get the price from
					 */
					PriceList: string;
					/**
					 * Number of article to get the price for
					 */
					ArticleNumber: string;
					/**
					 * From quantity of price to show
					 */
					FromQuantity: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxPriceSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Price list to update the price for
					 */
					PriceList: string;
					/**
					 * Number of article to update the price for
					 */
					ArticleNumber: string;
					/**
					 * From quantity of price to update
					 */
					FromQuantity: string;
				};
				query: never;
				body: FortnoxPriceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxPriceSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Price list to delete from
					 */
					PriceList: string;
					/**
					 * Number of article to delete the price for
					 */
					ArticleNumber: string;
					/**
					 * From quantity of price to delete
					 */
					FromQuantity: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/printtemplates": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Filters the list of print templates by type
					 */
					type?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxPrintTemplateListItemWrap;
			};
		};
	};
	"/3/projects": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter on description
					 */
					description?: string;
					/**
					 * filter on project leader
					 */
					projectleader?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxProjectProjectListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxProjectProjectSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/projects/{ProjectNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the project
					 */
					ProjectNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxProjectProjectSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the project
					 */
					ProjectNumber: number;
				};
				query: never;
				body: FortnoxProjectProjectSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxProjectProjectSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the project
					 */
					ProjectNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/salarytransactions": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter on date
					 */
					date?: string;
					/**
					 * filter on employeeId
					 */
					employeeId?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLonSalaryTransactionsListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLonSalaryTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonSalaryTransactionsSingleItemWrap;
			};
		};
	};
	"/3/salarytransactions/{SalaryRow}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the salary transaction
					 */
					SalaryRow: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonSalaryTransactionsSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the salary transaction
					 */
					SalaryRow: number;
				};
				query: never;
				body: FortnoxLonSalaryTransactionsSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonSalaryTransactionsSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the salary transaction
					 */
					SalaryRow: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/scheduletimes/{EmployeeId}/{Date}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					EmployeeId: string;
					/**
					 * identifies the date
					 */
					Date: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonScheduleTimeSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					EmployeeId: string;
					/**
					 * identifies the date
					 */
					Date: string;
				};
				query: never;
				body: FortnoxLonScheduleTimeSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonScheduleTimeSingleItemWrap;
			};
		};
	};
	"/3/scheduletimes/{EmployeeId}/{Date}/resetday": {
		put: {
			request: {
				params: {
					/**
					 * identifies the employee
					 */
					EmployeeId: string;
					/**
					 * identifies the date
					 */
					Date: string;
				};
				query: never;
				body: FortnoxLonScheduleTimeSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLonScheduleTimeSingleItemWrap;
			};
		};
	};
	"/3/settings/company": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxCompanyCompanySettingsResponseWrap;
			};
		};
	};
	"/3/settings/lockedperiod": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLockedPeriodSettingsSingleItemWrap;
			};
		};
	};
	"/3/sie/{Type}": {
		get: {
			request: {
				params: {
					/**
					 * type
					 */
					Type: string;
				};
				query?: {
					/**
					 * filter on selection
					 */
					selection?: string;
					/**
					 * financialYear
					 */
					financialYear?: number;
					/**
					 * filter on export all
					 */
					exportall?: string;
					/**
					 * filter on from date
					 */
					fromdate?: string;
					/**
					 * filter on to date
					 */
					todate?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoiceaccruals": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoiceAccrualListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLfSupplierInvoiceAccrualSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Supplier invoice number of supplier invoice accrual to show
					 */
					SupplierInvoiceNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoiceAccrualSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Supplier invoice number of supplier invoice accrual to update
					 */
					SupplierInvoiceNumber: string;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceAccrualSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceAccrualSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Supplier invoice number of supplier invoice accrual to delete
					 */
					SupplierInvoiceNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoiceexternalurlconnections": {
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxSinvoiceExternalUrlConnectionSinglePayloadItem;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoiceexternalurlconnections/{Id}": {
		get: {
			request: {
				params: {
					/**
					 * id
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxSinvoiceExternalUrlConnectionSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * id
					 */
					Id: number;
				};
				query: never;
				body: FortnoxSinvoiceExternalUrlConnectionSinglePayloadItem;
			};
			response: {
				body: FortnoxSinvoiceExternalUrlConnectionSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * id
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoicefileconnections": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Filter file connections by supplier invoice number
					 */
					supplierinvoicenumber?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxDaSupplierInvoiceFileConnectionListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDaSupplierInvoiceFileConnectionSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoicefileconnections/{FileId}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxDaSupplierInvoiceFileConnectionSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the supplier invoice file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoicepayments": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Filter payments by invoice number
					 */
					invoicenumber?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoicePaymentListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLfSupplierInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoicepayments/{Number}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the supplier invoice payment
					 */
					Number: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoicePaymentSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the supplier invoice payment
					 */
					Number: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoicePaymentSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the supplier invoice payment
					 */
					Number: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoicepayments/{Number}/bookkeep": {
		put: {
			request: {
				params: {
					/**
					 * identifies the supplier invoice payment
					 */
					Number: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoicePaymentSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoicePaymentSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Filter supplier invoices by final to pay date
					 */
					tofinalpaydate?: string;
					/**
					 * Filter supplier invoices by final from pay date
					 */
					fromfinalpaydate?: string;
					/**
					 * Filter supplier invoices by status
					 */
					filter?:
						| "cancelled"
						| "fullypaid"
						| "unpaid"
						| "unpaidoverdue"
						| "unbooked"
						| "pendingpayment"
						| "authorizepending";
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter supplier invoices by supplier number
					 */
					suppliernumber?: string;
					/**
					 * Filter supplier invoices by supplier name
					 */
					suppliername?: string;
					/**
					 * Filter supplier invoices by ocr number
					 */
					ocr?: string;
					/**
					 * Filter supplier invoices by invoice number
					 */
					invoicenumber?: string;
					/**
					 * Filter supplier invoices by serial number
					 */
					serialnumber?: string;
					/**
					 * Filter supplier invoices by cost center
					 */
					costcenter?: string;
					/**
					 * Filter supplier invoices by project
					 */
					project?: string;
					/**
					 * Filter supplier invoices by our reference
					 */
					ourreference?: string;
					/**
					 * Filter supplier invoices by your reference
					 */
					yourreference?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoiceListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}/approvalbookkeep": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}/approvalpayment": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}/bookkeep": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}/cancel": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/supplierinvoices/{GivenNumber}/credit": {
		put: {
			request: {
				params: {
					/**
					 * identifies the invoice
					 */
					GivenNumber: number;
				};
				query: never;
				body: FortnoxLfSupplierInvoiceSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierInvoiceSingleItemWrap;
			};
		};
	};
	"/3/suppliers": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter on supplier number
					 */
					suppliernumber?: string;
					/**
					 * filter on name
					 */
					name?: string;
					/**
					 * filter on organisation number
					 */
					organisationnumber?: string;
					/**
					 * filter on phone
					 */
					phone?: string;
					/**
					 * filter on zip code
					 */
					zipcode?: string;
					/**
					 * filter on city
					 */
					city?: string;
					/**
					 * filter on email
					 */
					email?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxLfSupplierListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxLfSupplierSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/suppliers/{SupplierNumber}": {
		get: {
			request: {
				params: {
					/**
					 * Supplier number of supplier to show
					 */
					SupplierNumber: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLfSupplierSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Supplier number of supplier to update
					 */
					SupplierNumber: string;
				};
				query: never;
				body: FortnoxLfSupplierSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxLfSupplierSingleItemWrap;
			};
		};
	};
	"/3/taxreductions": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * possibility to filter tax reductions
					 */
					filter?: "invoices" | "orders" | "offers";
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: TaxReductionListResponse;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxTaxReductionCreatePayloadWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/taxreductions/{Id}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the tax reduction
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: TaxReductionResponse;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the tax reduction
					 */
					Id: number;
				};
				query: never;
				body: FortnoxTaxReductionUpdatePayloadWrap;
			};
			response: {
				body: TaxReductionResponse;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the tax reduction
					 */
					Id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/termsofdeliveries": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxKfTermsOfDeliveryListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxKfTermsOfDeliverySinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/termsofdeliveries/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the terms of delivery
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxKfTermsOfDeliverySingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the terms of delivery
					 */
					Code: string;
				};
				query: never;
				body: FortnoxKfTermsOfDeliverySinglePayloadItemWrap;
			};
			response: {
				body: FortnoxKfTermsOfDeliverySingleItemWrap;
			};
		};
	};
	"/3/termsofpayments": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxTermsOfPaymentListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxTermsOfPaymentSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/termsofpayments/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the terms of payment
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxTermsOfPaymentSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the term of payment
					 */
					Code: string;
				};
				query: never;
				body: FortnoxTermsOfPaymentSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxTermsOfPaymentSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the terms of payment
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/units": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxUnitListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxUnitSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/units/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the unit
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxUnitSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * identifies the unit
					 */
					Code: string;
				};
				query: never;
				body: FortnoxUnitSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxUnitSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the unit
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/vacationdebtbasis/{Year}/{Month}": {
		get: {
			request: {
				params: {
					/**
					 * Id of vacation debt basis to show
					 */
					Year: number;
					/**
					 * Month of vacation debt basis to show
					 */
					Month: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxLonVacationDebtBasisSingleItemWrap;
			};
		};
	};
	"/3/voucherfileconnections": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Voucheryear of voucher file connections to list
					 */
					voucheryear?: number;
					/**
					 * Voucherdescription of voucher file connections to list
					 */
					voucherdescription?: string;
					/**
					 * Vouchernumber of voucher file connections to list
					 */
					vouchernumber?: number;
					/**
					 * Voucherseries of voucher file connections to list
					 */
					voucherseries?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxDaVoucherFileConnectionListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxDaVoucherFileConnectionSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/voucherfileconnections/{FileId}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the voucher file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxDaVoucherFileConnectionSingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * identifies the voucher file connection
					 */
					FileId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/vouchers": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter on cost center
					 */
					costcenter?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * filter on voucher series
					 */
					voucherseries?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: VoucherListResponse;
			};
		};
		post: {
			request: {
				params: never;
				query?: {
					/**
					 * Financial year id, used to determine which financial year the voucher is created in
					 */
					financialyear?: number;
				};
				body: FortnoxBfVoucherSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/vouchers/sublist": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filter on cost center
					 */
					costcenter?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * filter on voucher series
					 */
					voucherseries?: string;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: VoucherListResponse;
			};
		};
	};
	"/3/vouchers/sublist/{VoucherSeries}": {
		get: {
			request: {
				params: {
					/**
					 * Voucher series of vouchers to list
					 */
					VoucherSeries: string;
				};
				query?: {
					/**
					 * filter on cost center
					 */
					costcenter?: string;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Defines a selection based on a start date (`YYYY-MM-DD`).
					 */
					fromdate?: string;
					/**
					 * Defines a selection based on an end date (`YYYY-MM-DD`).
					 */
					todate?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: VoucherListResponse;
			};
		};
	};
	"/3/vouchers/{VoucherSeries}/{VoucherNumber}": {
		get: {
			request: {
				params: {
					/**
					 * identifies the voucher series
					 */
					VoucherSeries: string;
					/**
					 * identifies the voucher number
					 */
					VoucherNumber: number;
				};
				query?: {
					/**
					 * filter on financial year
					 */
					financialyear?: number;
				};
				body: never;
			};
			response: {
				body: VoucherResponse;
			};
		};
	};
	"/3/voucherseries": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxBfVoucherSeriesListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxBfVoucherSeriesSinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/voucherseries/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * Code of voucher series to show
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxBfVoucherSeriesSingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Code of voucher series to update
					 */
					Code: string;
				};
				query: never;
				body: FortnoxBfVoucherSeriesSinglePayloadItemWrap;
			};
			response: {
				body: FortnoxBfVoucherSeriesSingleItemWrap;
			};
		};
	};
	"/3/wayofdeliveries": {
		get: {
			request: {
				params: never;
				query?: {
					limit?: number;
					offset?: number;
					page?: number;
					/**
					 * Retrieves all records modified after the provided timestamp (Format: `YYYY-MM-DD HH:mm`).
					 */
					lastmodified?: string;
					/**
					 * Filter by financial year (numeric form).
					 */
					financialyear?: number;
					/**
					 * Filter by financial year (`YYYY-MM-DD` form). Any date within a financial year range will work.
					 */
					financialyeardate?: string;
				};
				body: never;
			};
			response: {
				body: FortnoxWayOfDeliveryListItemWrap;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: FortnoxWayOfDeliverySinglePayloadItemWrap;
			};
			response: {
				body: never;
			};
		};
	};
	"/3/wayofdeliveries/{Code}": {
		get: {
			request: {
				params: {
					/**
					 * Code of way of delivery to show
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: FortnoxWayOfDeliverySingleItemWrap;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Code of way of delivery to update
					 */
					Code: string;
				};
				query: never;
				body: FortnoxWayOfDeliverySinglePayloadItemWrap;
			};
			response: {
				body: FortnoxWayOfDeliverySingleItemWrap;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Code of way of delivery to delete
					 */
					Code: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/fileattachments/attachments-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * ids of the entities whose attachments should be fetched
					 */
					entityid?: number[];
					/**
					 * type of the entities whose attachments should be fetched
					 */
					entitytype?: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG";
				};
				body: never;
			};
			response: {
				body: FileattachmentsAttachment;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/fileattachments/attachments-v1/numberofattachments": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * ids of the entities to look for number of attachments on
					 */
					entityids?: number[];
					/**
					 * type of the entities  to look for number of attachments on
					 */
					entitytype?: "OF" | "O" | "F" | "C" | "LGR_IO" | "LGR_IG";
				};
				body: never;
			};
			response: {
				body: FileattachmentsNumberOfAttachments;
			};
		};
	};
	"/api/fileattachments/attachments-v1/validateincludedonsend": {
		post: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/fileattachments/attachments-v1/{attachmentId}": {
		put: {
			request: {
				params: {
					/**
					 * id of the attachment to be updated
					 */
					attachmentId: string;
				};
				query: never;
				body: FileattachmentsAttachment;
			};
			response: {
				body: FileattachmentsAttachment;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * id of the attachment to be detached
					 */
					attachmentId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/integration-developer/ratings-v1": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/integration-developer/sales-v1/{integrationId}": {
		get: {
			request: {
				params: {
					/**
					 * of the integration to look up sales information for
					 */
					integrationId: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/integration-developer/users/users-v1/{integrationId}/{tenantId}": {
		get: {
			request: {
				params: {
					integrationId: number;
					tenantId: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/integration-partner/apps/sales-v1/{appId}": {
		get: {
			request: {
				params: {
					/**
					 * clientId of the integration to look up sales information for
					 */
					appId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: IntegrationPartnerAppSalesResponse;
			};
		};
	};
	"/api/integration-partner/apps/sales-v1/{appId}/{tenantId}": {
		get: {
			request: {
				params: {
					/**
					 * clientId of the integration to look up sales information for
					 */
					appId: string;
					/**
					 * tenantId of the tenant to look up sales information for
					 */
					tenantId: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: IntegrationPartnerAppSalesResponse;
			};
		};
	};
	"/api/time/articles-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * The start date of the search span, the max of which should be 1 year to the end date ("toDate").
					 *  Example: 2022-11-01
					 */
					fromDate?: string;
					/**
					 * The end date of the search span, the max of which should be 1 year back to the start date ("fromDate").
					 *  Example: 2022-11-30
					 */
					toDate?: string;
					/**
					 * An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.
					 *  Example: 100,101,102
					 */
					customerIds?: string[];
					/**
					 * An array of project IDs.
					 *  Example: p1,p2,p3
					 */
					projectIds?: string[];
					/**
					 * If the article registration without project is included, or not.
					 */
					includeRegistrationsWithoutProject?: boolean;
					/**
					 * An array of article IDs.
					 *  Example: s1,s2,s3
					 */
					itemIds?: string[];
					/**
					 * An array of cost center IDs.
					 *  Example: cc1,cc2,cc3
					 */
					costCenterIds?: string[];
					/**
					 * An array of user ids who own the article registrations.
					 *  Example: 1,2,3
					 */
					ownerIds?: string[];
					/**
					 * If a document is created with the article registration, or not.
					 */
					invoiced?: boolean;
					/**
					 * If the article registration is locked on an invoice basis, or not.
					 */
					inInvoiceBasis?: boolean;
					/**
					 * If the article registration is internal, which is registered on an internal customer, or not.
					 */
					internalArticles?: boolean;
					/**
					 * If the article registration has been moved to non-invoiceable, or not.
					 */
					nonInvoiceable?: boolean;
					/**
					 * If the price of the non-invoiceable article registration is included, or not.
					 */
					includeNonInvoiceablePrice?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/time/registrations-v2": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * The start date of the search span, the max of which should be 1 year to the end date ("toDate").
					 *  Example: 2022-11-01
					 */
					fromDate?: string;
					/**
					 * The end date of the search span, the max of which should be 1 year back to the start date ("fromDate").
					 *  Example: 2022-11-30
					 */
					toDate?: string;
					/**
					 * An array of customer IDs which are being used in database and in one-to-one relation with customer numbers.
					 *  Example: 100,101,102
					 */
					customerIds?: string[];
					/**
					 * An array of project IDs.
					 *  Example: p1,p2,p3
					 */
					projectIds?: string[];
					/**
					 * An array of service IDs.
					 *  Example: s1,s2,s3
					 */
					serviceIds?: string[];
					/**
					 * An array of cost center IDs.
					 *  Example: cc1,cc2,cc3
					 */
					costCenterIds?: string[];
					/**
					 * An array of registration codes.
					 *  Example: TID,SEM,FPE
					 */
					regCodes?: string[];
					/**
					 * An array of user IDs that time/absence registrations belong to.
					 *  Example: 1,2,3
					 */
					userIds?: string[];
					/**
					 * If the time/absence registration without project is included, or not.
					 */
					includeRegistrationsWithoutProject?: boolean;
					/**
					 * If a document is created with the time/absence registration, or not.
					 */
					invoiced?: boolean;
					/**
					 * If the time/absence registration is locked on an invoice basis, or not.
					 */
					inInvoiceBasis?: boolean;
					/**
					 * If the time/absence registration is internal, which is registered on an internal customer, or not.
					 */
					internalTime?: boolean;
					/**
					 * If the time/absence registration has been moved to non-invoiceable, or not.
					 */
					nonInvoiceable?: boolean;
					/**
					 * If the price of the non-invoiceable time/absence registration is included, or not.
					 */
					includeNonInvoiceableChargeHours?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Include only documents with given state.
					 */
					state?: "all" | "unreleased" | "released" | "voided";
					/**
					 * Include only documents with given type.
					 */
					type?: "all" | "inbound" | "outbound" | "stocktransfer";
					/**
					 * Include only documents containing the given item.
					 */
					itemId?: string;
				};
				body: never;
			};
			response: {
				body: WarehouseManualDocument;
			};
		};
	};
	"/api/warehouse/deliveries-v1/inbounddeliveries": {
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseManualInboundDocument;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Manual Inbound document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseManualInboundDocument;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Manual Inbound document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseManualInboundDocument;
			};
			response: {
				body: WarehouseManualInboundDocument;
			};
		};
		patch: {
			request: {
				params: {
					/**
					 * Manual Inbound document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseManualInboundDocumentPatch;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * Manual Inbound document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Manual Inbound document id.
					 */
					id: number;
				};
				query?: {
					/**
					 * true if we should force void, defaults to false
					 */
					force?: boolean;
					/**
					 * date the void operation should be bookkeept on
					 */
					customVoidDate?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/outbounddeliveries": {
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseManualOutboundDocument;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Manual Outbound document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseManualOutboundDocument;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Manual Outbound document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseManualOutboundDocument;
			};
			response: {
				body: WarehouseManualOutboundDocument;
			};
		};
		patch: {
			request: {
				params: {
					/**
					 * Manual Outbound document id
					 */
					id: number;
				};
				query: never;
				body: WarehouseManualOutboundDocumentPatch;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * Manual Outbound document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Manual Outbound document id.
					 */
					id: number;
				};
				query?: {
					/**
					 * if provided this date will be used as the voided date instead of the document date
					 */
					customVoidDate?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/documenttypes-v1": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: WarehouseCustomDocumentType;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseCustomDocumentType;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}": {
		get: {
			request: {
				params: {
					/**
					 * the name of the reference type
					 */
					type: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseCustomDocumentType;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Document type.
					 */
					type: string;
					/**
					 * Document id.
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseCustomInboundDocument;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * min 1 character, max 25 characters, may contain letters A-Z, digits 0-9, underscore (_), and dash (-), type is case-insensitive
					 *  <blockquote><pre>
					 *       Type is a custom name/reference of the document that will be used to reference the document type <br>
					 *       * If type is not known, it will be registered as belonging to the INBOUND category. <br>
					 *       * If type is an existing custom document type of category OUTBOUND an error is thrown. <br>
					 *       * If type is invalid an error is thrown. <br>
					 *  </pre></blockquote>
					 */
					type: string;
					/**
					 * min 1 character, max 25 characters, may only contain digits 0-9
					 */
					id: string;
				};
				query: never;
				body: WarehouseCustomInboundDocument;
			};
			response: {
				body: WarehouseCustomInboundDocument;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * document type
					 */
					type: string;
					/**
					 * document id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * document type
					 */
					type: string;
					/**
					 * document id
					 */
					id: string;
				};
				query?: {
					/**
					 * true if the document should be voided even if the document has connected outbounds, defaults to false.
					 */
					force?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}": {
		get: {
			request: {
				params: {
					/**
					 * document type
					 */
					type: string;
					/**
					 * document id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseCustomOutboundDocument;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * the type of the custom outbound document, min 1 character, max 25 characters, may contain letters A-Z, digits 0-9, underscore (_), and dash (-). Always stored as upper case.
					 */
					type: string;
					/**
					 * the id of the custom outbound document, min 1 character, max 25 characters, may only contain digits 0-9
					 */
					id: string;
				};
				query: never;
				body: WarehouseCustomOutboundDocument;
			};
			response: {
				body: WarehouseCustomOutboundDocument;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * document type
					 */
					type: string;
					/**
					 * document id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * document type
					 */
					type: string;
					/**
					 * document id
					 */
					id: string;
				};
				query?: {
					/**
					 * true if the document should be voided even if the document has connected outbounds, defaults to false.
					 */
					force?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/incominggoods-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * `true` to include only released documents.
					 *  `false` to include only non-released documents.
					 */
					released?: boolean;
					/**
					 * `true` to include only completed documents.
					 *  `false` to include only non-completed documents.
					 */
					completed?: boolean;
					/**
					 * `true` to include only voided documents.
					 *  `false` to include only non-voided documents.
					 */
					voided?: boolean;
					/**
					 * Include only documents with the given `supplierNumber`.
					 */
					supplierNumber?: string;
					/**
					 * Include only documents with the given `itemId`.
					 */
					itemId?: string;
					/**
					 * Include only documents where `note`-field contains the given text (case-insensitive).
					 */
					note?: string;
					/**
					 * Include only documents where `deliveryNote`-field contains the given text (case-insensitive).
					 */
					deliveryNote?: string;
					/**
					 * Include only documents where `id` or `deliveryNote`-field contains the given text (case-insensitive).
					 */
					q?: string;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseIncomingGoods;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/incominggoods-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query?: {
					/**
					 * This Supplier Invoice id will be excluded when calculating the takenQuantity.
					 */
					ignoreSupplierInvoiceId?: number;
				};
				body: never;
			};
			response: {
				body: WarehouseIncomingGoods;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseIncomingGoods;
			};
			response: {
				body: WarehouseIncomingGoods;
			};
		};
		patch: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseIncomingGoods;
			};
			response: {
				body: WarehouseIncomingGoods;
			};
		};
	};
	"/api/warehouse/incominggoods-v1/{id}/completed": {
		put: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/incominggoods-v1/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/incominggoods-v1/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Incoming goods document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/productionorders-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Include only production orders with the given state.
					 *               Allowed states: all, incomplete, delayed, completed, voided.
					 *               (Default is incomplete)
					 */
					state?: "all" | "incomplete" | "delayed" | "completed" | "voided";
					/**
					 * Include only production orders with the given production item.
					 */
					itemId?: string;
				};
				body: never;
			};
			response: {
				body: WarehouseProductionOrder;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseProductionOrder;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/productionorders-v1/billofmaterials/{itemId}": {
		get: {
			request: {
				params: {
					/**
					 * Production Article id
					 */
					itemId: string;
				};
				query?: {
					/**
					 * the id of the production order (optional)
					 */
					id?: number;
					/**
					 * the quantity of the production order (assumed 1 if left empty)
					 */
					quantity?: string;
				};
				body: never;
			};
			response: {
				body: WarehousePackageItem;
			};
		};
	};
	"/api/warehouse/productionorders-v1/release/{id}": {
		put: {
			request: {
				params: {
					/**
					 * Production Order document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseProductionOrder;
			};
		};
	};
	"/api/warehouse/productionorders-v1/void/{id}": {
		put: {
			request: {
				params: {
					/**
					 * Production Order document id.
					 */
					id: number;
				};
				query?: {
					/**
					 * true to force void a released document, default false
					 */
					force?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/productionorders-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Production Order document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseProductionOrder;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Production Order document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseProductionOrder;
			};
			response: {
				body: WarehouseProductionOrder;
			};
		};
		patch: {
			request: {
				params: {
					/**
					 * Production Order document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseProductionOrderPatch;
			};
			response: {
				body: WarehouseProductionOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive).
					 */
					q?: string;
					/**
					 * Include only documents with the given `supplierNumber`.
					 */
					supplierNumber?: string;
					/**
					 * Include only documents with the given `purchaseOrderState`.
					 */
					state?:
						| "NOT_SENT"
						| "SENT"
						| "SENT_NOT_REJECTED"
						| "DELAYED"
						| "RECEIVED"
						| "VOIDED"
						| "CURRENT"
						| "ALL";
					/**
					 * Include only documents with the given `itemId`.
					 */
					itemId?: string;
					/**
					 * Include only documents with the given `purchaseType`
					 */
					purchaseType?: "WAREHOUSE" | "DROPSHIP";
					/**
					 * Include only documents where `internalReference' contains the given text (case-insensitive).
					 */
					internalReference?: string;
					/**
					 * Include only documents where `note`-field contains the given text (case-insensitive).
					 */
					note?: string;
				};
				body: never;
			};
			response: {
				body: WarehousePurchaseOrder;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehousePurchaseOrder;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/csv": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Include only documents where `id` or `internalReference`-field contains the given text (case-insensitive).
					 */
					q?: string;
					/**
					 * Include only documents with the given `supplierNumber`.
					 */
					supplierNumber?: string;
					/**
					 * Include only documents with the given `purchaseOrderState`.
					 */
					state?:
						| "NOT_SENT"
						| "SENT"
						| "SENT_NOT_REJECTED"
						| "DELAYED"
						| "RECEIVED"
						| "VOIDED"
						| "CURRENT"
						| "ALL";
					/**
					 * Include only documents with the given `itemId`.
					 */
					itemId?: string;
					/**
					 * Include only documents with the given `purchaseType`
					 */
					purchaseType?: "WAREHOUSE" | "DROPSHIP";
					/**
					 * Include only documents where `internalReference' contains the given text (case-insensitive).
					 */
					internalReference?: string;
					/**
					 * Include only documents where `note`-field contains the given text (case-insensitive).
					 */
					note?: string;
					/**
					 * True to include the purchase type column, default is false.
					 */
					showPurchaseTypeColumn?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/response": {
		put: {
			request: {
				params: never;
				query?: {
					/**
					 * List of purchase order ids.
					 */
					ids?: number[];
				};
				body: WarehouseResponseStateChange;
			};
			response: {
				body: WarehousePurchaseOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/sendpurchaseorders": {
		post: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query?: {
					/**
					 * used for calculating the remaining ordered quantity. null will take the received quantity from all incoming goods
					 */
					ignoreIncomingGoodsId?: number;
				};
				body: never;
			};
			response: {
				body: WarehousePurchaseOrder;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: WarehousePurchaseOrder;
			};
			response: {
				body: WarehousePurchaseOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/complete": {
		put: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete": {
		put: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseReleaseParentOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/matches": {
		get: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseDocumentReference;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/notes": {
		get: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehousePurchaseOrderRowNote;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/partial": {
		patch: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: WarehousePartialPurchaseOrder;
			};
			response: {
				body: WarehousePartialPurchaseOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/response": {
		put: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseResponseStateChange;
			};
			response: {
				body: WarehousePurchaseOrder;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/send": {
		post: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: WarehousePurchaseOrderMailSettings;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/purchaseorders-v1/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Purchase order id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/status-v1/stockbalance": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Optional filter on itemIds (comma-separated)
					 */
					itemIds?: string[];
					/**
					 * Optional filter on stock point codes (comma-separated).
					 */
					stockPointCodes?: string[];
				};
				body: never;
			};
			response: {
				body: WarehouseStockBalance;
			};
		};
	};
	"/api/warehouse/stockpoints-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * filters on stock point code or name.
					 */
					q?: string;
					/**
					 * filter on stock point state
					 */
					state?: "ALL" | "ACTIVE" | "INACTIVE";
				};
				body: never;
			};
			response: {
				body: WarehouseStockPoint;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseStockPoint;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stockpoints-v1/multi": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * stock point ids (comma separated list of UUIDs)
					 */
					ids?: string[];
					/**
					 * filter on <code>StockPointState</code>, default is to include ALL stock points.
					 */
					state?: "ALL" | "ACTIVE" | "INACTIVE";
				};
				body: never;
			};
			response: {
				body: WarehouseStockPoint;
			};
		};
	};
	"/api/warehouse/stockpoints-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * stock point code, or stock point id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseStockPoint;
			};
		};
		post: {
			request: {
				params: {
					/**
					 * stock point id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * id
					 */
					id: string;
				};
				query: never;
				body: WarehouseStockPoint;
			};
			response: {
				body: WarehouseStockPoint;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * id
					 */
					id: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseStockPoint;
			};
		};
	};
	"/api/warehouse/stockpoints-v1/{id}/stocklocations": {
		get: {
			request: {
				params: {
					/**
					 * stock point id or code
					 */
					id: string;
				};
				query?: {
					/**
					 * filters on stock location code or name.
					 */
					q?: string;
				};
				body: never;
			};
			response: {
				body: WarehouseStockLocation;
			};
		};
	};
	"/api/warehouse/stocktaking-v1": {
		get: {
			request: {
				params: never;
				query?: {
					/**
					 * Include only stock takings with the given state.
					 */
					state?: "all" | "planning" | "started" | "completed" | "voided";
					/**
					 * Include only stock takings with the given item.
					 */
					itemId?: string;
				};
				body: never;
			};
			response: {
				body: WarehouseStockTaking;
			};
		};
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseStockTaking;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseStockTaking;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseStockTaking;
			};
			response: {
				body: WarehouseStockTaking;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/addrows": {
		post: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query?: {
					itemIds?: string[];
					supplierNumbers?: string[];
					stockPointIds?: string[];
					stockLocationIds?: string[];
					transactionDate?: string;
					itemIdSearch?: string;
					itemDescriptionSearch?: string;
					excludeZeroBalanceItems?: boolean;
					excludeNonInboundItems?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/candidates": {
		get: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query?: {
					itemIds?: string[];
					supplierNumbers?: string[];
					stockPointIds?: string[];
					stockLocationIds?: string[];
					transactionDate?: string;
					itemIdSearch?: string;
					itemDescriptionSearch?: string;
					excludeZeroBalanceItems?: boolean;
					/**
					 * Include items that do not exist on inbound deliveries.
					 */
					includeNonInboundItems?: boolean;
				};
				body: never;
			};
			response: {
				body: WarehouseStockTakingRow;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/rows": {
		get: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query?: {
					itemIds?: string[];
					supplierNumbers?: string[];
					stockPointIds?: string[];
					stockLocationIds?: string[];
					transactionDate?: string;
					itemIdSearch?: string;
					itemDescriptionSearch?: string;
					excludeZeroBalanceItems?: boolean;
					/**
					 * Secondary sorting column
					 */
					secondarysortby?: string;
					/**
					 * Secondary sorting order
					 */
					secondaryorder?: string;
					stateFilter?:
						| "all"
						| "notStockTaken"
						| "stockTakenNoDeviation"
						| "stockTakenWithDeviation";
					/**
					 * the row number to start the search from, used with startingItemId to jump to specific rows, can be empty
					 */
					startingRowNo?: number;
					/**
					 * the itemId that should be on top of the rows list (used to jump to specific row), can be empty
					 */
					startingItemId?: string;
				};
				body: never;
			};
			response: {
				body: WarehouseStockTakingRow;
			};
		};
		post: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
		delete: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query?: {
					itemIds?: string[];
					supplierNumbers?: string[];
					stockPointIds?: string[];
					stockLocationIds?: string[];
					transactionDate?: string;
					itemIdSearch?: string;
					itemDescriptionSearch?: string;
					excludeZeroBalanceItems?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/rows/{rowId}": {
		delete: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
					/**
					 * row id
					 */
					rowId: string;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktaking-v1/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Stock Taking document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktransfer-v1": {
		post: {
			request: {
				params: never;
				query: never;
				body: WarehouseStockTransferDocument;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktransfer-v1/{id}": {
		get: {
			request: {
				params: {
					/**
					 * Stock Transfer document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: WarehouseStockTransferDocument;
			};
		};
		put: {
			request: {
				params: {
					/**
					 * Stock Transfer document id.
					 */
					id: number;
				};
				query: never;
				body: WarehouseStockTransferDocument;
			};
			response: {
				body: WarehouseStockTransferDocument;
			};
		};
	};
	"/api/warehouse/stocktransfer-v1/{id}/release": {
		put: {
			request: {
				params: {
					/**
					 * Stock Transfer document id.
					 */
					id: number;
				};
				query: never;
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/stocktransfer-v1/{id}/void": {
		put: {
			request: {
				params: {
					/**
					 * Stock Transfer document id.
					 */
					id: number;
				};
				query?: {
					force?: boolean;
				};
				body: never;
			};
			response: {
				body: never;
			};
		};
	};
	"/api/warehouse/tenants-v4": {
		get: {
			request: {
				params: never;
				query: never;
				body: never;
			};
			response: {
				body: WarehouseTenantInfo;
			};
		};
	};
}
