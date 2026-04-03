import z from "zod";
import {
	zFileattachmentsAttachment,
	zFileattachmentsNumberOfAttachments,
	zFortnoxAnlAssetsActionResponse,
	zFortnoxAnlAssetsDepreciationResponseWrap,
	zFortnoxAnlAssetsListItemWrap,
	zFortnoxAnlAssetsSingleItemResponseWrap,
	zFortnoxAnlAssetTypesListResponseWrap,
	zFortnoxAnlAssetTypesSingleResponseWrap,
	zFortnoxArticleListItemWrap,
	zFortnoxArticleSingleItemWrap,
	zFortnoxBfAccountChartListItemWrap,
	zFortnoxBfAccountListItemWrap,
	zFortnoxBfAccountSingleItemWrap,
	zFortnoxBfFinancialYearListItemWrap,
	zFortnoxBfFinancialYearSingleItemWrap,
	zFortnoxBfPreDefinedVoucherSeriesListItemWrap,
	zFortnoxBfPreDefinedVoucherSeriesSingleItemWrap,
	zFortnoxBfVoucherListItemWrap,
	zFortnoxBfVoucherSeriesListItemWrap,
	zFortnoxBfVoucherSeriesSingleItemWrap,
	zFortnoxBfVoucherSingleItemWrap,
	zFortnoxCompanyCompanySettingsResponseWrap,
	zFortnoxCompanyInformationSingleItemWrap,
	zFortnoxContractInvoiceContractAccrualListItemWrap,
	zFortnoxContractInvoiceContractAccrualSingleItemWrap,
	zFortnoxContractInvoiceContractListResponseWrap,
	zFortnoxContractInvoiceContractResponseWrap,
	zFortnoxContractInvoiceContractTemplateListResponseWrap,
	zFortnoxContractInvoiceContractTemplateResponseWrap,
	zFortnoxCostCenterListItemWrap,
	zFortnoxCostCenterSingleItemWrap,
	zFortnoxCurrencyListItemWrap,
	zFortnoxCurrencySingleItemWrap,
	zFortnoxDaArticleFileConnectionListItemWrap,
	zFortnoxDaArticleFileConnectionSingleItemWrap,
	zFortnoxDaAssetFileConnectionListItemWrap,
	zFortnoxDaEmailSendersWrap,
	zFortnoxDaInboxFolderResponseWrap,
	zFortnoxDaSupplierInvoiceFileConnectionListItemWrap,
	zFortnoxDaSupplierInvoiceFileConnectionSingleItemWrap,
	zFortnoxDaVoucherFileConnectionListItemWrap,
	zFortnoxDaVoucherFileConnectionSingleItemWrap,
	zFortnoxDocumentTagListItemWrap,
	zFortnoxDocumentTagSingleItemWrap,
	zFortnoxEuVatLimitRegulationResponseWrap,
	zFortnoxFileStorageFolderSingleItemWrap,
	zFortnoxItemUrlConnectionListItemWrap,
	zFortnoxItemUrlConnectionSingleItemWrap,
	zFortnoxKfCustomerListItemWrap,
	zFortnoxKfCustomerReferenceSingleItemWrap,
	zFortnoxKfCustomerSingleItemWrap,
	zFortnoxKfInvoiceAccrualListItemWrap,
	zFortnoxKfInvoiceAccrualSingleItemWrap,
	zFortnoxKfInvoiceListResponseWrap,
	zFortnoxKfInvoicePaymentListItemWrap,
	zFortnoxKfInvoicePaymentSingleItemWrap,
	zFortnoxKfInvoiceResponseWrap,
	zFortnoxKfNoxInvoiceSingleItemWrap,
	zFortnoxKfTermsOfDeliveryListItemWrap,
	zFortnoxKfTermsOfDeliverySingleItemWrap,
	zFortnoxLfSupplierInvoiceAccrualListItemWrap,
	zFortnoxLfSupplierInvoiceAccrualSingleItemWrap,
	zFortnoxLfSupplierInvoiceListItemWrap,
	zFortnoxLfSupplierInvoicePaymentListItemWrap,
	zFortnoxLfSupplierInvoicePaymentSingleItemWrap,
	zFortnoxLfSupplierInvoiceSingleItemWrap,
	zFortnoxLfSupplierListItemWrap,
	zFortnoxLfSupplierSingleItemWrap,
	zFortnoxLockedPeriodSettingsSingleItemWrap,
	zFortnoxLonAbsenceTransactionsListItemWrap,
	zFortnoxLonAbsenceTransactionsSingleItemWrap,
	zFortnoxLonAttendanceTransactionsListItemWrap,
	zFortnoxLonAttendanceTransactionsSingleItemWrap,
	zFortnoxLonEmployeeListItemWrap,
	zFortnoxLonEmployeeSingleItemWrap,
	zFortnoxLonExpensesListItemWrap,
	zFortnoxLonExpensesSingleItemWrap,
	zFortnoxLonSalaryTransactionsListItemWrap,
	zFortnoxLonSalaryTransactionsSingleItemWrap,
	zFortnoxLonScheduleTimeSingleItemWrap,
	zFortnoxLonVacationDebtBasisSingleItemWrap,
	zFortnoxMeSingleItemWrap,
	zFortnoxModeOfPaymentListItemWrap,
	zFortnoxModeOfPaymentSingleItemWrap,
	zFortnoxOfferOfferListResponseWrap,
	zFortnoxOfferOfferResponseWrap,
	zFortnoxOrderOrderListResponseWrap,
	zFortnoxOrderOrderResponseWrap,
	zFortnoxPreDefinedAccountListItemWrap,
	zFortnoxPreDefinedAccountSingleItemWrap,
	zFortnoxPriceListItemWrap,
	zFortnoxPriceListListItemWrap,
	zFortnoxPriceListSingleItemWrap,
	zFortnoxPriceSingleItemWrap,
	zFortnoxPrintTemplateListItemWrap,
	zFortnoxProjectProjectListItemWrap,
	zFortnoxProjectProjectSingleItemWrap,
	zFortnoxSinvoiceExternalUrlConnectionSingleItemWrap,
	zFortnoxTaxReductionListItemWrap,
	zFortnoxTaxReductionSingleItemWrap,
	zFortnoxTermsOfPaymentListItemWrap,
	zFortnoxTermsOfPaymentSingleItemWrap,
	zFortnoxUnitListItemWrap,
	zFortnoxUnitSingleItemWrap,
	zFortnoxWayOfDeliveryListItemWrap,
	zFortnoxWayOfDeliverySingleItemWrap,
	zIntegrationPartnerAppSalesResponse,
	zWarehouseCustomDocumentType,
	zWarehouseCustomInboundDocument,
	zWarehouseCustomOutboundDocument,
	zWarehouseDocumentReference,
	zWarehouseIncomingGoods,
	zWarehouseManualDocument,
	zWarehouseManualInboundDocument,
	zWarehouseManualOutboundDocument,
	zWarehousePackageItem,
	zWarehousePartialPurchaseOrder,
	zWarehouseProductionOrder,
	zWarehousePurchaseOrder,
	zWarehousePurchaseOrderRowNote,
	zWarehouseReleaseParentOrder,
	zWarehouseStockBalance,
	zWarehouseStockLocation,
	zWarehouseStockPoint,
	zWarehouseStockTaking,
	zWarehouseStockTakingRow,
	zWarehouseStockTransferDocument,
	zWarehouseTenantInfo,
} from "../hey-api/zod.gen";
export const paths = {
	"/3/absencetransactions": {
		get: {
			input: z
				.object({
					query: z
						.object({
							employeeid: z.string().optional(),
							date: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLonAbsenceTransactionsListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxLonAbsenceTransactionsSingleItemWrap,
		},
	},
	"/3/absencetransactions/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
			}),
			output: zFortnoxLonAbsenceTransactionsSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonAbsenceTransactionsSingleItemWrap,
		},
	},
	"/3/absencetransactions/{id}/{Date}/{Code}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
					Date: z.iso.date(),
					Code: z.enum([
						"ASK",
						"FPE",
						"FRA",
						"HAV",
						"KOM",
						"MIL",
						"NAR",
						"OS1",
						"OS2",
						"OS3",
						"OS4",
						"OS5",
						"PAP",
						"PEM",
						"PER",
						"SEM",
						"SJK",
						"SMB",
						"SVE",
						"TJL",
						"UTB",
						"VAB",
					]),
				}),
			}),
			output: zFortnoxLonAbsenceTransactionsListItemWrap,
		},
	},
	"/3/accountcharts": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxBfAccountChartListItemWrap,
		},
	},
	"/3/accounts": {
		get: {
			input: z
				.object({
					query: z
						.object({
							sortby: z.enum(["number"]).optional(),
							lastmodified: z.string().optional(),
							sru: z.int().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxBfAccountListItemWrap,
		},
		post: {
			input: z
				.object({
					query: z
						.object({
							financialyear: z.int().optional(),
						})
						.optional(),
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/accounts/{Number}": {
		delete: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
			}),
			output: zFortnoxBfAccountSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
				query: z
					.object({
						financialyear: z.int().optional(),
					})
					.optional(),
				body: z.any(),
			}),
			output: zFortnoxBfAccountSingleItemWrap,
		},
	},
	"/3/archive": {
		delete: {
			input: z
				.object({
					query: z
						.object({
							path: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: z.unknown(),
		},
		get: {
			input: z
				.object({
					query: z
						.object({
							path: z.string().optional(),
							fileid: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxFileStorageFolderSingleItemWrap,
		},
		post: {
			input: z
				.object({
					query: z
						.object({
							folderid: z.string().optional(),
							path: z.string().optional(),
						})
						.optional(),
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/archive/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
				query: z
					.object({
						path: z.string().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
				query: z
					.object({
						path: z.string().optional(),
						fileid: z.string().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/3/articlefileconnections": {
		get: {
			input: z
				.object({
					query: z
						.object({
							articlenumber: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxDaArticleFileConnectionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/articlefileconnections/{FileId}": {
		delete: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: zFortnoxDaArticleFileConnectionSingleItemWrap,
		},
	},
	"/3/articles": {
		get: {
			input: z
				.object({
					query: z
						.object({
							filter: z.enum(["active", "inactive"]).optional(),
							sortby: z
								.enum([
									"articlenumber",
									"quantityinstock",
									"reservedquantity",
									"stockvalue",
								])
								.optional(),
							articlenumber: z.string().optional(),
							description: z.string().optional(),
							ean: z.string().optional(),
							suppliernumber: z.string().optional(),
							manufacturer: z.string().optional(),
							manufacturerarticlenumber: z.string().optional(),
							webshop: z.string().optional(),
							lastmodified: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxArticleListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/articles/{ArticleNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					ArticleNumber: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					ArticleNumber: z.int(),
				}),
			}),
			output: zFortnoxArticleSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					ArticleNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxArticleSingleItemWrap,
		},
	},
	"/3/articleurlconnections": {
		get: {
			input: z
				.object({
					query: z
						.object({
							articlenumber: z.int().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxItemUrlConnectionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/articleurlconnections/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
			}),
			output: zFortnoxItemUrlConnectionSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxItemUrlConnectionSingleItemWrap,
		},
	},
	"/3/assetfileconnections": {
		get: {
			input: z
				.object({
					query: z
						.object({
							assetid: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxDaAssetFileConnectionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/assetfileconnections/{FileId}": {
		delete: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/assets": {
		get: {
			input: z
				.object({
					query: z
						.object({
							number: z.string().optional(),
							description: z.string().optional(),
							type: z.string().optional(),
							lastmodified: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxAnlAssetsListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxAnlAssetsSingleItemResponseWrap,
		},
	},
	"/3/assets/changeob/{Id}": {
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsActionResponse,
		},
	},
	"/3/assets/depreciate": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxAnlAssetsDepreciationResponseWrap,
		},
	},
	"/3/assets/depreciations/{ToDate}": {
		get: {
			input: z.object({
				params: z.object({
					ToDate: z.string(),
				}),
			}),
			output: zFortnoxAnlAssetsListItemWrap,
		},
	},
	"/3/assets/scrap/{Id}": {
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsActionResponse,
		},
	},
	"/3/assets/sell/{Id}": {
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsActionResponse,
		},
	},
	"/3/assets/types": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxAnlAssetTypesListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxAnlAssetTypesSingleResponseWrap,
		},
	},
	"/3/assets/types/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zFortnoxAnlAssetTypesSingleResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetTypesSingleResponseWrap,
		},
	},
	"/3/assets/writedown/{Id}": {
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsActionResponse,
		},
	},
	"/3/assets/writeup/{Id}": {
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsActionResponse,
		},
	},
	"/3/assets/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
			}),
			output: zFortnoxAnlAssetsSingleItemResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxAnlAssetsSingleItemResponseWrap,
		},
	},
	"/3/attendancetransactions": {
		get: {
			input: z
				.object({
					query: z
						.object({
							employeeid: z.string().optional(),
							date: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLonAttendanceTransactionsListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxLonAttendanceTransactionsSingleItemWrap,
		},
	},
	"/3/attendancetransactions/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
			}),
			output: zFortnoxLonAttendanceTransactionsSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonAttendanceTransactionsSingleItemWrap,
		},
	},
	"/3/attendancetransactions/{id}/{Date}/{Code}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
					Date: z.iso.date(),
					Code: z.enum([
						"ARB",
						"BE2",
						"BER",
						"FLX",
						"HLG",
						"JO2",
						"JOR",
						"MER",
						"OB1",
						"OB2",
						"OB3",
						"OB4",
						"OB5",
						"OK0",
						"OK1",
						"OK2",
						"OK3",
						"OK4",
						"OK5",
						"OT1",
						"OT2",
						"OT3",
						"OT4",
						"OT5",
						"RES",
						"TID",
					]),
				}),
			}),
			output: zFortnoxLonAttendanceTransactionsListItemWrap,
		},
	},
	"/3/companyinformation": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxCompanyInformationSingleItemWrap,
		},
	},
	"/3/contractaccruals": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxContractInvoiceContractAccrualListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/contractaccruals/{DocumentNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxContractInvoiceContractAccrualSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractAccrualSingleItemWrap,
		},
	},
	"/3/contracts": {
		get: {
			input: z
				.object({
					query: z
						.object({
							periodstart: z.iso.date().optional(),
							periodend: z.iso.date().optional(),
							filter: z.enum(["active", "inactive", "finished"]).optional(),
							documentnumber: z.int().optional(),
							customernumber: z.string().optional(),
							templatenumber: z.int().optional(),
							invoicesremaining: z.int().optional(),
							lastmodified: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxContractInvoiceContractListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/contracts/{DocumentNumber}": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxContractInvoiceContractResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractResponseWrap,
		},
	},
	"/3/contracts/{DocumentNumber}/createinvoice": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				query: z
					.object({
						invoicedate: z.iso.date().optional(),
					})
					.optional(),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractResponseWrap,
		},
	},
	"/3/contracts/{DocumentNumber}/finish": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractResponseWrap,
		},
	},
	"/3/contracts/{DocumentNumber}/increaseinvoicecount": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractResponseWrap,
		},
	},
	"/3/contracttemplates": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxContractInvoiceContractTemplateListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/contracttemplates/{TemplateNumber}": {
		get: {
			input: z.object({
				params: z.object({
					TemplateNumber: z.int(),
				}),
			}),
			output: zFortnoxContractInvoiceContractTemplateResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					TemplateNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxContractInvoiceContractTemplateResponseWrap,
		},
	},
	"/3/costcenters": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxCostCenterListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/costcenters/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxCostCenterSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxCostCenterSingleItemWrap,
		},
	},
	"/3/currencies": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxCurrencyListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/currencies/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxCurrencySingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxCurrencySingleItemWrap,
		},
	},
	"/3/customerreferences": {
		get: {
			input: z
				.object({
					query: z
						.object({
							customer: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxKfCustomerReferenceSingleItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/customerreferences/{CustomerReferenceRowId}": {
		delete: {
			input: z.object({
				params: z.object({
					CustomerReferenceRowId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					CustomerReferenceRowId: z.string(),
				}),
			}),
			output: zFortnoxKfCustomerReferenceSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					CustomerReferenceRowId: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfCustomerReferenceSingleItemWrap,
		},
	},
	"/3/customers": {
		get: {
			input: z
				.object({
					query: z
						.object({
							filter: z.enum(["active", "inactive"]).optional(),
							sortby: z.enum(["customernumber", "name"]).optional(),
							customernumber: z.string().optional(),
							name: z.string().optional(),
							zipcode: z.string().optional(),
							city: z.string().optional(),
							email: z.string().optional(),
							phone: z.string().optional(),
							organisationnumber: z.string().optional(),
							gln: z.string().optional(),
							glndelivery: z.string().optional(),
							lastmodified: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxKfCustomerListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/customers/{CustomerNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					CustomerNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					CustomerNumber: z.string(),
				}),
			}),
			output: zFortnoxKfCustomerSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					CustomerNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfCustomerSingleItemWrap,
		},
	},
	"/3/emailsenders": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxDaEmailSendersWrap,
		},
	},
	"/3/emailsenders/trusted": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/emailsenders/trusted/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/employees": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxLonEmployeeListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxLonEmployeeSingleItemWrap,
		},
	},
	"/3/employees/{EmployeeId}": {
		get: {
			input: z.object({
				params: z.object({
					EmployeeId: z.string(),
				}),
			}),
			output: zFortnoxLonEmployeeSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					EmployeeId: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonEmployeeSingleItemWrap,
		},
	},
	"/3/euvatlimitregulation": {
		get: {
			input: z
				.object({
					query: z
						.object({
							year: z.int().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxEuVatLimitRegulationResponseWrap,
		},
	},
	"/3/expenses": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxLonExpensesListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxLonExpensesSingleItemWrap,
		},
	},
	"/3/expenses/{ExpenseCode}": {
		get: {
			input: z.object({
				params: z.object({
					ExpenseCode: z.string(),
				}),
			}),
			output: zFortnoxLonExpensesSingleItemWrap,
		},
	},
	"/3/financialyears": {
		get: {
			input: z
				.object({
					query: z
						.object({
							Date: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxBfFinancialYearListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/financialyears/{Id}": {
		get: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: zFortnoxBfFinancialYearSingleItemWrap,
		},
	},
	"/3/inbox": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxDaInboxFolderResponseWrap,
		},
		post: {
			input: z
				.object({
					query: z
						.object({
							folderId: z.string().optional(),
							path: z.string().optional(),
						})
						.optional(),
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/inbox/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Id: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/invoiceaccruals": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxKfInvoiceAccrualListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/invoiceaccruals/{InvoiceNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
			}),
			output: zFortnoxKfInvoiceAccrualSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceAccrualSingleItemWrap,
		},
	},
	"/3/invoicepayments": {
		get: {
			input: z
				.object({
					query: z
						.object({
							sortby: z.enum(["paymentdate"]).optional(),
							invoicenumber: z.int().optional(),
							lastmodified: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxKfInvoicePaymentListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/invoicepayments/{Number}": {
		delete: {
			input: z.object({
				params: z.object({
					Number: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Number: z.string(),
				}),
			}),
			output: zFortnoxKfInvoicePaymentSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Number: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoicePaymentSingleItemWrap,
		},
	},
	"/3/invoicepayments/{Number}/bookkeep": {
		put: {
			input: z.object({
				params: z.object({
					Number: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoicePaymentSingleItemWrap,
		},
	},
	"/3/invoices": {
		get: {
			input: z
				.object({
					query: z
						.object({
							tofinalpaydate: z.string().optional(),
							fromfinalpaydate: z.string().optional(),
							filter: z
								.enum([
									"cancelled",
									"fullypaid",
									"unpaid",
									"unpaidoverdue",
									"unbooked",
								])
								.optional(),
							sortby: z
								.enum([
									"customername",
									"customernumber",
									"documentnumber",
									"invoicedate",
									"ocr",
									"total",
								])
								.optional(),
							costcenter: z.string().optional(),
							customername: z.string().optional(),
							customernumber: z.string().optional(),
							label: z.string().optional(),
							documentnumber: z.string().optional(),
							fromdate: z.string().optional(),
							todate: z.string().optional(),
							lastmodified: z.string().optional(),
							notcompleted: z.string().optional(),
							ocr: z.string().optional(),
							ourreference: z.string().optional(),
							project: z.string().optional(),
							sent: z.string().optional(),
							externalinvoicereference1: z.string().optional(),
							externalinvoicereference2: z.string().optional(),
							yourreference: z.string().optional(),
							invoicetype: z.string().optional(),
							articlenumber: z.string().optional(),
							articledescription: z.string().optional(),
							currency: z.string().optional(),
							accountnumberfrom: z.string().optional(),
							accountnumberto: z.string().optional(),
							yourordernumber: z.string().optional(),
							credit: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxKfInvoiceListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/invoices/{DocumentNumber}": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/bookkeep": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/cancel": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/credit": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/einvoice": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/email": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/eprint": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/externalprint": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/invoices/{DocumentNumber}/preview": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/invoices/{DocumentNumber}/print": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/invoices/{DocumentNumber}/printreminder": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/invoices/{DocumentNumber}/warehouseready": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfInvoiceResponseWrap,
		},
	},
	"/3/labels": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxDocumentTagListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/labels/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		put: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxDocumentTagSingleItemWrap,
		},
	},
	"/3/me": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxMeSingleItemWrap,
		},
	},
	"/3/modesofpayments": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxModeOfPaymentListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/modesofpayments/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxModeOfPaymentSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxModeOfPaymentSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}": {
		get: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}/pause": {
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}/report-payment": {
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}/stop": {
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}/take-fees": {
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/noxfinansinvoices/{InvoiceNumber}/unpause": {
		put: {
			input: z.object({
				params: z.object({
					InvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfNoxInvoiceSingleItemWrap,
		},
	},
	"/3/offers": {
		get: {
			input: z
				.object({
					query: z
						.object({
							todate: z.string().optional(),
							fromdate: z.string().optional(),
							filter: z
								.enum([
									"cancelled",
									"expired",
									"completed",
									"notcompleted",
									"ordercreated",
									"ordernotcreated",
								])
								.optional(),
							sortby: z
								.enum(["customerName", "id", "transactionDate", "total"])
								.optional(),
							customername: z.string().optional(),
							customernumber: z.string().optional(),
							documentnumber: z.string().optional(),
							costcenter: z.string().optional(),
							label: z.string().optional(),
							project: z.string().optional(),
							sent: z.boolean().optional(),
							notcompleted: z.boolean().optional(),
							ourreference: z.string().optional(),
							yourreference: z.string().optional(),
							lastmodified: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxOfferOfferListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/offers/{DocumentNumber}": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/cancel": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/createinvoice": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/createorder": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/email": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/externalprint": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOfferOfferResponseWrap,
		},
	},
	"/3/offers/{DocumentNumber}/preview": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/offers/{DocumentNumber}/print": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/orders": {
		get: {
			input: z
				.object({
					query: z
						.object({
							todate: z.string().optional(),
							fromdate: z.string().optional(),
							filter: z
								.enum([
									"cancelled",
									"expired",
									"invoicecreated",
									"invoicenotcreated",
								])
								.optional(),
							sortby: z
								.enum([
									"customername",
									"customernumber",
									"orderdate",
									"documentnumber",
									"total",
								])
								.optional(),
							customername: z.string().optional(),
							customernumber: z.string().optional(),
							label: z.string().optional(),
							documentnumber: z.string().optional(),
							externalinvoicereference1: z.string().optional(),
							externalinvoicereference2: z.string().optional(),
							costcenter: z.string().optional(),
							project: z.string().optional(),
							sent: z.boolean().optional(),
							notcompleted: z.boolean().optional(),
							ourreference: z.string().optional(),
							yourreference: z.string().optional(),
							lastmodified: z.string().optional(),
							ordertype: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxOrderOrderListResponseWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/orders/{DocumentNumber}": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
	},
	"/3/orders/{DocumentNumber}/cancel": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
	},
	"/3/orders/{DocumentNumber}/createinvoice": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
	},
	"/3/orders/{DocumentNumber}/email": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
	},
	"/3/orders/{DocumentNumber}/externalprint": {
		put: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxOrderOrderResponseWrap,
		},
	},
	"/3/orders/{DocumentNumber}/preview": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/orders/{DocumentNumber}/print": {
		get: {
			input: z.object({
				params: z.object({
					DocumentNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/3/predefinedaccounts": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxPreDefinedAccountListItemWrap,
		},
	},
	"/3/predefinedaccounts/{name}": {
		get: {
			input: z.object({
				params: z.object({
					name: z.string(),
				}),
			}),
			output: zFortnoxPreDefinedAccountSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					name: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxPreDefinedAccountSingleItemWrap,
		},
	},
	"/3/predefinedvoucherseries": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxBfPreDefinedVoucherSeriesListItemWrap,
		},
	},
	"/3/predefinedvoucherseries/{Name}": {
		get: {
			input: z.object({
				params: z.object({
					Name: z.string(),
				}),
			}),
			output: zFortnoxBfPreDefinedVoucherSeriesSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Name: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxBfPreDefinedVoucherSeriesSingleItemWrap,
		},
	},
	"/3/pricelists": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxPriceListListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/pricelists/{Code}": {
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxPriceListSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxPriceListSingleItemWrap,
		},
	},
	"/3/prices": {
		get: {
			input: z
				.object({
					query: z
						.object({
							fromquantity: z.number().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxPriceSingleItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/prices/sublist/{PriceList}/{ArticleNumber}": {
		get: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
				}),
				query: z
					.object({
						fromquantity: z.number().optional(),
					})
					.optional(),
			}),
			output: zFortnoxPriceListItemWrap,
		},
	},
	"/3/prices/{PriceList}/{ArticleNumber}": {
		get: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
				}),
				query: z
					.object({
						fromquantity: z.number().optional(),
					})
					.optional(),
			}),
			output: zFortnoxPriceSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxPriceSingleItemWrap,
		},
	},
	"/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}": {
		delete: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
					FromQuantity: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
					FromQuantity: z.string(),
				}),
			}),
			output: zFortnoxPriceSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					PriceList: z.string(),
					ArticleNumber: z.string(),
					FromQuantity: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxPriceSingleItemWrap,
		},
	},
	"/3/printtemplates": {
		get: {
			input: z
				.object({
					query: z
						.object({
							type: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxPrintTemplateListItemWrap,
		},
	},
	"/3/projects": {
		get: {
			input: z
				.object({
					query: z
						.object({
							description: z.string().optional(),
							projectleader: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxProjectProjectListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/projects/{ProjectNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					ProjectNumber: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					ProjectNumber: z.int(),
				}),
			}),
			output: zFortnoxProjectProjectSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					ProjectNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxProjectProjectSingleItemWrap,
		},
	},
	"/3/salarytransactions": {
		get: {
			input: z
				.object({
					query: z
						.object({
							date: z.iso.date().optional(),
							employeeId: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLonSalaryTransactionsListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: zFortnoxLonSalaryTransactionsSingleItemWrap,
		},
	},
	"/3/salarytransactions/{SalaryRow}": {
		delete: {
			input: z.object({
				params: z.object({
					SalaryRow: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					SalaryRow: z.int(),
				}),
			}),
			output: zFortnoxLonSalaryTransactionsSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					SalaryRow: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonSalaryTransactionsSingleItemWrap,
		},
	},
	"/3/scheduletimes/{EmployeeId}/{Date}": {
		get: {
			input: z.object({
				params: z.object({
					EmployeeId: z.string(),
					Date: z.iso.date(),
				}),
			}),
			output: zFortnoxLonScheduleTimeSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					EmployeeId: z.string(),
					Date: z.iso.date(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonScheduleTimeSingleItemWrap,
		},
	},
	"/3/scheduletimes/{EmployeeId}/{Date}/resetday": {
		put: {
			input: z.object({
				params: z.object({
					EmployeeId: z.string(),
					Date: z.iso.date(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLonScheduleTimeSingleItemWrap,
		},
	},
	"/3/settings/company": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxCompanyCompanySettingsResponseWrap,
		},
	},
	"/3/settings/lockedperiod": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxLockedPeriodSettingsSingleItemWrap,
		},
	},
	"/3/sie/{Type}": {
		get: {
			input: z.object({
				params: z.object({
					Type: z.string(),
				}),
				query: z
					.object({
						selection: z.string().optional(),
						financialYear: z.int().optional(),
						exportall: z.string().optional(),
						fromdate: z.iso.date().optional(),
						todate: z.iso.date().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoiceaccruals": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxLfSupplierInvoiceAccrualListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}": {
		delete: {
			input: z.object({
				params: z.object({
					SupplierInvoiceNumber: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					SupplierInvoiceNumber: z.string(),
				}),
			}),
			output: zFortnoxLfSupplierInvoiceAccrualSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					SupplierInvoiceNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceAccrualSingleItemWrap,
		},
	},
	"/3/supplierinvoiceexternalurlconnections": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoiceexternalurlconnections/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: zFortnoxSinvoiceExternalUrlConnectionSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxSinvoiceExternalUrlConnectionSingleItemWrap,
		},
	},
	"/3/supplierinvoicefileconnections": {
		get: {
			input: z
				.object({
					query: z
						.object({
							supplierinvoicenumber: z.int().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxDaSupplierInvoiceFileConnectionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoicefileconnections/{FileId}": {
		delete: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: zFortnoxDaSupplierInvoiceFileConnectionSingleItemWrap,
		},
	},
	"/3/supplierinvoicepayments": {
		get: {
			input: z
				.object({
					query: z
						.object({
							invoicenumber: z.int().optional(),
							lastmodified: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLfSupplierInvoicePaymentListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoicepayments/{Number}": {
		delete: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
			}),
			output: zFortnoxLfSupplierInvoicePaymentSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoicePaymentSingleItemWrap,
		},
	},
	"/3/supplierinvoicepayments/{Number}/bookkeep": {
		put: {
			input: z.object({
				params: z.object({
					Number: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoicePaymentSingleItemWrap,
		},
	},
	"/3/supplierinvoices": {
		get: {
			input: z
				.object({
					query: z
						.object({
							tofinalpaydate: z.iso.date().optional(),
							fromfinalpaydate: z.iso.date().optional(),
							filter: z
								.enum([
									"cancelled",
									"fullypaid",
									"unpaid",
									"unpaidoverdue",
									"unbooked",
									"pendingpayment",
									"authorizepending",
								])
								.optional(),
							lastmodified: z.iso.date().optional(),
							suppliernumber: z.string().optional(),
							suppliername: z.string().optional(),
							ocr: z.string().optional(),
							invoicenumber: z.string().optional(),
							serialnumber: z.string().optional(),
							costcenter: z.string().optional(),
							project: z.string().optional(),
							ourreference: z.string().optional(),
							yourreference: z.string().optional(),
							fromdate: z.iso.date().optional(),
							todate: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLfSupplierInvoiceListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/supplierinvoices/{GivenNumber}": {
		get: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/supplierinvoices/{GivenNumber}/approvalbookkeep": {
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/supplierinvoices/{GivenNumber}/approvalpayment": {
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/supplierinvoices/{GivenNumber}/bookkeep": {
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/supplierinvoices/{GivenNumber}/cancel": {
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/supplierinvoices/{GivenNumber}/credit": {
		put: {
			input: z.object({
				params: z.object({
					GivenNumber: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierInvoiceSingleItemWrap,
		},
	},
	"/3/suppliers": {
		get: {
			input: z
				.object({
					query: z
						.object({
							suppliernumber: z.string().optional(),
							name: z.string().optional(),
							organisationnumber: z.string().optional(),
							phone: z.string().optional(),
							zipcode: z.string().optional(),
							city: z.string().optional(),
							email: z.string().optional(),
							lastmodified: z.iso.date().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxLfSupplierListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/suppliers/{SupplierNumber}": {
		get: {
			input: z.object({
				params: z.object({
					SupplierNumber: z.string(),
				}),
			}),
			output: zFortnoxLfSupplierSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					SupplierNumber: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxLfSupplierSingleItemWrap,
		},
	},
	"/3/taxreductions": {
		get: {
			input: z
				.object({
					query: z
						.object({
							filter: z.enum(["invoices", "orders", "offers"]).optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxTaxReductionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/taxreductions/{Id}": {
		delete: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
			}),
			output: zFortnoxTaxReductionSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Id: z.int(),
				}),
				body: z.any(),
			}),
			output: zFortnoxTaxReductionSingleItemWrap,
		},
	},
	"/3/termsofdeliveries": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxKfTermsOfDeliveryListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/termsofdeliveries/{Code}": {
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxKfTermsOfDeliverySingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxKfTermsOfDeliverySingleItemWrap,
		},
	},
	"/3/termsofpayments": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxTermsOfPaymentListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/termsofpayments/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxTermsOfPaymentSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxTermsOfPaymentSingleItemWrap,
		},
	},
	"/3/units": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxUnitListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/units/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxUnitSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxUnitSingleItemWrap,
		},
	},
	"/3/vacationdebtbasis/{Year}/{Month}": {
		get: {
			input: z.object({
				params: z.object({
					Year: z.int(),
					Month: z.int(),
				}),
			}),
			output: zFortnoxLonVacationDebtBasisSingleItemWrap,
		},
	},
	"/3/voucherfileconnections": {
		get: {
			input: z
				.object({
					query: z
						.object({
							voucheryear: z.int().optional(),
							voucherdescription: z.string().optional(),
							vouchernumber: z.int().optional(),
							voucherseries: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxDaVoucherFileConnectionListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/voucherfileconnections/{FileId}": {
		delete: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					FileId: z.string(),
				}),
			}),
			output: zFortnoxDaVoucherFileConnectionSingleItemWrap,
		},
	},
	"/3/vouchers": {
		get: {
			input: z
				.object({
					query: z
						.object({
							costcenter: z.string().optional(),
							lastmodified: z.iso.date().optional(),
							fromdate: z.iso.date().optional(),
							todate: z.iso.date().optional(),
							voucherseries: z.string().optional(),
							financialyear: z.int().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxBfVoucherListItemWrap,
		},
		post: {
			input: z
				.object({
					query: z
						.object({
							financialyear: z.int().optional(),
						})
						.optional(),
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/vouchers/sublist": {
		get: {
			input: z
				.object({
					query: z
						.object({
							costcenter: z.string().optional(),
							lastmodified: z.iso.date().optional(),
							fromdate: z.iso.date().optional(),
							todate: z.iso.date().optional(),
							voucherseries: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zFortnoxBfVoucherListItemWrap,
		},
	},
	"/3/vouchers/sublist/{VoucherSeries}": {
		get: {
			input: z.object({
				params: z.object({
					VoucherSeries: z.string(),
				}),
				query: z
					.object({
						costcenter: z.string().optional(),
						lastmodified: z.iso.date().optional(),
						fromdate: z.iso.date().optional(),
						todate: z.iso.date().optional(),
						financialyear: z.int().optional(),
					})
					.optional(),
			}),
			output: zFortnoxBfVoucherListItemWrap,
		},
	},
	"/3/vouchers/{VoucherSeries}/{VoucherNumber}": {
		get: {
			input: z.object({
				params: z.object({
					VoucherSeries: z.string(),
					VoucherNumber: z.int(),
				}),
				query: z
					.object({
						financialyear: z.int().optional(),
					})
					.optional(),
			}),
			output: zFortnoxBfVoucherSingleItemWrap,
		},
	},
	"/3/voucherseries": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxBfVoucherSeriesListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/voucherseries/{Code}": {
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxBfVoucherSeriesSingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxBfVoucherSeriesSingleItemWrap,
		},
	},
	"/3/wayofdeliveries": {
		get: {
			input: z.object({}).optional(),
			output: zFortnoxWayOfDeliveryListItemWrap,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/3/wayofdeliveries/{Code}": {
		delete: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
			}),
			output: zFortnoxWayOfDeliverySingleItemWrap,
		},
		put: {
			input: z.object({
				params: z.object({
					Code: z.string(),
				}),
				body: z.any(),
			}),
			output: zFortnoxWayOfDeliverySingleItemWrap,
		},
	},
	"/api/fileattachments/attachments-v1": {
		get: {
			input: z.object({
				query: z.object({
					entityid: z.array(z.int()),
					entitytype: z.enum(["OF", "O", "F", "C", "LGR_IO", "LGR_IG"]),
				}),
			}),
			output: zFileattachmentsAttachment,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/fileattachments/attachments-v1/numberofattachments": {
		get: {
			input: z.object({
				query: z.object({
					entityids: z.array(z.int()),
					entitytype: z.enum(["OF", "O", "F", "C", "LGR_IO", "LGR_IG"]),
				}),
			}),
			output: zFileattachmentsNumberOfAttachments,
		},
	},
	"/api/fileattachments/attachments-v1/validateincludedonsend": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/fileattachments/attachments-v1/{attachmentId}": {
		delete: {
			input: z.object({
				params: z.object({
					attachmentId: z.uuid(),
				}),
			}),
			output: z.unknown(),
		},
		put: {
			input: z.object({
				params: z.object({
					attachmentId: z.uuid(),
				}),
				body: z.any(),
			}),
			output: zFileattachmentsAttachment,
		},
	},
	"/api/integration-developer/ratings-v1": {
		get: {
			input: z.object({}).optional(),
			output: z.unknown(),
		},
	},
	"/api/integration-developer/sales-v1/{integrationId}": {
		get: {
			input: z.object({
				params: z.object({
					integrationId: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/integration-developer/users/users-v1/{integrationId}/{tenantId}": {
		get: {
			input: z.object({
				params: z.object({
					integrationId: z.int(),
					tenantId: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/integration-partner/apps/sales-v1/{appId}": {
		get: {
			input: z.object({
				params: z.object({
					appId: z.string(),
				}),
			}),
			output: zIntegrationPartnerAppSalesResponse,
		},
	},
	"/api/integration-partner/apps/sales-v1/{appId}/{tenantId}": {
		get: {
			input: z.object({
				params: z.object({
					appId: z.string(),
					tenantId: z.int(),
				}),
			}),
			output: zIntegrationPartnerAppSalesResponse,
		},
	},
	"/api/time/articles-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							fromDate: z.iso.date().optional(),
							toDate: z.iso.date().optional(),
							customerIds: z.array(z.string()).optional(),
							projectIds: z.array(z.string()).optional(),
							includeRegistrationsWithoutProject: z.boolean().optional(),
							itemIds: z.array(z.string()).optional(),
							costCenterIds: z.array(z.string()).optional(),
							ownerIds: z.array(z.string()).optional(),
							invoiced: z.boolean().optional(),
							inInvoiceBasis: z.boolean().optional(),
							internalArticles: z.boolean().optional(),
							nonInvoiceable: z.boolean().optional(),
							includeNonInvoiceablePrice: z.boolean().optional(),
						})
						.optional(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/time/registrations-v2": {
		get: {
			input: z
				.object({
					query: z
						.object({
							fromDate: z.iso.date().optional(),
							toDate: z.iso.date().optional(),
							customerIds: z.array(z.string()).optional(),
							projectIds: z.array(z.string()).optional(),
							serviceIds: z.array(z.string()).optional(),
							costCenterIds: z.array(z.string()).optional(),
							regCodes: z.array(z.string()).optional(),
							userIds: z.array(z.string()).optional(),
							includeRegistrationsWithoutProject: z.boolean().optional(),
							invoiced: z.boolean().optional(),
							inInvoiceBasis: z.boolean().optional(),
							internalTime: z.boolean().optional(),
							nonInvoiceable: z.boolean().optional(),
							includeNonInvoiceableChargeHours: z.boolean().optional(),
						})
						.optional(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							state: z
								.enum(["all", "unreleased", "released", "voided"])
								.optional(),
							type: z
								.enum(["all", "inbound", "outbound", "stocktransfer"])
								.optional(),
							itemId: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseManualDocument,
		},
	},
	"/api/warehouse/deliveries-v1/inbounddeliveries": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseManualInboundDocument,
		},
		patch: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseManualInboundDocument,
		},
	},
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						force: z.boolean().optional(),
						customVoidDate: z.iso.date().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1/outbounddeliveries": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseManualOutboundDocument,
		},
		patch: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseManualOutboundDocument,
		},
	},
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						customVoidDate: z.iso.date().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/documentdeliveries/custom/documenttypes-v1": {
		get: {
			input: z.object({}).optional(),
			output: zWarehouseCustomDocumentType,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}": {
		get: {
			input: z.object({
				params: z.object({
					type: z.string(),
				}),
			}),
			output: zWarehouseCustomDocumentType,
		},
	},
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}": {
		get: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
			}),
			output: zWarehouseCustomInboundDocument,
		},
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
				body: z.any(),
			}),
			output: zWarehouseCustomInboundDocument,
		},
	},
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
				query: z
					.object({
						force: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}": {
		get: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
			}),
			output: zWarehouseCustomOutboundDocument,
		},
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
				body: z.any(),
			}),
			output: zWarehouseCustomOutboundDocument,
		},
	},
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					type: z.string(),
					id: z.string(),
				}),
				query: z
					.object({
						force: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/incominggoods-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							released: z.boolean().optional(),
							completed: z.boolean().optional(),
							voided: z.boolean().optional(),
							supplierNumber: z.string().optional(),
							itemId: z.string().optional(),
							note: z.string().optional(),
							deliveryNote: z.string().optional(),
							q: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: z.unknown(),
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/incominggoods-v1/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						ignoreSupplierInvoiceId: z.int().optional(),
					})
					.optional(),
			}),
			output: zWarehouseIncomingGoods,
		},
		patch: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseIncomingGoods,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseIncomingGoods,
		},
	},
	"/api/warehouse/incominggoods-v1/{id}/completed": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/incominggoods-v1/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/incominggoods-v1/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/productionorders-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							state: z
								.enum(["all", "incomplete", "delayed", "completed", "voided"])
								.optional(),
							itemId: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseProductionOrder,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/productionorders-v1/billofmaterials/{itemId}": {
		get: {
			input: z.object({
				params: z.object({
					itemId: z.string(),
				}),
				query: z
					.object({
						id: z.int().optional(),
						quantity: z.string().optional(),
					})
					.optional(),
			}),
			output: zWarehousePackageItem,
		},
	},
	"/api/warehouse/productionorders-v1/release/{id}": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseProductionOrder,
		},
	},
	"/api/warehouse/productionorders-v1/void/{id}": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						force: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/productionorders-v1/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseProductionOrder,
		},
		patch: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseProductionOrder,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseProductionOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							q: z.string().optional(),
							supplierNumber: z.string().optional(),
							state: z
								.enum([
									"NOT_SENT",
									"SENT",
									"SENT_NOT_REJECTED",
									"DELAYED",
									"RECEIVED",
									"VOIDED",
									"CURRENT",
									"ALL",
								])
								.optional(),
							itemId: z.string().optional(),
							purchaseType: z.enum(["WAREHOUSE", "DROPSHIP"]).optional(),
							internalReference: z.string().optional(),
							note: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehousePurchaseOrder,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/purchaseorders-v1/csv": {
		get: {
			input: z
				.object({
					query: z
						.object({
							q: z.string().optional(),
							supplierNumber: z.string().optional(),
							state: z
								.enum([
									"NOT_SENT",
									"SENT",
									"SENT_NOT_REJECTED",
									"DELAYED",
									"RECEIVED",
									"VOIDED",
									"CURRENT",
									"ALL",
								])
								.optional(),
							itemId: z.string().optional(),
							purchaseType: z.enum(["WAREHOUSE", "DROPSHIP"]).optional(),
							internalReference: z.string().optional(),
							note: z.string().optional(),
							showPurchaseTypeColumn: z.boolean().optional(),
						})
						.optional(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/purchaseorders-v1/response": {
		put: {
			input: z
				.object({
					query: z
						.object({
							ids: z.array(z.int()).optional(),
						})
						.optional(),
					body: z.any(),
				})
				.optional(),
			output: zWarehousePurchaseOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1/sendpurchaseorders": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						ignoreIncomingGoodsId: z.int().optional(),
					})
					.optional(),
			}),
			output: zWarehousePurchaseOrder,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehousePurchaseOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/complete": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseReleaseParentOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/matches": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseDocumentReference,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/notes": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehousePurchaseOrderRowNote,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/partial": {
		patch: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehousePartialPurchaseOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/response": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehousePurchaseOrder,
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/send": {
		post: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/purchaseorders-v1/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/status-v1/stockbalance": {
		get: {
			input: z
				.object({
					query: z
						.object({
							itemIds: z.array(z.string()).optional(),
							stockPointCodes: z.array(z.string()).optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseStockBalance,
		},
	},
	"/api/warehouse/stockpoints-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							q: z.string().optional(),
							state: z.enum(["ALL", "ACTIVE", "INACTIVE"]).optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseStockPoint,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stockpoints-v1/multi": {
		get: {
			input: z
				.object({
					query: z
						.object({
							ids: z.array(z.uuid()).optional(),
							state: z.enum(["ALL", "ACTIVE", "INACTIVE"]).optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseStockPoint,
		},
	},
	"/api/warehouse/stockpoints-v1/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
			}),
			output: zWarehouseStockPoint,
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
			}),
			output: zWarehouseStockPoint,
		},
		post: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.uuid(),
				}),
				body: z.any(),
			}),
			output: zWarehouseStockPoint,
		},
	},
	"/api/warehouse/stockpoints-v1/{id}/stocklocations": {
		get: {
			input: z.object({
				params: z.object({
					id: z.string(),
				}),
				query: z
					.object({
						q: z.string().optional(),
					})
					.optional(),
			}),
			output: zWarehouseStockLocation,
		},
	},
	"/api/warehouse/stocktaking-v1": {
		get: {
			input: z
				.object({
					query: z
						.object({
							state: z
								.enum(["all", "planning", "started", "completed", "voided"])
								.optional(),
							itemId: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
			output: zWarehouseStockTaking,
		},
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktaking-v1/{id}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseStockTaking,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseStockTaking,
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/addrows": {
		post: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						itemIds: z.array(z.string()).optional(),
						supplierNumbers: z.array(z.string()).optional(),
						stockPointIds: z.array(z.string()).optional(),
						stockLocationIds: z.array(z.string()).optional(),
						transactionDate: z.iso.date().optional(),
						itemIdSearch: z.string().optional(),
						itemDescriptionSearch: z.string().optional(),
						excludeZeroBalanceItems: z.boolean().optional(),
						excludeNonInboundItems: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/candidates": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						itemIds: z.array(z.string()).optional(),
						supplierNumbers: z.array(z.string()).optional(),
						stockPointIds: z.array(z.string()).optional(),
						stockLocationIds: z.array(z.string()).optional(),
						transactionDate: z.iso.date().optional(),
						itemIdSearch: z.string().optional(),
						itemDescriptionSearch: z.string().optional(),
						excludeZeroBalanceItems: z.boolean().optional(),
						includeNonInboundItems: z.boolean().optional(),
					})
					.optional(),
			}),
			output: zWarehouseStockTakingRow,
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/rows": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						itemIds: z.array(z.string()).optional(),
						supplierNumbers: z.array(z.string()).optional(),
						stockPointIds: z.array(z.string()).optional(),
						stockLocationIds: z.array(z.string()).optional(),
						transactionDate: z.iso.date().optional(),
						itemIdSearch: z.string().optional(),
						itemDescriptionSearch: z.string().optional(),
						excludeZeroBalanceItems: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						itemIds: z.array(z.string()).optional(),
						supplierNumbers: z.array(z.string()).optional(),
						stockPointIds: z.array(z.string()).optional(),
						stockLocationIds: z.array(z.string()).optional(),
						transactionDate: z.iso.date().optional(),
						itemIdSearch: z.string().optional(),
						itemDescriptionSearch: z.string().optional(),
						excludeZeroBalanceItems: z.boolean().optional(),
						secondarysortby: z.string().optional(),
						secondaryorder: z.string().optional(),
						stateFilter: z
							.enum([
								"all",
								"notStockTaken",
								"stockTakenNoDeviation",
								"stockTakenWithDeviation",
							])
							.optional(),
						startingRowNo: z.int().optional(),
						startingItemId: z.string().optional(),
					})
					.optional(),
			}),
			output: zWarehouseStockTakingRow,
		},
		post: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/rows/{rowId}": {
		delete: {
			input: z.object({
				params: z.object({
					id: z.int(),
					rowId: z.string(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktaking-v1/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktransfer-v1": {
		post: {
			input: z
				.object({
					body: z.any(),
				})
				.optional(),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktransfer-v1/{id}": {
		get: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: zWarehouseStockTransferDocument,
		},
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				body: z.any(),
			}),
			output: zWarehouseStockTransferDocument,
		},
	},
	"/api/warehouse/stocktransfer-v1/{id}/release": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/stocktransfer-v1/{id}/void": {
		put: {
			input: z.object({
				params: z.object({
					id: z.int(),
				}),
				query: z
					.object({
						force: z.boolean().optional(),
					})
					.optional(),
			}),
			output: z.unknown(),
		},
	},
	"/api/warehouse/tenants-v4": {
		get: {
			input: z.object({}).optional(),
			output: zWarehouseTenantInfo,
		},
	},
} as const;
