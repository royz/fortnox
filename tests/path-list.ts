import z from "zod";
export const paths = {
  "/3/absencetransactions": {
    get: {
      input: z.object({
        query: z
          .object({
            employeeid: z.string().optional(),
            date: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/absencetransactions") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/absencetransactions") }),
    },
  },
  "/3/absencetransactions/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/absencetransactions/{id}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/absencetransactions/{id}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/absencetransactions/{id}") }),
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
      output: z.object({
        endpoint: z.literal("/3/absencetransactions/{id}/{Date}/{Code}"),
      }),
    },
  },
  "/3/accountcharts": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/accountcharts") }),
    },
  },
  "/3/accounts": {
    get: {
      input: z.object({
        query: z
          .object({
            lastmodified: z.string().optional(),
            sru: z.int().optional(),
            sortby: z.enum(["number"]).optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/accounts") }),
    },
    post: {
      input: z.object({
        query: z
          .object({
            financialyear: z.int().optional(),
          })
          .optional(),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/accounts") }),
    },
  },
  "/3/accounts/{Number}": {
    delete: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/accounts/{Number}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/accounts/{Number}") }),
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
      output: z.object({ endpoint: z.literal("/3/accounts/{Number}") }),
    },
  },
  "/3/archive": {
    delete: {
      input: z.object({
        query: z
          .object({
            path: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/archive") }),
    },
    get: {
      input: z.object({
        query: z
          .object({
            path: z.string().optional(),
            fileid: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/archive") }),
    },
    post: {
      input: z.object({
        query: z
          .object({
            path: z.string().optional(),
            folderid: z.string().optional(),
          })
          .optional(),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/archive") }),
    },
  },
  "/3/archive/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/archive/{id}") }),
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
      output: z.object({ endpoint: z.literal("/3/archive/{id}") }),
    },
  },
  "/3/articlefileconnections": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/articlefileconnections") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/articlefileconnections") }),
    },
  },
  "/3/articlefileconnections/{FileId}": {
    delete: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/articlefileconnections/{FileId}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/articlefileconnections/{FileId}"),
      }),
    },
  },
  "/3/articles": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/articles") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/articles") }),
    },
  },
  "/3/articles/{ArticleNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          ArticleNumber: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/articles/{ArticleNumber}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          ArticleNumber: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/articles/{ArticleNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          ArticleNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/articles/{ArticleNumber}") }),
    },
  },
  "/3/articleurlconnections": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/articleurlconnections") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/articleurlconnections") }),
    },
  },
  "/3/articleurlconnections/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/articleurlconnections/{id}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/articleurlconnections/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/articleurlconnections/{id}"),
      }),
    },
  },
  "/3/assetfileconnections": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/assetfileconnections") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assetfileconnections") }),
    },
  },
  "/3/assetfileconnections/{fileId}": {
    delete: {
      input: z.object({
        params: z.object({
          fileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/assetfileconnections/{fileId}"),
      }),
    },
  },
  "/3/assets": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/assets") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assets") }),
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
      output: z.object({
        endpoint: z.literal("/3/assets/changeob/{GivenNumber}"),
      }),
    },
  },
  "/3/assets/depreciate": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/depreciate") }),
    },
  },
  "/3/assets/depreciations/{ToDate}": {
    get: {
      input: z.object({
        params: z.object({
          ToDate: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/assets/depreciations/{ToDate}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/assets/scrap/{GivenNumber}"),
      }),
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
      output: z.object({ endpoint: z.literal("/3/assets/sell/{GivenNumber}") }),
    },
  },
  "/3/assets/types": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/assets/types") }),
    },
  },
  "/3/assets/types/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/types/{id}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/types/{id}") }),
    },
    post: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/types/{id}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/types/{id}") }),
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
      output: z.object({
        endpoint: z.literal("/3/assets/writedown/{GivenNumber}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/assets/writeup/{GivenNumber}"),
      }),
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
      output: z.object({ endpoint: z.literal("/3/assets/{GivenNumber}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/{GivenNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/assets/{GivenNumber}") }),
    },
  },
  "/3/attendancetransactions": {
    get: {
      input: z.object({
        query: z
          .object({
            employeeid: z.string().optional(),
            date: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/attendancetransactions") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/attendancetransactions") }),
    },
  },
  "/3/attendancetransactions/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/attendancetransactions/{id}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/attendancetransactions/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/attendancetransactions/{id}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/attendancetransactions/{id}/{Date}/{Code}"),
      }),
    },
  },
  "/3/companyinformation": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/companyinformation") }),
    },
  },
  "/3/contractaccruals": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/contractaccruals") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/contractaccruals") }),
    },
  },
  "/3/contractaccruals/{DocumentNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contractaccruals/{DocumentNumber}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contractaccruals/{DocumentNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/contractaccruals/{DocumentNumber}"),
      }),
    },
  },
  "/3/contracts": {
    get: {
      input: z.object({
        query: z
          .object({
            filter: z.enum(["active", "inactive", "finished"]).optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/contracts") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/contracts") }),
    },
  },
  "/3/contracts/{DocumentNumber}": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracts/{DocumentNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracts/{DocumentNumber}"),
      }),
    },
  },
  "/3/contracts/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracts/{DocumentNumber}/createinvoice"),
      }),
    },
  },
  "/3/contracts/{DocumentNumber}/finish": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracts/{DocumentNumber}/finish"),
      }),
    },
  },
  "/3/contracts/{DocumentNumber}/increaseinvoicecount": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/contracts/{DocumentNumber}/increaseinvoicecount",
        ),
      }),
    },
  },
  "/3/contracttemplates": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/contracttemplates") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/contracttemplates") }),
    },
  },
  "/3/contracttemplates/{TemplateNumber}": {
    get: {
      input: z.object({
        params: z.object({
          TemplateNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracttemplates/{TemplateNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          TemplateNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/contracttemplates/{TemplateNumber}"),
      }),
    },
  },
  "/3/costcenters": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/costcenters") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/costcenters") }),
    },
  },
  "/3/costcenters/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/costcenters/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/costcenters/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/costcenters/{Code}") }),
    },
  },
  "/3/currencies": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/currencies") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/currencies") }),
    },
  },
  "/3/currencies/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/currencies/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/currencies/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/currencies/{Code}") }),
    },
  },
  "/3/customerreferences": {
    get: {
      input: z.object({
        query: z
          .object({
            customer: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/customerreferences") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/customerreferences") }),
    },
  },
  "/3/customerreferences/{CustomerReferenceRowId}": {
    delete: {
      input: z.object({
        params: z.object({
          CustomerReferenceRowId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/customerreferences/{CustomerReferenceRowId}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          CustomerReferenceRowId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/customerreferences/{CustomerReferenceRowId}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          CustomerReferenceRowId: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/customerreferences/{CustomerReferenceRowId}"),
      }),
    },
  },
  "/3/customers": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/customers") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/customers") }),
    },
  },
  "/3/customers/{CustomerNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          CustomerNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/customers/{CustomerNumber}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          CustomerNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/customers/{CustomerNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          CustomerNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/customers/{CustomerNumber}"),
      }),
    },
  },
  "/3/emailsenders": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/emailsenders") }),
    },
  },
  "/3/emailsenders/trusted": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/emailsenders/trusted") }),
    },
  },
  "/3/emailsenders/trusted/{Id}": {
    delete: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/emailsenders/trusted/{Id}") }),
    },
  },
  "/3/employees": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/employees") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/employees") }),
    },
  },
  "/3/employees/{EmployeeId}": {
    get: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/employees/{EmployeeId}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/employees/{EmployeeId}") }),
    },
  },
  "/3/euvatlimitregulation": {
    get: {
      input: z.object({
        query: z
          .object({
            year: z.int().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/euvatlimitregulation") }),
    },
  },
  "/3/expenses": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/expenses") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/expenses") }),
    },
  },
  "/3/expenses/{ExpenseCode}": {
    get: {
      input: z.object({
        params: z.object({
          ExpenseCode: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/expenses/{ExpenseCode}") }),
    },
  },
  "/3/financialyears": {
    get: {
      input: z.object({
        query: z
          .object({
            Date: z.iso.date().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/financialyears") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/financialyears") }),
    },
  },
  "/3/financialyears/{Id}": {
    get: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/financialyears/{Id}") }),
    },
  },
  "/3/inbox": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/inbox") }),
    },
    post: {
      input: z.object({
        query: z
          .object({
            folderId: z.string().optional(),
            path: z.string().optional(),
          })
          .optional(),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/inbox") }),
    },
  },
  "/3/inbox/{Id}": {
    delete: {
      input: z.object({
        params: z.object({
          Id: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/inbox/{Id}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Id: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/inbox/{Id}") }),
    },
  },
  "/3/invoiceaccruals": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/invoiceaccruals") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoiceaccruals") }),
    },
  },
  "/3/invoiceaccruals/{InvoiceNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          InvoiceNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoiceaccruals/{InvoiceNumber}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          InvoiceNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoiceaccruals/{InvoiceNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          InvoiceNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoiceaccruals/{InvoiceNumber}"),
      }),
    },
  },
  "/3/invoicepayments": {
    get: {
      input: z.object({
        query: z
          .object({
            invoicenumber: z.int().optional(),
            lastmodified: z.string().optional(),
            sortby: z.enum(["paymentdate"]).optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoicepayments") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoicepayments") }),
    },
  },
  "/3/invoicepayments/{Number}": {
    delete: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/invoicepayments/{Number}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/invoicepayments/{Number}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoicepayments/{Number}") }),
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
      output: z.object({
        endpoint: z.literal("/3/invoicepayments/{Number}/bookkeep"),
      }),
    },
  },
  "/3/invoices": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/invoices") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoices") }),
    },
  },
  "/3/invoices/{DocumentNumber}": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/invoices/{DocumentNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/invoices/{DocumentNumber}") }),
    },
  },
  "/3/invoices/{DocumentNumber}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/bookkeep"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/cancel"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/credit": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/credit"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/einvoice": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/einvoice"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/email"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/eprint": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/eprint"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/externalprint"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/preview": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/preview"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/print": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/print"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/printreminder": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/printreminder"),
      }),
    },
  },
  "/3/invoices/{DocumentNumber}/warehouseready": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/invoices/{DocumentNumber}/warehouseready"),
      }),
    },
  },
  "/3/labels": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/labels") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/labels") }),
    },
  },
  "/3/labels/{Id}": {
    delete: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/labels/{Id}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/labels/{Id}") }),
    },
  },
  "/3/me": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/me") }),
    },
  },
  "/3/modesofpayments": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/modesofpayments") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/modesofpayments") }),
    },
  },
  "/3/modesofpayments/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/modesofpayments/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/modesofpayments/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/modesofpayments/{Code}") }),
    },
  },
  "/3/noxfinansinvoices": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/noxfinansinvoices") }),
    },
  },
  "/3/noxfinansinvoices/{Number}": {
    get: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}/pause"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}/report-payment"),
      }),
    },
  },
  "/3/noxfinansinvoices/{Number}/stop": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}/stop"),
      }),
    },
  },
  "/3/noxfinansinvoices/{Number}/take-fees": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}/take-fees"),
      }),
    },
  },
  "/3/noxfinansinvoices/{Number}/unpause": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/noxfinansinvoices/{Number}/unpause"),
      }),
    },
  },
  "/3/offers": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/offers") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/offers") }),
    },
  },
  "/3/offers/{DocumentNumber}": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/offers/{DocumentNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/offers/{DocumentNumber}") }),
    },
  },
  "/3/offers/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/cancel"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/createinvoice"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/createorder": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/createorder"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/email"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/externalprint"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/preview": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/preview"),
      }),
    },
  },
  "/3/offers/{DocumentNumber}/print": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/offers/{DocumentNumber}/print"),
      }),
    },
  },
  "/3/orders": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/orders") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/orders") }),
    },
  },
  "/3/orders/{DocumentNumber}": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/orders/{DocumentNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/orders/{DocumentNumber}") }),
    },
  },
  "/3/orders/{DocumentNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/cancel"),
      }),
    },
  },
  "/3/orders/{DocumentNumber}/createinvoice": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/createinvoice"),
      }),
    },
  },
  "/3/orders/{DocumentNumber}/email": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/email"),
      }),
    },
  },
  "/3/orders/{DocumentNumber}/externalprint": {
    put: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/externalprint"),
      }),
    },
  },
  "/3/orders/{DocumentNumber}/preview": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/preview"),
      }),
    },
  },
  "/3/orders/{DocumentNumber}/print": {
    get: {
      input: z.object({
        params: z.object({
          DocumentNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/orders/{DocumentNumber}/print"),
      }),
    },
  },
  "/3/predefinedaccounts": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/predefinedaccounts") }),
    },
  },
  "/3/predefinedaccounts/{name}": {
    get: {
      input: z.object({
        params: z.object({
          name: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/predefinedaccounts/{name}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          name: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/predefinedaccounts/{name}") }),
    },
  },
  "/3/predefinedvoucherseries": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/predefinedvoucherseries") }),
    },
  },
  "/3/predefinedvoucherseries/{Name}": {
    get: {
      input: z.object({
        params: z.object({
          Name: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/predefinedvoucherseries/{Name}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          Name: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/predefinedvoucherseries/{Name}"),
      }),
    },
  },
  "/3/pricelists": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/pricelists") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/pricelists") }),
    },
  },
  "/3/pricelists/{Code}": {
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/pricelists/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/pricelists/{Code}") }),
    },
  },
  "/3/prices": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/prices") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/prices") }),
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
      output: z.object({
        endpoint: z.literal("/3/prices/sublist/{PriceList}/{ArticleNumber}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/prices/{PriceList}/{ArticleNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/prices/{PriceList}/{ArticleNumber}"),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
        ),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          PriceList: z.string(),
          ArticleNumber: z.string(),
          FromQuantity: z.number(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}",
        ),
      }),
    },
  },
  "/3/printtemplates": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/printtemplates") }),
    },
  },
  "/3/projects": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/projects") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/projects") }),
    },
  },
  "/3/projects/{ProjectNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          ProjectNumber: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/projects/{ProjectNumber}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          ProjectNumber: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/projects/{ProjectNumber}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          ProjectNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/projects/{ProjectNumber}") }),
    },
  },
  "/3/salarytransactions": {
    get: {
      input: z.object({
        query: z
          .object({
            employeeId: z.string().optional(),
            date: z.iso.date().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/salarytransactions") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/salarytransactions") }),
    },
  },
  "/3/salarytransactions/{SalaryRow}": {
    delete: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/salarytransactions/{SalaryRow}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/salarytransactions/{SalaryRow}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          SalaryRow: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/salarytransactions/{SalaryRow}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/scheduletimes/{EmployeeId}/{Date}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          EmployeeId: z.string(),
          Date: z.iso.date(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/scheduletimes/{EmployeeId}/{Date}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/scheduletimes/{EmployeeId}/{Date}/resetday"),
      }),
    },
  },
  "/3/settings/company": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/settings/company") }),
    },
  },
  "/3/settings/lockedperiod": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/settings/lockedperiod") }),
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
      output: z.object({ endpoint: z.literal("/3/sie/{Type}") }),
    },
  },
  "/3/supplierinvoiceaccruals": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/supplierinvoiceaccruals") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/supplierinvoiceaccruals") }),
    },
  },
  "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}": {
    delete: {
      input: z.object({
        params: z.object({
          SupplierInvoiceNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
        ),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          SupplierInvoiceNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          SupplierInvoiceNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}",
        ),
      }),
    },
  },
  "/3/supplierinvoiceexternalurlconnections": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoiceexternalurlconnections"),
      }),
    },
  },
  "/3/supplierinvoiceexternalurlconnections/{Id}": {
    delete: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoiceexternalurlconnections/{Id}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoiceexternalurlconnections/{Id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoiceexternalurlconnections/{Id}"),
      }),
    },
  },
  "/3/supplierinvoicefileconnections": {
    get: {
      input: z.object({}),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicefileconnections"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicefileconnections"),
      }),
    },
  },
  "/3/supplierinvoicefileconnections/{FileId}": {
    delete: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicefileconnections/{FileId}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicefileconnections/{FileId}"),
      }),
    },
  },
  "/3/supplierinvoicepayments": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/supplierinvoicepayments") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/supplierinvoicepayments") }),
    },
  },
  "/3/supplierinvoicepayments/{Number}": {
    delete: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicepayments/{Number}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicepayments/{Number}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicepayments/{Number}"),
      }),
    },
  },
  "/3/supplierinvoicepayments/{Number}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          Number: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoicepayments/{Number}/bookkeep"),
      }),
    },
  },
  "/3/supplierinvoices": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/3/supplierinvoices") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/supplierinvoices") }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}": {
    get: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoices/{GivenNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoices/{GivenNumber}"),
      }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}/approvalbookkeep": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/supplierinvoices/{GivenNumber}/approvalbookkeep",
        ),
      }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}/approvalpayment": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/3/supplierinvoices/{GivenNumber}/approvalpayment",
        ),
      }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}/bookkeep": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoices/{GivenNumber}/bookkeep"),
      }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}/cancel": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoices/{GivenNumber}/cancel"),
      }),
    },
  },
  "/3/supplierinvoices/{GivenNumber}/credit": {
    put: {
      input: z.object({
        params: z.object({
          GivenNumber: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/supplierinvoices/{GivenNumber}/credit"),
      }),
    },
  },
  "/3/suppliers": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/suppliers") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/suppliers") }),
    },
  },
  "/3/suppliers/{SupplierNumber}": {
    get: {
      input: z.object({
        params: z.object({
          SupplierNumber: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/suppliers/{SupplierNumber}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          SupplierNumber: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/3/suppliers/{SupplierNumber}"),
      }),
    },
  },
  "/3/taxreductions": {
    get: {
      input: z.object({
        query: z
          .object({
            filter: z.enum(["invoices", "orders", "offers"]).optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/taxreductions") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/taxreductions") }),
    },
  },
  "/3/taxreductions/{Id}": {
    delete: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/taxreductions/{Id}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/taxreductions/{Id}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/taxreductions/{Id}") }),
    },
  },
  "/3/termsofdeliveries": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/termsofdeliveries") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofdeliveries") }),
    },
  },
  "/3/termsofdeliveries/{Code}": {
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofdeliveries/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofdeliveries/{Code}") }),
    },
  },
  "/3/termsofpayments": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/termsofpayments") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofpayments") }),
    },
  },
  "/3/termsofpayments/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofpayments/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofpayments/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/termsofpayments/{Code}") }),
    },
  },
  "/3/units": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/units") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/units") }),
    },
  },
  "/3/units/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/units/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/units/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/units/{Code}") }),
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
      output: z.object({
        endpoint: z.literal("/3/vacationdebtbasis/{Year}/{Month}"),
      }),
    },
  },
  "/3/voucherfileconnections": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/voucherfileconnections") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/voucherfileconnections") }),
    },
  },
  "/3/voucherfileconnections/{FileId}": {
    delete: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/voucherfileconnections/{FileId}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          FileId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/3/voucherfileconnections/{FileId}"),
      }),
    },
  },
  "/3/vouchers": {
    get: {
      input: z.object({
        query: z
          .object({
            financialyear: z.int().optional(),
          })
          .optional(),
      }),
      output: z.object({ endpoint: z.literal("/3/vouchers") }),
    },
    post: {
      input: z.object({
        query: z
          .object({
            financialyear: z.int().optional(),
          })
          .optional(),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/vouchers") }),
    },
  },
  "/3/vouchers/sublist": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/vouchers/sublist") }),
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
      output: z.object({
        endpoint: z.literal("/3/vouchers/sublist/{VoucherSeries}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/3/vouchers/{VoucherSeries}/{VoucherNumber}"),
      }),
    },
  },
  "/3/voucherseries": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/voucherseries") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/voucherseries") }),
    },
  },
  "/3/voucherseries/{Code}": {
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/voucherseries/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/voucherseries/{Code}") }),
    },
  },
  "/3/wayofdeliveries": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/3/wayofdeliveries") }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/wayofdeliveries") }),
    },
  },
  "/3/wayofdeliveries/{Code}": {
    delete: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/wayofdeliveries/{Code}") }),
    },
    get: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
      }),
      output: z.object({ endpoint: z.literal("/3/wayofdeliveries/{Code}") }),
    },
    put: {
      input: z.object({
        params: z.object({
          Code: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({ endpoint: z.literal("/3/wayofdeliveries/{Code}") }),
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
      output: z.object({
        endpoint: z.literal("/api/fileattachments/attachments-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/fileattachments/attachments-v1"),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/fileattachments/attachments-v1/numberofattachments",
        ),
      }),
    },
  },
  "/api/fileattachments/attachments-v1/validateincludedonsend": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/fileattachments/attachments-v1/validateincludedonsend",
        ),
      }),
    },
  },
  "/api/fileattachments/attachments-v1/{attachmentId}": {
    delete: {
      input: z.object({
        params: z.object({
          attachmentId: z.uuid(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/fileattachments/attachments-v1/{attachmentId}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          attachmentId: z.uuid(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/fileattachments/attachments-v1/{attachmentId}",
        ),
      }),
    },
  },
  "/api/integration-developer/ratings-v1": {
    get: {
      input: z.object({}),
      output: z.object({
        endpoint: z.literal("/api/integration-developer/ratings-v1"),
      }),
    },
  },
  "/api/integration-developer/sales-v1/{integrationId}": {
    get: {
      input: z.object({
        params: z.object({
          integrationId: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/integration-developer/sales-v1/{integrationId}",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/integration-developer/users/users-v1/{integrationId}/{tenantId}",
        ),
      }),
    },
  },
  "/api/integration-partner/apps/sales-v1/{appId}": {
    get: {
      input: z.object({
        params: z.object({
          appId: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/integration-partner/apps/sales-v1/{appId}"),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/integration-partner/apps/sales-v1/{appId}/{tenantId}",
        ),
      }),
    },
  },
  "/api/time/articles-v1": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/api/time/articles-v1") }),
    },
  },
  "/api/time/registrations-v2": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/api/time/registrations-v2") }),
    },
  },
  "/api/warehouse/deliveries-v1": {
    get: {
      input: z.object({
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
      }),
      output: z.object({ endpoint: z.literal("/api/warehouse/deliveries-v1") }),
    },
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/deliveries-v1/inbounddeliveries"),
      }),
    },
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries/{id}": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
        ),
      }),
    },
    patch: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/inbounddeliveries/{id}",
        ),
      }),
    },
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void",
        ),
      }),
    },
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/deliveries-v1/outbounddeliveries"),
      }),
    },
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries/{id}": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
        ),
      }),
    },
    patch: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/outbounddeliveries/{id}",
        ),
      }),
    },
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void",
        ),
      }),
    },
  },
  "/api/warehouse/documentdeliveries/custom/documenttypes-v1": {
    get: {
      input: z.object({}),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/documenttypes-v1",
        ),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/documenttypes-v1",
        ),
      }),
    },
  },
  "/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}": {
    get: {
      input: z.object({
        params: z.object({
          type: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          type: z.string(),
          id: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}",
        ),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          type: z.string(),
          id: z.string(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void",
        ),
      }),
    },
  },
  "/api/warehouse/incominggoods-v1": {
    get: {
      input: z.object({
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
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}"),
      }),
    },
    patch: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}/completed"),
      }),
    },
  },
  "/api/warehouse/incominggoods-v1/{id}/release": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}/release"),
      }),
    },
  },
  "/api/warehouse/incominggoods-v1/{id}/void": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/incominggoods-v1/{id}/void"),
      }),
    },
  },
  "/api/warehouse/productionorders-v1": {
    get: {
      input: z.object({
        query: z
          .object({
            state: z
              .enum(["all", "incomplete", "delayed", "completed", "voided"])
              .optional(),
            itemId: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1"),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/productionorders-v1/billofmaterials/{itemId}",
        ),
      }),
    },
  },
  "/api/warehouse/productionorders-v1/release/{id}": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1/release/{id}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1/void/{id}"),
      }),
    },
  },
  "/api/warehouse/productionorders-v1/{id}": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1/{id}"),
      }),
    },
    patch: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/productionorders-v1/{id}"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1": {
    get: {
      input: z.object({
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
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/csv": {
    get: {
      input: z.object({
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
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/csv"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/response": {
    put: {
      input: z.object({
        query: z
          .object({
            ids: z.array(z.int()).optional(),
          })
          .optional(),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/response"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/sendpurchaseorders": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/purchaseorders-v1/sendpurchaseorders",
        ),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/{id}/complete": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/complete"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete",
        ),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/{id}/matches": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/matches"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/{id}/notes": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/notes"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/partial"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/response"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/send"),
      }),
    },
  },
  "/api/warehouse/purchaseorders-v1/{id}/void": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/purchaseorders-v1/{id}/void"),
      }),
    },
  },
  "/api/warehouse/status-v1/stockbalance": {
    get: {
      input: z.object({
        query: z
          .object({
            itemIds: z.array(z.string()).optional(),
            stockPointCodes: z.array(z.string()).optional(),
          })
          .optional(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/status-v1/stockbalance"),
      }),
    },
  },
  "/api/warehouse/stockpoints-v1": {
    get: {
      input: z.object({
        query: z
          .object({
            q: z.string().optional(),
            state: z.enum(["ALL", "ACTIVE", "INACTIVE"]).optional(),
          })
          .optional(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1"),
      }),
    },
  },
  "/api/warehouse/stockpoints-v1/multi": {
    get: {
      input: z.object({
        query: z
          .object({
            ids: z.array(z.uuid()).optional(),
            state: z.enum(["ALL", "ACTIVE", "INACTIVE"]).optional(),
          })
          .optional(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1/multi"),
      }),
    },
  },
  "/api/warehouse/stockpoints-v1/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1/{id}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.string(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1/{id}"),
      }),
    },
    post: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.uuid(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stockpoints-v1/{id}"),
      }),
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
      output: z.object({
        endpoint: z.literal(
          "/api/warehouse/stockpoints-v1/{id}/stocklocations",
        ),
      }),
    },
  },
  "/api/warehouse/stocktaking-v1": {
    get: {
      input: z.object({
        query: z
          .object({
            state: z
              .enum(["all", "planning", "started", "completed", "voided"])
              .optional(),
            itemId: z.string().optional(),
          })
          .optional(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1"),
      }),
    },
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1"),
      }),
    },
  },
  "/api/warehouse/stocktaking-v1/{id}": {
    delete: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}"),
      }),
    },
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/addrows"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/candidates"),
      }),
    },
  },
  "/api/warehouse/stocktaking-v1/{id}/release": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/release"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/rows"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/rows"),
      }),
    },
    post: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/rows"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/rows/{rowId}"),
      }),
    },
  },
  "/api/warehouse/stocktaking-v1/{id}/void": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktaking-v1/{id}/void"),
      }),
    },
  },
  "/api/warehouse/stocktransfer-v1": {
    post: {
      input: z.object({
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktransfer-v1"),
      }),
    },
  },
  "/api/warehouse/stocktransfer-v1/{id}": {
    get: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktransfer-v1/{id}"),
      }),
    },
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
        body: z.any(),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktransfer-v1/{id}"),
      }),
    },
  },
  "/api/warehouse/stocktransfer-v1/{id}/release": {
    put: {
      input: z.object({
        params: z.object({
          id: z.int(),
        }),
      }),
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktransfer-v1/{id}/release"),
      }),
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
      output: z.object({
        endpoint: z.literal("/api/warehouse/stocktransfer-v1/{id}/void"),
      }),
    },
  },
  "/api/warehouse/tenants-v4": {
    get: {
      input: z.object({}),
      output: z.object({ endpoint: z.literal("/api/warehouse/tenants-v4") }),
    },
  },
} as const;
