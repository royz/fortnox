/** Flatten composite types to make it more readable */
export type Prettify<T> = {
  [K in keyof T]: T[K];
};

/** Make specific properties of an object required */
export type PartialRequired<Type, Key extends keyof Type> = Prettify<Type & {
  [K in Key]-?: Type[K]
}>;

/** Make all properties of an object required */
export type AllRequired<T> = {
  [K in keyof T]-?: T[K];
};

/** Wraps a list of items with pagination information */
export type FortnoxListWrap<TKey extends string, TItem extends unknown> = Prettify<{
  /** Pagination information */
  MetaInformation: {
    /** Format: int32 */
    "@CurrentPage": number;
    /** Format: int32 */
    "@TotalPages": number;
    /** Format: int32 */
    "@TotalResources": number;
  };
} & {
  [K in TKey]: TItem[];
}>;
