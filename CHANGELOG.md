# @unifetch/fortnox

## 2.10.1

### Patch Changes

- Add back the link to git repo which got unintentionally removed from last build

## 2.10.0

### Minor Changes

- Minify the dist package

## 2.9.3

### Patch Changes

- Cleanup instructions

## 2.9.2

### Patch Changes

- Add readme regarding file upload and downloads.

## 2.9.1

### Patch Changes

- Add contact info in readme.

## 2.9.0

### Minor Changes

- Renamed methods under fortnox.archive.\* . Add custom type overrides for Archive and Inbox

## 2.8.0

### Minor Changes

- Add custom type overrides for "inbox". Expose "/utils" subpath with helpful utility functions.

## 2.7.0

### Minor Changes

- Add custom type overrirdes for Invoice, Invoicepayment, Voucher, Taxreduction, Article

## 2.6.1

### Patch Changes

- Export MetaInformation type

## 2.6.0

### Minor Changes

- Three new type-only sub-path exports have been added: `./custom-types`, `./official-schemas`, and `./patched-schemas`, allowing consumers to import schema and custom types directly without going through the main entry point.

## 2.5.1

### Patch Changes

- Fix: autocomplete suggestion for discriminated options of initFortnox and initFortnoxMini

## 2.5.0

### Minor Changes

- Add global query params wher applicable - lastmodified, financialyear, financialyeardate, fromdate, todate, limit, offset, page, sortorder

## 2.4.0

### Minor Changes

- Add custom types for Vouchers

## 2.3.1

### Patch Changes

- Add bundle size comparison in README.

## 2.3.0

### Minor Changes

- Export the full client and mini client from sperate paths for better tree-shaking. Create official/patched client by providing a genering to the init function.

## 2.2.0

### Minor Changes

- Add new initializer - createFortnoxMini() which only exposes the .path() method. It still has full type safety but results in very small bundle size compared to initFortnox()

## 2.1.1

### Patch Changes

- Include CHANGELOG.md in npm package

## 2.1.0

### Minor Changes

- Define and export custom types for invoice list and single invoice

## 2.0.1

### Patch Changes

- Update readme and specify edge runtime compatibility

## 2.0.0

### Major Changes

- Add resource-based API: access endpoints via `fortnox.<resource>.<operation>()` (e.g. `fortnox.invoices.getList()`) with full TypeScript autocomplete. The previous callable pattern `fortnox("/3/invoices")` is replaced by `fortnox.path("/3/invoices")`. Operation names are manually curated for consistency since the official Fortnox spec lacks clean operation IDs.

## 1.0.1

### Patch Changes

- Re-exported the types for proper inference

## 1.0.0

### Major Changes

- Initial release
