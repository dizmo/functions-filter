/**
 * Asynchronously filters an array of items
 *
 * The `Array.prototype.filter` function does *not* allow to filter an array
 * using asynchronous predicates. However by applying the `filter` function,
 * it becomes possible to do so.
 *
 * @example
 * ```
 * const even_numbers = await filter([0,1,2,3,4], (n) => Promise(
 *     (resolve) => setTimeout(() => resolve(n % 2 === 0))
 * ));
 * ```
 * @example
 * ```
 * const odd_numbers = await filter([0,1,2,3,4], (n) => Promise(
 *     (resolve) => setTimeout(() => resolve(n % 2 === 1))
 * ));
 * ```
 *
 * @param array
 *  array of items
 * @param predicate
 *  asynchronous function to filter items with
 * @returns
 *  filtered array of items
 */
export async function filter<T>(
    array: T[], predicate: (item: T) => Promise<boolean>
): Promise<T[]> {
    const flags = await Promise.all(
        array.map(predicate)
    );
    return array.filter((_, i) => flags[i]);
}
export default filter;
