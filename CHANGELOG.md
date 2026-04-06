# @unifetch/fortnox

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
