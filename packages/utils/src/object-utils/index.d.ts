/**
 * Groups members of an iterable according to the return value of the passed callback.
 * Prefer over Object.groupBy due to browser compatibility issues.
 * @param items An iterable.
 * @param keySelector A callback which will be invoked for each item in items.
 * @see https://caniuse.com/?search=object.groupby
 */
export declare function groupBy<K extends PropertyKey, T>(items: Iterable<T>, keySelector: (item: T, index: number) => K): Partial<Record<K, T[]>>;
//# sourceMappingURL=index.d.ts.map