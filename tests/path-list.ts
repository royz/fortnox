import z from "zod";
import {
  zFortnoxAbsenceTransactionListItemWrap,
  zFortnoxAbsenceTransactionSingleItemWrap,
  zFortnoxAccountChartWrap,
  zFortnoxAccountListItemWrap,
  zFortnoxAccountSingleItemWrap,
  zFortnoxFolderWrap,
  zFortnoxArticleFileConnectionListItemWrap,
  zFortnoxArticleFileConnectionWrap,
  zFortnoxArticleListItemList,
  zFortnoxArticleWrap,
  zFortnoxArticleUrlConnectionListItemList,
  zFortnoxArticleUrlConnectionWrap,
  zFortnoxAssetFileConnectionResponse,
  zFortnoxListAssetWrap,
  zFortnoxAssetSingle,
  zFortnoxAssetTypeWrapList,
  zFortnoxAssetTypeWrapSingle,
  zFortnoxAttendanceTransactionListItemList,
  zFortnoxAttendanceTransactionWrap,
  zFortnoxCompanyInfoWrap,
  zFortnoxContractAccrualListItemList,
  zFortnoxContractAccrualWrap,
  zFortnoxContractListItemList,
  zFortnoxContractWrap,
  zFortnoxInvoiceWrap,
  zFortnoxContractTemplateListItemList,
  zFortnoxContractTemplateWrap,
  zFortnoxCostCenterList,
  zFortnoxCostCenterWrap,
  zFortnoxCurrencyList,
  zFortnoxCurrencyWrap,
  zFortnoxCustomerReferenceWrap,
  zFortnoxCustomerWrap,
  zFortnoxCustomerListItemList,
  zFortnoxTrustedEmailSenderWrap,
  zFortnoxEmployeeListItemWrap,
  zFortnoxEmployeeWrap,
  zFortnoxEuVatLimitRegulationWrap,
  zFortnoxExpenseListItemWrap,
  zFortnoxExpenseWrap,
  zFortnoxFinancialYearWrapList,
  zFortnoxFinancialYearWrap,
  zFortnoxInvoiceAccrualListItemList,
  zFortnoxInvoiceAccrualWrap,
  zFortnoxInvoicePaymentListItemList,
  zFortnoxInvoicePaymentWrap,
  zFortnoxInvoiceListItemWrap,
  zFortnoxLabelList,
  zFortnoxLabelWrap,
  zFortnoxMeWrap,
  zFortnoxModeOfPaymentList,
  zFortnoxModeOfPaymentWrap,
  zFortnoxInvoiceResponseWrap,
  zFortnoxOfferListItemList,
  zFortnoxOfferWrap,
  zFortnoxOrderWrap,
  zFortnoxOrderListItemList,
  zFortnoxPredefinedAccountList,
  zFortnoxPredefinedAccountWrap,
  zFortnoxPredefinedVoucherSeriesList,
  zFortnoxPredefinedVoucherSeriesWrap,
  zFortnoxPriceListList,
  zFortnoxPriceListWrap,
  zFortnoxPriceWrap,
  zFortnoxPriceListItemList,
  zFortnoxPrintTemplateList,
  zFortnoxProjectListItemList,
  zFortnoxProjectWrap,
  zFortnoxSalaryTransactionListItemList,
  zFortnoxSalaryTransactionWrap,
  zFortnoxScheduleTimeWrap,
  zFortnoxCompanySettingsWrap,
  zFortnoxLockedPeriodWrap,
  zFortnoxSupplierInvoiceAccrualListItemList,
  zFortnoxSupplierInvoiceAccrualWrap,
  zFortnoxSupplierInvoiceExternalUrlConnectionSingle,
  zFortnoxSupplierInvoiceFileConnectionList,
  zFortnoxSupplierInvoiceFileConnectionWrap,
  zFortnoxSupplierInvoicePaymentListItemList,
  zFortnoxSupplierInvoicePaymentWrap,
  zFortnoxSupplierInvoiceListItemWrap,
  zFortnoxSupplierInvoiceWrap,
  zFortnoxSupplierListItemList,
  zFortnoxSupplierWrap,
  zFortnoxTaxReductionListItemList,
  zFortnoxTaxReductionWrap,
  zFortnoxTermsOfDeliveryList,
  zFortnoxTermsOfDeliveryWrap,
  zFortnoxTermsOfPaymentList,
  zFortnoxTermsOfPaymentWrap,
  zFortnoxUnitList,
  zFortnoxUnitWrap,
  zFortnoxVacationDebtBasisWrap,
  zFortnoxVoucherFileConnectionList,
  zFortnoxVoucherFileConnectionWrap,
  zFortnoxVoucherListItemList,
  zFortnoxVoucherWrap,
  zFortnoxVoucherSeriesListItemList,
  zFortnoxVoucherSeriesWrap,
  zFortnoxWayOfDeliveryList,
  zFortnoxWayOfDeliveryWrap,
  zFileattachmentsAttachment,
  zFileattachmentsNumberOfAttachments,
  zIntegrationPartnerAppSalesResponse,
  zWarehouseManualDocument,
  zWarehouseManualInboundDocument,
  zWarehouseManualOutboundDocument,
  zWarehouseCustomDocumentType,
  zWarehouseCustomInboundDocument,
  zWarehouseCustomOutboundDocument,
  zWarehouseIncomingGoods,
  zWarehouseProductionOrder,
  zWarehousePackageItem,
  zWarehousePurchaseOrder,
  zWarehouseReleaseParentOrder,
  zWarehouseDocumentReference,
  zWarehousePurchaseOrderRowNote,
  zWarehousePartialPurchaseOrder,
  zWarehouseStockBalance,
  zWarehouseStockPoint,
  zWarehouseStockLocation,
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
      output: zFortnoxAbsenceTransactionListItemWrap,
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
  "/3/absencetransactions/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: zFortnoxAbsenceTransactionSingleItemWrap,
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: zFortnoxAbsenceTransactionSingleItemWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAbsenceTransactionSingleItemWrap,
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
      output: zFortnoxAbsenceTransactionListItemWrap,
    },
  },
  "/3/accountcharts": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxAccountChartWrap,
    },
  },
  "/3/accounts": {
    get: {
      input: z
        .object({
          query: z
            .object({
              lastmodified: z.string().optional(),
              sru: z.int().optional(),
              sortby: z.enum(["number"]).optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxAccountListItemWrap,
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
      output: zFortnoxAccountSingleItemWrap,
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
      output: zFortnoxAccountSingleItemWrap,
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
      output: zFortnoxFolderWrap,
    },
    post: {
      input: z
        .object({
          query: z
            .object({
              path: z.string().optional(),
              folderid: z.string().optional(),
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
            fileid: z.string().optional(),
          })
          .optional(),
      }),
      output: z.unknown(),
    },
  },
  "/3/articlefileconnections": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxArticleFileConnectionListItemWrap,
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
      output: zFortnoxArticleFileConnectionWrap,
    },
  },
  "/3/articles": {
    get: {
      input: z
        .object({
          query: z
            .object({
              filter: z.enum(["active", "inactive"]).optional(),
              articlenumber: z.string().optional(),
              description: z.string().optional(),
              ean: z.string().optional(),
              suppliernumber: z.string().optional(),
              manufacturer: z.string().optional(),
              manufacturerarticlenumber: z.string().optional(),
              webshop: z.string().optional(),
              lastmodified: z.string().optional(),
              sortby: z
                .enum([
                  "articlenumber",
                  "quantityinstock",
                  "reservedquantity",
                  "stockvalue",
                ])
                .optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxArticleListItemList,
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
      output: zFortnoxArticleWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          ArticleNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxArticleWrap,
    },
  },
  "/3/articleurlconnections": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxArticleUrlConnectionListItemList,
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
      output: zFortnoxArticleUrlConnectionWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxArticleUrlConnectionWrap,
    },
  },
  "/3/assetfileconnections": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxAssetFileConnectionResponse,
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
  "/3/assetfileconnections/{fileId}": {
    delete: {
      input: z.object({
        params: z.object({
          fileId: z.string(),
        }),
      }),
      output: z.unknown(),
    },
  },
  "/3/assets": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxListAssetWrap,
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
  "/3/assets/changeob/{GivenNumber}": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
    },
  },
  "/3/assets/depreciate": {
    post: {
      input: z
        .object({
          body: z.any(),
        })
        .optional(),
      output: z.unknown(),
    },
  },
  "/3/assets/depreciations/{ToDate}": {
    get: {
      input: z.object({
        params: z.object({
          ToDate: z.string(),
        }),
      }),
      output: zFortnoxListAssetWrap,
    },
  },
  "/3/assets/scrap/{GivenNumber}": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
    },
  },
  "/3/assets/sell/{GivenNumber}": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
    },
  },
  "/3/assets/types": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxAssetTypeWrapList,
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
      output: zFortnoxAssetTypeWrapSingle,
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
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetTypeWrapSingle,
    },
  },
  "/3/assets/writedown/{GivenNumber}": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
    },
  },
  "/3/assets/writeup/{GivenNumber}": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
    },
  },
  "/3/assets/{GivenNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.unknown(),
    },
    get: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
      }),
      output: zFortnoxAssetSingle,
    },
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAssetSingle,
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
      output: zFortnoxAttendanceTransactionListItemList,
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
  "/3/attendancetransactions/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: zFortnoxAttendanceTransactionWrap,
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: zFortnoxAttendanceTransactionWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: zFortnoxAttendanceTransactionWrap,
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
      output: zFortnoxAttendanceTransactionListItemList,
    },
  },
  "/3/companyinformation": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxCompanyInfoWrap,
    },
  },
  "/3/contractaccruals": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxContractAccrualListItemList,
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
          DocumentNumber: z.int(),
        }),
      }),
      output: z.unknown(),
    },
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.int(),
        }),
      }),
      output: zFortnoxContractAccrualWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxContractAccrualWrap,
    },
  },
  "/3/contracts": {
    get: {
      input: z
        .object({
          query: z
            .object({
              filter: z.enum(["active", "inactive", "finished"]).optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxContractListItemList,
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
      output: zFortnoxContractWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxContractWrap,
    },
  },
  "/3/contracts/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/contracts/{DocumentNumber}/finish": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxContractWrap,
    },
  },
  "/3/contracts/{DocumentNumber}/increaseinvoicecount": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxContractWrap,
    },
  },
  "/3/contracttemplates": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxContractTemplateListItemList,
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
      output: zFortnoxContractTemplateWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          TemplateNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxContractTemplateWrap,
    },
  },
  "/3/costcenters": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxCostCenterList,
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
      output: zFortnoxCostCenterWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxCostCenterWrap,
    },
  },
  "/3/currencies": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxCurrencyList,
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
      output: zFortnoxCurrencyWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxCurrencyWrap,
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
      output: zFortnoxCustomerReferenceWrap,
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
      output: zFortnoxCustomerReferenceWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          CustomerReferenceRowId: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxCustomerWrap,
    },
  },
  "/3/customers": {
    get: {
      input: z
        .object({
          query: z
            .object({
              filter: z.enum(["active", "inactive"]).optional(),
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
              sortby: z.enum(["customernumber", "name"]).optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxCustomerListItemList,
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
      output: zFortnoxCustomerWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          CustomerNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxCustomerWrap,
    },
  },
  "/3/emailsenders": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxTrustedEmailSenderWrap,
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
      output: zFortnoxEmployeeListItemWrap,
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
  "/3/employees/{EmployeeId}": {
    get: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
        }),
      }),
      output: zFortnoxEmployeeWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxEmployeeWrap,
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
      output: zFortnoxEuVatLimitRegulationWrap,
    },
  },
  "/3/expenses": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxExpenseListItemWrap,
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
  "/3/expenses/{ExpenseCode}": {
    get: {
      input: z.object({
        params: z.object({
          ExpenseCode: z.string(),
        }),
      }),
      output: zFortnoxExpenseWrap,
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
      output: zFortnoxFinancialYearWrapList,
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
      output: zFortnoxFinancialYearWrap,
    },
  },
  "/3/inbox": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxFolderWrap,
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
      output: zFortnoxInvoiceAccrualListItemList,
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
          InvoiceNumber: z.int(),
        }),
      }),
      output: z.unknown(),
    },
    get: {
      input: z.object({
        params: z.object({
          InvoiceNumber: z.int(),
        }),
      }),
      output: zFortnoxInvoiceAccrualWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          InvoiceNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxInvoiceAccrualWrap,
    },
  },
  "/3/invoicepayments": {
    get: {
      input: z
        .object({
          query: z
            .object({
              invoicenumber: z.int().optional(),
              lastmodified: z.string().optional(),
              sortby: z.enum(["paymentdate"]).optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxInvoicePaymentListItemList,
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
      output: zFortnoxInvoicePaymentWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxInvoicePaymentWrap,
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
      output: zFortnoxInvoicePaymentWrap,
    },
  },
  "/3/invoices": {
    get: {
      input: z
        .object({
          query: z
            .object({
              filter: z
                .enum([
                  "cancelled",
                  "fullypaid",
                  "unpaid",
                  "unpaidoverdue",
                  "unbooked",
                ])
                .optional(),
              costcenter: z.string().optional(),
              customername: z.string().optional(),
              customernumber: z.string().optional(),
              label: z.string().optional(),
              documentnumber: z.string().optional(),
              fromdate: z.string().optional(),
              todate: z.string().optional(),
              fromfinalpaydate: z.string().optional(),
              tofinalpaydate: z.string().optional(),
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
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxInvoiceListItemWrap,
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
      output: zFortnoxInvoiceWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/credit": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/einvoice": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/eprint": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/invoices/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
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
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/labels": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxLabelList,
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
      output: zFortnoxLabelWrap,
    },
  },
  "/3/me": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxMeWrap,
    },
  },
  "/3/modesofpayments": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxModeOfPaymentList,
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
      output: zFortnoxModeOfPaymentWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxModeOfPaymentWrap,
    },
  },
  "/3/noxfinansinvoices": {
    post: {
      input: z
        .object({
          body: z.any(),
        })
        .optional(),
      output: z.unknown(),
    },
  },
  "/3/noxfinansinvoices/{Number}": {
    get: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/noxfinansinvoices/{Number}/pause": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/noxfinansinvoices/{Number}/report-payment": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/noxfinansinvoices/{Number}/stop": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/noxfinansinvoices/{Number}/take-fees": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/noxfinansinvoices/{Number}/unpause": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: zFortnoxInvoiceResponseWrap,
    },
  },
  "/3/offers": {
    get: {
      input: z
        .object({
          query: z
            .object({
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
              customername: z.string().optional(),
              customernumber: z.string().optional(),
              documentnumber: z.string().optional(),
              costcenter: z.string().optional(),
              label: z.string().optional(),
              fromdate: z.string().optional(),
              todate: z.string().optional(),
              project: z.string().optional(),
              sent: z.boolean().optional(),
              notcompleted: z.boolean().optional(),
              ourreference: z.string().optional(),
              yourreference: z.string().optional(),
              lastmodified: z.string().optional(),
              sortby: z
                .enum(["customerName", "id", "transactionDate", "total"])
                .optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxOfferListItemList,
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
      output: zFortnoxOfferWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxOfferWrap,
    },
  },
  "/3/offers/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOfferWrap,
    },
  },
  "/3/offers/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOrderWrap,
    },
  },
  "/3/offers/{DocumentNumber}/createorder": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOrderWrap,
    },
  },
  "/3/offers/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOfferWrap,
    },
  },
  "/3/offers/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOfferWrap,
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
              filter: z
                .enum([
                  "cancelled",
                  "expired",
                  "invoicecreated",
                  "invoicenotcreated",
                ])
                .optional(),
              customername: z.string().optional(),
              customernumber: z.string().optional(),
              label: z.string().optional(),
              documentnumber: z.string().optional(),
              externalinvoicereference1: z.string().optional(),
              externalinvoicereference2: z.string().optional(),
              fromdate: z.string().optional(),
              todate: z.string().optional(),
              costcenter: z.string().optional(),
              project: z.string().optional(),
              sent: z.boolean().optional(),
              notcompleted: z.boolean().optional(),
              ourreference: z.string().optional(),
              yourreference: z.string().optional(),
              lastmodified: z.string().optional(),
              ordertype: z.string().optional(),
              sortby: z
                .enum([
                  "customername",
                  "customernumber",
                  "orderdate",
                  "documentnumber",
                  "total",
                ])
                .optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxOrderListItemList,
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
      output: zFortnoxOrderWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxOrderWrap,
    },
  },
  "/3/orders/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOrderWrap,
    },
  },
  "/3/orders/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxInvoiceWrap,
    },
  },
  "/3/orders/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOrderWrap,
    },
  },
  "/3/orders/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: zFortnoxOrderWrap,
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
      output: zFortnoxPredefinedAccountList,
    },
  },
  "/3/predefinedaccounts/{name}": {
    get: {
      input: z.object({
        params: z.object({
          name: z.string(),
        }),
      }),
      output: zFortnoxPredefinedAccountWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          name: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxPredefinedAccountWrap,
    },
  },
  "/3/predefinedvoucherseries": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxPredefinedVoucherSeriesList,
    },
  },
  "/3/predefinedvoucherseries/{Name}": {
    get: {
      input: z.object({
        params: z.object({
          Name: z.string(),
        }),
      }),
      output: zFortnoxPredefinedVoucherSeriesWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Name: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxPredefinedVoucherSeriesWrap,
    },
  },
  "/3/pricelists": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxPriceListList,
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
      output: zFortnoxPriceListWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxPriceListWrap,
    },
  },
  "/3/prices": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxPriceWrap,
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
      }),
      output: zFortnoxPriceListItemList,
    },
  },
  "/3/prices/{PriceList}/{ArticleNumber}": {
    get: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
        }),
      }),
      output: zFortnoxPriceWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxPriceWrap,
    },
  },
  "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}": {
    delete: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
          FromQuantity: z.number(),
        }),
      }),
      output: z.unknown(),
    },
    get: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
          FromQuantity: z.number(),
        }),
      }),
      output: zFortnoxPriceWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
          FromQuantity: z.number(),
        }),
        body: z.any(),
      }),
      output: zFortnoxPriceWrap,
    },
  },
  "/3/printtemplates": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxPrintTemplateList,
    },
  },
  "/3/projects": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxProjectListItemList,
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
      output: zFortnoxProjectWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          ProjectNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxProjectWrap,
    },
  },
  "/3/salarytransactions": {
    get: {
      input: z
        .object({
          query: z
            .object({
              employeeId: z.string().optional(),
              date: z.iso.date().optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxSalaryTransactionListItemList,
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
  "/3/salarytransactions/{SalaryRow}": {
    delete: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
      }),
      output: zFortnoxSalaryTransactionWrap,
    },
    get: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
      }),
      output: zFortnoxSalaryTransactionWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSalaryTransactionWrap,
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
      output: zFortnoxScheduleTimeWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
          Date: z.iso.date(),
        }),
        body: z.any(),
      }),
      output: zFortnoxScheduleTimeWrap,
    },
  },
  "/3/scheduletimes/{EmployeeId}/{Date}/resetday": {
    put: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
          Date: z.iso.date(),
        }),
      }),
      output: zFortnoxScheduleTimeWrap,
    },
  },
  "/3/settings/company": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxCompanySettingsWrap,
    },
  },
  "/3/settings/lockedperiod": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxLockedPeriodWrap,
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
            financialYear: z.int().optional(),
          })
          .optional(),
      }),
      output: z.unknown(),
    },
  },
  "/3/supplierinvoiceaccruals": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxSupplierInvoiceAccrualListItemList,
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
          SupplierInvoiceNumber: z.int(),
        }),
      }),
      output: z.unknown(),
    },
    get: {
      input: z.object({
        params: z.object({
          SupplierInvoiceNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceAccrualWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          SupplierInvoiceNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSupplierInvoiceAccrualWrap,
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
      output: zFortnoxSupplierInvoiceExternalUrlConnectionSingle,
    },
    put: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSupplierInvoiceExternalUrlConnectionSingle,
    },
  },
  "/3/supplierinvoicefileconnections": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxSupplierInvoiceFileConnectionList,
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
      output: zFortnoxSupplierInvoiceFileConnectionWrap,
    },
  },
  "/3/supplierinvoicepayments": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxSupplierInvoicePaymentListItemList,
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
      output: zFortnoxSupplierInvoicePaymentWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSupplierInvoicePaymentWrap,
    },
  },
  "/3/supplierinvoicepayments/{Number}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoicePaymentWrap,
    },
  },
  "/3/supplierinvoices": {
    get: {
      input: z
        .object({
          query: z
            .object({
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
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxSupplierInvoiceListItemWrap,
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
      output: zFortnoxSupplierInvoiceWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/supplierinvoices/{GivenNumber}/approvalbookkeep": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/supplierinvoices/{GivenNumber}/approvalpayment": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/supplierinvoices/{GivenNumber}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/supplierinvoices/{GivenNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/supplierinvoices/{GivenNumber}/credit": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: zFortnoxSupplierInvoiceWrap,
    },
  },
  "/3/suppliers": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxSupplierListItemList,
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
      output: zFortnoxSupplierWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          SupplierNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxSupplierWrap,
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
      output: zFortnoxTaxReductionListItemList,
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
      output: zFortnoxTaxReductionWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
        body: z.any(),
      }),
      output: zFortnoxTaxReductionWrap,
    },
  },
  "/3/termsofdeliveries": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxTermsOfDeliveryList,
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
      output: zFortnoxTermsOfDeliveryWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxTermsOfDeliveryWrap,
    },
  },
  "/3/termsofpayments": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxTermsOfPaymentList,
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
      output: zFortnoxTermsOfPaymentWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxTermsOfPaymentWrap,
    },
  },
  "/3/units": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxUnitList,
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
      output: zFortnoxUnitWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxUnitWrap,
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
      output: zFortnoxVacationDebtBasisWrap,
    },
  },
  "/3/voucherfileconnections": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxVoucherFileConnectionList,
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
      output: zFortnoxVoucherFileConnectionWrap,
    },
  },
  "/3/vouchers": {
    get: {
      input: z
        .object({
          query: z
            .object({
              financialyear: z.int().optional(),
            })
            .optional(),
        })
        .optional(),
      output: zFortnoxVoucherListItemList,
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
      input: z.object({}).optional(),
      output: zFortnoxVoucherListItemList,
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
            financialyear: z.int().optional(),
          })
          .optional(),
      }),
      output: zFortnoxVoucherListItemList,
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
      output: zFortnoxVoucherWrap,
    },
  },
  "/3/voucherseries": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxVoucherSeriesListItemList,
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
      output: zFortnoxVoucherSeriesWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxVoucherSeriesWrap,
    },
  },
  "/3/wayofdeliveries": {
    get: {
      input: z.object({}).optional(),
      output: zFortnoxWayOfDeliveryList,
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
      output: zFortnoxWayOfDeliveryWrap,
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: zFortnoxWayOfDeliveryWrap,
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
