import z from "zod";
export const paths = {
  "/3/absencetransactions": {
    "get": z.object({
    query: z.object({
  employeeid: z.string().optional(),
  date: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/absencetransactions/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.uuid(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.uuid(),
}),
}),
    "put": z.object({
    params: z.object({
  id: z.uuid(),
}),
  body: z.any(),
})
  },
  "/3/absencetransactions/{id}/{Date}/{Code}": {
    "get": z.object({
    params: z.object({
  id: z.string(),
  Date: z.iso.date(),
  Code: z.enum(["ASK","FPE","FRA","HAV","KOM","MIL","NAR","OS1","OS2","OS3","OS4","OS5","PAP","PEM","PER","SEM","SJK","SMB","SVE","TJL","UTB","VAB"]),
}),
})
  },
  "/3/accountcharts": {
    "get": z.object({
})
  },
  "/3/accounts": {
    "get": z.object({
    query: z.object({
  lastmodified: z.string().optional(),
  sru: z.int().optional(),
  sortby: z.enum(["number"]).optional(),
}).optional(),
}),
    "post": z.object({
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
  body: z.any(),
})
  },
  "/3/accounts/{Number}": {
    "delete": z.object({
    params: z.object({
  Number: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  Number: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  Number: z.int(),
}),
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
  body: z.any(),
})
  },
  "/3/archive": {
    "delete": z.object({
    query: z.object({
  path: z.string().optional(),
}).optional(),
}),
    "get": z.object({
    query: z.object({
  path: z.string().optional(),
  fileid: z.string().optional(),
}).optional(),
}),
    "post": z.object({
    query: z.object({
  path: z.string().optional(),
  folderid: z.string().optional(),
}).optional(),
  body: z.any(),
})
  },
  "/3/archive/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.string(),
}),
    query: z.object({
  fileid: z.string().optional(),
}).optional(),
})
  },
  "/3/articlefileconnections": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/articlefileconnections/{FileId}": {
    "delete": z.object({
    params: z.object({
  FileId: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  FileId: z.string(),
}),
})
  },
  "/3/articles": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["active","inactive"]).optional(),
  articlenumber: z.string().optional(),
  description: z.string().optional(),
  ean: z.string().optional(),
  suppliernumber: z.string().optional(),
  manufacturer: z.string().optional(),
  manufacturerarticlenumber: z.string().optional(),
  webshop: z.string().optional(),
  lastmodified: z.string().optional(),
  sortby: z.enum(["articlenumber","quantityinstock","reservedquantity","stockvalue"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/articles/{ArticleNumber}": {
    "delete": z.object({
    params: z.object({
  ArticleNumber: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  ArticleNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  ArticleNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/articleurlconnections": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/articleurlconnections/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  id: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assetfileconnections": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/assetfileconnections/{fileId}": {
    "delete": z.object({
    params: z.object({
  fileId: z.string(),
}),
})
  },
  "/3/assets": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/assets/changeob/{GivenNumber}": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assets/depreciate": {
    "post": z.object({
  body: z.any(),
})
  },
  "/3/assets/depreciations/{ToDate}": {
    "get": z.object({
    params: z.object({
  ToDate: z.string(),
}),
})
  },
  "/3/assets/scrap/{GivenNumber}": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assets/sell/{GivenNumber}": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assets/types": {
    "get": z.object({
})
  },
  "/3/assets/types/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "post": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/3/assets/writedown/{GivenNumber}": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assets/writeup/{GivenNumber}": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/assets/{GivenNumber}": {
    "delete": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
}),
    "get": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  GivenNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/attendancetransactions": {
    "get": z.object({
    query: z.object({
  employeeid: z.string().optional(),
  date: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/attendancetransactions/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.uuid(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.uuid(),
}),
}),
    "put": z.object({
    params: z.object({
  id: z.uuid(),
}),
  body: z.any(),
})
  },
  "/3/attendancetransactions/{id}/{Date}/{Code}": {
    "get": z.object({
    params: z.object({
  id: z.string(),
  Date: z.iso.date(),
  Code: z.enum(["ARB","BE2","BER","FLX","HLG","JO2","JOR","MER","OB1","OB2","OB3","OB4","OB5","OK0","OK1","OK2","OK3","OK4","OK5","OT1","OT2","OT3","OT4","OT5","RES","TID"]),
}),
})
  },
  "/3/companyinformation": {
    "get": z.object({
})
  },
  "/3/contractaccruals": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/contractaccruals/{DocumentNumber}": {
    "delete": z.object({
    params: z.object({
  DocumentNumber: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  DocumentNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  DocumentNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/contracts": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["active","inactive","finished"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/contracts/{DocumentNumber}": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/contracts/{DocumentNumber}/createinvoice": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/contracts/{DocumentNumber}/finish": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/contracts/{DocumentNumber}/increaseinvoicecount": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/contracttemplates": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/contracttemplates/{TemplateNumber}": {
    "get": z.object({
    params: z.object({
  TemplateNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  TemplateNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/costcenters": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/costcenters/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/currencies": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/currencies/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/customerreferences": {
    "get": z.object({
    query: z.object({
  customer: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/customerreferences/{CustomerReferenceRowId}": {
    "delete": z.object({
    params: z.object({
  CustomerReferenceRowId: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  CustomerReferenceRowId: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  CustomerReferenceRowId: z.string(),
}),
  body: z.any(),
})
  },
  "/3/customers": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["active","inactive"]).optional(),
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
  sortby: z.enum(["customernumber","name"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/customers/{CustomerNumber}": {
    "delete": z.object({
    params: z.object({
  CustomerNumber: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  CustomerNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  CustomerNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/emailsenders": {
    "get": z.object({
})
  },
  "/3/emailsenders/trusted": {
    "post": z.object({
  body: z.any(),
})
  },
  "/3/emailsenders/trusted/{Id}": {
    "delete": z.object({
    params: z.object({
  Id: z.int(),
}),
})
  },
  "/3/employees": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/employees/{EmployeeId}": {
    "get": z.object({
    params: z.object({
  EmployeeId: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  EmployeeId: z.string(),
}),
  body: z.any(),
})
  },
  "/3/euvatlimitregulation": {
    "get": z.object({
    query: z.object({
  year: z.int().optional(),
}).optional(),
})
  },
  "/3/expenses": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/expenses/{ExpenseCode}": {
    "get": z.object({
    params: z.object({
  ExpenseCode: z.string(),
}),
})
  },
  "/3/financialyears": {
    "get": z.object({
    query: z.object({
  Date: z.iso.date().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/financialyears/{Id}": {
    "get": z.object({
    params: z.object({
  Id: z.int(),
}),
})
  },
  "/3/inbox": {
    "get": z.object({
}),
    "post": z.object({
    query: z.object({
  folderId: z.string().optional(),
  path: z.string().optional(),
}).optional(),
  body: z.any(),
})
  },
  "/3/inbox/{Id}": {
    "delete": z.object({
    params: z.object({
  Id: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Id: z.string(),
}),
})
  },
  "/3/invoiceaccruals": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/invoiceaccruals/{InvoiceNumber}": {
    "delete": z.object({
    params: z.object({
  InvoiceNumber: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  InvoiceNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  InvoiceNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/invoicepayments": {
    "get": z.object({
    query: z.object({
  invoicenumber: z.int().optional(),
  lastmodified: z.string().optional(),
  sortby: z.enum(["paymentdate"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/invoicepayments/{Number}": {
    "delete": z.object({
    params: z.object({
  Number: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Number: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
  body: z.any(),
})
  },
  "/3/invoicepayments/{Number}/bookkeep": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
  body: z.any(),
})
  },
  "/3/invoices": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["cancelled","fullypaid","unpaid","unpaidoverdue","unbooked"]).optional(),
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
  sortby: z.enum(["customername","customernumber","documentnumber","invoicedate","ocr","total"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/invoices/{DocumentNumber}": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/invoices/{DocumentNumber}/bookkeep": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/cancel": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/credit": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/einvoice": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/email": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/eprint": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/externalprint": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/preview": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/print": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/printreminder": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/invoices/{DocumentNumber}/warehouseready": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/labels": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/labels/{Id}": {
    "delete": z.object({
    params: z.object({
  Id: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  Id: z.int(),
}),
  body: z.any(),
})
  },
  "/3/me": {
    "get": z.object({
})
  },
  "/3/modesofpayments": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/modesofpayments/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/noxfinansinvoices": {
    "post": z.object({
  body: z.any(),
})
  },
  "/3/noxfinansinvoices/{Number}": {
    "get": z.object({
    params: z.object({
  Number: z.string(),
}),
})
  },
  "/3/noxfinansinvoices/{Number}/pause": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
  body: z.any(),
})
  },
  "/3/noxfinansinvoices/{Number}/report-payment": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
  body: z.any(),
})
  },
  "/3/noxfinansinvoices/{Number}/stop": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
})
  },
  "/3/noxfinansinvoices/{Number}/take-fees": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
})
  },
  "/3/noxfinansinvoices/{Number}/unpause": {
    "put": z.object({
    params: z.object({
  Number: z.string(),
}),
})
  },
  "/3/offers": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["cancelled","expired","completed","notcompleted","ordercreated","ordernotcreated"]).optional(),
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
  sortby: z.enum(["customerName","id","transactionDate","total"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/offers/{DocumentNumber}": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/offers/{DocumentNumber}/cancel": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/createinvoice": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/createorder": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/email": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/externalprint": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/preview": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/offers/{DocumentNumber}/print": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["cancelled","expired","invoicecreated","invoicenotcreated"]).optional(),
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
  sortby: z.enum(["customername","customernumber","orderdate","documentnumber","total"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/orders/{DocumentNumber}": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/orders/{DocumentNumber}/cancel": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders/{DocumentNumber}/createinvoice": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders/{DocumentNumber}/email": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders/{DocumentNumber}/externalprint": {
    "put": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders/{DocumentNumber}/preview": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/orders/{DocumentNumber}/print": {
    "get": z.object({
    params: z.object({
  DocumentNumber: z.string(),
}),
})
  },
  "/3/predefinedaccounts": {
    "get": z.object({
})
  },
  "/3/predefinedaccounts/{name}": {
    "get": z.object({
    params: z.object({
  name: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  name: z.string(),
}),
  body: z.any(),
})
  },
  "/3/predefinedvoucherseries": {
    "get": z.object({
})
  },
  "/3/predefinedvoucherseries/{Name}": {
    "get": z.object({
    params: z.object({
  Name: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Name: z.string(),
}),
  body: z.any(),
})
  },
  "/3/pricelists": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/pricelists/{Code}": {
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/prices": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/prices/sublist/{PriceList}/{ArticleNumber}": {
    "get": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
}),
})
  },
  "/3/prices/{PriceList}/{ArticleNumber}": {
    "get": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}": {
    "delete": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
  FromQuantity: z.number(),
}),
}),
    "get": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
  FromQuantity: z.number(),
}),
}),
    "put": z.object({
    params: z.object({
  PriceList: z.string(),
  ArticleNumber: z.string(),
  FromQuantity: z.number(),
}),
  body: z.any(),
})
  },
  "/3/printtemplates": {
    "get": z.object({
})
  },
  "/3/projects": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/projects/{ProjectNumber}": {
    "delete": z.object({
    params: z.object({
  ProjectNumber: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  ProjectNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  ProjectNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/salarytransactions": {
    "get": z.object({
    query: z.object({
  employeeId: z.string().optional(),
  date: z.iso.date().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/salarytransactions/{SalaryRow}": {
    "delete": z.object({
    params: z.object({
  SalaryRow: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  SalaryRow: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  SalaryRow: z.int(),
}),
  body: z.any(),
})
  },
  "/3/scheduletimes/{EmployeeId}/{Date}": {
    "get": z.object({
    params: z.object({
  EmployeeId: z.string(),
  Date: z.iso.date(),
}),
}),
    "put": z.object({
    params: z.object({
  EmployeeId: z.string(),
  Date: z.iso.date(),
}),
  body: z.any(),
})
  },
  "/3/scheduletimes/{EmployeeId}/{Date}/resetday": {
    "put": z.object({
    params: z.object({
  EmployeeId: z.string(),
  Date: z.iso.date(),
}),
})
  },
  "/3/settings/company": {
    "get": z.object({
})
  },
  "/3/settings/lockedperiod": {
    "get": z.object({
})
  },
  "/3/sie/{Type}": {
    "get": z.object({
    params: z.object({
  Type: z.string(),
}),
    query: z.object({
  financialYear: z.int().optional(),
}).optional(),
})
  },
  "/3/supplierinvoiceaccruals": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}": {
    "delete": z.object({
    params: z.object({
  SupplierInvoiceNumber: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  SupplierInvoiceNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  SupplierInvoiceNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/supplierinvoiceexternalurlconnections": {
    "post": z.object({
  body: z.any(),
})
  },
  "/3/supplierinvoiceexternalurlconnections/{Id}": {
    "delete": z.object({
    params: z.object({
  Id: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  Id: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  Id: z.int(),
}),
  body: z.any(),
})
  },
  "/3/supplierinvoicefileconnections": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/supplierinvoicefileconnections/{FileId}": {
    "delete": z.object({
    params: z.object({
  FileId: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  FileId: z.string(),
}),
})
  },
  "/3/supplierinvoicepayments": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/supplierinvoicepayments/{Number}": {
    "delete": z.object({
    params: z.object({
  Number: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  Number: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  Number: z.int(),
}),
  body: z.any(),
})
  },
  "/3/supplierinvoicepayments/{Number}/bookkeep": {
    "put": z.object({
    params: z.object({
  Number: z.int(),
}),
})
  },
  "/3/supplierinvoices": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["cancelled","fullypaid","unpaid","unpaidoverdue","unbooked","pendingpayment","authorizepending"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/supplierinvoices/{GivenNumber}": {
    "get": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
  body: z.any(),
})
  },
  "/3/supplierinvoices/{GivenNumber}/approvalbookkeep": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
})
  },
  "/3/supplierinvoices/{GivenNumber}/approvalpayment": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
})
  },
  "/3/supplierinvoices/{GivenNumber}/bookkeep": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
})
  },
  "/3/supplierinvoices/{GivenNumber}/cancel": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
})
  },
  "/3/supplierinvoices/{GivenNumber}/credit": {
    "put": z.object({
    params: z.object({
  GivenNumber: z.int(),
}),
})
  },
  "/3/suppliers": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/suppliers/{SupplierNumber}": {
    "get": z.object({
    params: z.object({
  SupplierNumber: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  SupplierNumber: z.string(),
}),
  body: z.any(),
})
  },
  "/3/taxreductions": {
    "get": z.object({
    query: z.object({
  filter: z.enum(["invoices","orders","offers"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/taxreductions/{Id}": {
    "delete": z.object({
    params: z.object({
  Id: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  Id: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  Id: z.int(),
}),
  body: z.any(),
})
  },
  "/3/termsofdeliveries": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/termsofdeliveries/{Code}": {
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/termsofpayments": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/termsofpayments/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/units": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/units/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/vacationdebtbasis/{Year}/{Month}": {
    "get": z.object({
    params: z.object({
  Year: z.int(),
  Month: z.int(),
}),
})
  },
  "/3/voucherfileconnections": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/voucherfileconnections/{FileId}": {
    "delete": z.object({
    params: z.object({
  FileId: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  FileId: z.string(),
}),
})
  },
  "/3/vouchers": {
    "get": z.object({
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
}),
    "post": z.object({
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
  body: z.any(),
})
  },
  "/3/vouchers/sublist": {
    "get": z.object({
})
  },
  "/3/vouchers/sublist/{VoucherSeries}": {
    "get": z.object({
    params: z.object({
  VoucherSeries: z.string(),
}),
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
})
  },
  "/3/vouchers/{VoucherSeries}/{VoucherNumber}": {
    "get": z.object({
    params: z.object({
  VoucherSeries: z.string(),
  VoucherNumber: z.int(),
}),
    query: z.object({
  financialyear: z.int().optional(),
}).optional(),
})
  },
  "/3/voucherseries": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/voucherseries/{Code}": {
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/3/wayofdeliveries": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/3/wayofdeliveries/{Code}": {
    "delete": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "get": z.object({
    params: z.object({
  Code: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  Code: z.string(),
}),
  body: z.any(),
})
  },
  "/api/fileattachments/attachments-v1": {
    "get": z.object({
    query: z.object({
  entityid: z.array(z.int()),
  entitytype: z.enum(["OF","O","F","C","LGR_IO","LGR_IG"]),
}),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/fileattachments/attachments-v1/numberofattachments": {
    "get": z.object({
    query: z.object({
  entityids: z.array(z.int()),
  entitytype: z.enum(["OF","O","F","C","LGR_IO","LGR_IG"]),
}),
})
  },
  "/api/fileattachments/attachments-v1/validateincludedonsend": {
    "post": z.object({
  body: z.any(),
})
  },
  "/api/fileattachments/attachments-v1/{attachmentId}": {
    "delete": z.object({
    params: z.object({
  attachmentId: z.uuid(),
}),
}),
    "put": z.object({
    params: z.object({
  attachmentId: z.uuid(),
}),
  body: z.any(),
})
  },
  "/api/integration-developer/ratings-v1": {
    "get": z.object({
})
  },
  "/api/integration-developer/sales-v1/{integrationId}": {
    "get": z.object({
    params: z.object({
  integrationId: z.int(),
}),
})
  },
  "/api/integration-developer/users/users-v1/{integrationId}/{tenantId}": {
    "get": z.object({
    params: z.object({
  integrationId: z.int(),
  tenantId: z.int(),
}),
})
  },
  "/api/integration-partner/apps/sales-v1/{appId}": {
    "get": z.object({
    params: z.object({
  appId: z.string(),
}),
})
  },
  "/api/integration-partner/apps/sales-v1/{appId}/{tenantId}": {
    "get": z.object({
    params: z.object({
  appId: z.string(),
  tenantId: z.int(),
}),
})
  },
  "/api/time/articles-v1": {
    "get": z.object({
    query: z.object({
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
}).optional(),
})
  },
  "/api/time/registrations-v2": {
    "get": z.object({
    query: z.object({
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
}).optional(),
})
  },
  "/api/warehouse/deliveries-v1": {
    "get": z.object({
    query: z.object({
  state: z.enum(["all","unreleased","released","voided"]).optional(),
  type: z.enum(["all","inbound","outbound","stocktransfer"]).optional(),
  itemId: z.string().optional(),
}).optional(),
})
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries": {
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "patch": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  force: z.boolean().optional(),
  customVoidDate: z.iso.date().optional(),
}).optional(),
})
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries": {
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "patch": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  customVoidDate: z.iso.date().optional(),
}).optional(),
})
  },
  "/api/warehouse/documentdeliveries/custom/documenttypes-v1": {
    "get": z.object({
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}": {
    "get": z.object({
    params: z.object({
  type: z.string(),
}),
})
  },
  "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}": {
    "get": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release": {
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
})
  },
  "/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void": {
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
    query: z.object({
  force: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}": {
    "get": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
}),
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release": {
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
})
  },
  "/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void": {
    "put": z.object({
    params: z.object({
  type: z.string(),
  id: z.string(),
}),
    query: z.object({
  force: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/incominggoods-v1": {
    "get": z.object({
    query: z.object({
  released: z.boolean().optional(),
  completed: z.boolean().optional(),
  voided: z.boolean().optional(),
  supplierNumber: z.string().optional(),
  itemId: z.string().optional(),
  note: z.string().optional(),
  deliveryNote: z.string().optional(),
  q: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/incominggoods-v1/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  ignoreSupplierInvoiceId: z.int().optional(),
}).optional(),
}),
    "patch": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/incominggoods-v1/{id}/completed": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/incominggoods-v1/{id}/release": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/incominggoods-v1/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/productionorders-v1": {
    "get": z.object({
    query: z.object({
  state: z.enum(["all","incomplete","delayed","completed","voided"]).optional(),
  itemId: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/productionorders-v1/billofmaterials/{itemId}": {
    "get": z.object({
    params: z.object({
  itemId: z.string(),
}),
    query: z.object({
  id: z.int().optional(),
  quantity: z.string().optional(),
}).optional(),
})
  },
  "/api/warehouse/productionorders-v1/release/{id}": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/productionorders-v1/void/{id}": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  force: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/productionorders-v1/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "patch": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1": {
    "get": z.object({
    query: z.object({
  q: z.string().optional(),
  supplierNumber: z.string().optional(),
  state: z.enum(["NOT_SENT","SENT","SENT_NOT_REJECTED","DELAYED","RECEIVED","VOIDED","CURRENT","ALL"]).optional(),
  itemId: z.string().optional(),
  purchaseType: z.enum(["WAREHOUSE","DROPSHIP"]).optional(),
  internalReference: z.string().optional(),
  note: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/csv": {
    "get": z.object({
    query: z.object({
  q: z.string().optional(),
  supplierNumber: z.string().optional(),
  state: z.enum(["NOT_SENT","SENT","SENT_NOT_REJECTED","DELAYED","RECEIVED","VOIDED","CURRENT","ALL"]).optional(),
  itemId: z.string().optional(),
  purchaseType: z.enum(["WAREHOUSE","DROPSHIP"]).optional(),
  internalReference: z.string().optional(),
  note: z.string().optional(),
  showPurchaseTypeColumn: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/purchaseorders-v1/response": {
    "put": z.object({
    query: z.object({
  ids: z.array(z.int()).optional(),
}).optional(),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/sendpurchaseorders": {
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  ignoreIncomingGoodsId: z.int().optional(),
}).optional(),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/complete": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/matches": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/notes": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/partial": {
    "patch": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/response": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/send": {
    "post": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/purchaseorders-v1/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/status-v1/stockbalance": {
    "get": z.object({
    query: z.object({
  itemIds: z.array(z.string()).optional(),
  stockPointCodes: z.array(z.string()).optional(),
}).optional(),
})
  },
  "/api/warehouse/stockpoints-v1": {
    "get": z.object({
    query: z.object({
  q: z.string().optional(),
  state: z.enum(["ALL","ACTIVE","INACTIVE"]).optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/stockpoints-v1/multi": {
    "get": z.object({
    query: z.object({
  ids: z.array(z.uuid()).optional(),
  state: z.enum(["ALL","ACTIVE","INACTIVE"]).optional(),
}).optional(),
})
  },
  "/api/warehouse/stockpoints-v1/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.uuid(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.string(),
}),
}),
    "post": z.object({
    params: z.object({
  id: z.uuid(),
}),
  body: z.any(),
}),
    "put": z.object({
    params: z.object({
  id: z.uuid(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/stockpoints-v1/{id}/stocklocations": {
    "get": z.object({
    params: z.object({
  id: z.string(),
}),
    query: z.object({
  q: z.string().optional(),
}).optional(),
})
  },
  "/api/warehouse/stocktaking-v1": {
    "get": z.object({
    query: z.object({
  state: z.enum(["all","planning","started","completed","voided"]).optional(),
  itemId: z.string().optional(),
}).optional(),
}),
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/stocktaking-v1/{id}": {
    "delete": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/addrows": {
    "post": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  itemIds: z.array(z.string()).optional(),
  supplierNumbers: z.array(z.string()).optional(),
  stockPointIds: z.array(z.string()).optional(),
  stockLocationIds: z.array(z.string()).optional(),
  transactionDate: z.iso.date().optional(),
  itemIdSearch: z.string().optional(),
  itemDescriptionSearch: z.string().optional(),
  excludeZeroBalanceItems: z.boolean().optional(),
  excludeNonInboundItems: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/candidates": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  itemIds: z.array(z.string()).optional(),
  supplierNumbers: z.array(z.string()).optional(),
  stockPointIds: z.array(z.string()).optional(),
  stockLocationIds: z.array(z.string()).optional(),
  transactionDate: z.iso.date().optional(),
  itemIdSearch: z.string().optional(),
  itemDescriptionSearch: z.string().optional(),
  excludeZeroBalanceItems: z.boolean().optional(),
  includeNonInboundItems: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/release": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/rows": {
    "delete": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  itemIds: z.array(z.string()).optional(),
  supplierNumbers: z.array(z.string()).optional(),
  stockPointIds: z.array(z.string()).optional(),
  stockLocationIds: z.array(z.string()).optional(),
  transactionDate: z.iso.date().optional(),
  itemIdSearch: z.string().optional(),
  itemDescriptionSearch: z.string().optional(),
  excludeZeroBalanceItems: z.boolean().optional(),
}).optional(),
}),
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
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
  stateFilter: z.enum(["all","notStockTaken","stockTakenNoDeviation","stockTakenWithDeviation"]).optional(),
  startingRowNo: z.int().optional(),
  startingItemId: z.string().optional(),
}).optional(),
}),
    "post": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/rows/{rowId}": {
    "delete": z.object({
    params: z.object({
  id: z.int(),
  rowId: z.string(),
}),
})
  },
  "/api/warehouse/stocktaking-v1/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/stocktransfer-v1": {
    "post": z.object({
  body: z.any(),
})
  },
  "/api/warehouse/stocktransfer-v1/{id}": {
    "get": z.object({
    params: z.object({
  id: z.int(),
}),
}),
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
  body: z.any(),
})
  },
  "/api/warehouse/stocktransfer-v1/{id}/release": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
})
  },
  "/api/warehouse/stocktransfer-v1/{id}/void": {
    "put": z.object({
    params: z.object({
  id: z.int(),
}),
    query: z.object({
  force: z.boolean().optional(),
}).optional(),
})
  },
  "/api/warehouse/tenants-v4": {
    "get": z.object({
})
  }
} as const;