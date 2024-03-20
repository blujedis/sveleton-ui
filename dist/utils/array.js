import { getProperty } from 'dot-prop';
import { isLike, isNumeric } from './is';
/**
 * Inserts a new item into an array without mutating.
 *
 * @param arr the array to insert value into.
 * @param index the index at which to insert the value.
 * @param newItem the new item to be inserted.
 */
export function arrayInsert(arr, index, newItem) {
    return [
        ...arr.slice(0, index), // before index
        newItem,
        ...arr.slice(index) // after index.
    ];
}
/**
 * If undefined empty array is returned otherwise the array or value wrapped as array is.
 *
 * @param value the value to inspect as any array.
 * @param clean when true and is array clean any undefined.
 */
export function ensureArray(value, clean = true) {
    if (typeof value === 'undefined' || value === null || value === '')
        return [];
    if (Array.isArray(value))
        return (clean ? value.filter((v) => typeof v !== 'undefined') : value);
    return [value];
}
/**
 * Rudamentary search filter applying indexOf checking against all or specified accessor fields.
 *
 * @param query the search query.
 * @param items an array of items to apply the search to.
 * @param accessors optional accessor keys applying search to only these keys.
 */
export function searchArray(query, items, accessors) {
    if (!accessors.length)
        return items.filter((item) => Object.entries(item).some(([_key, val]) => isLike(query, val)));
    if (typeof accessors[0] === 'string') {
        const _accessors = accessors;
        return items.filter((item) => _accessors.some((key) => isLike(query, item[key])));
    }
    return items.filter((item) => Object.entries(item).some(([_key, val]) => isLike(query, val)));
}
function defaultComparator(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}
function defaultPrimer(value) {
    const isDate = value instanceof Date;
    if (typeof value !== 'string' && !isDate && typeof value !== 'number')
        return value;
    if (isDate)
        return value.getTime();
    if (isNumeric(value, true))
        return Number(value);
    return value;
}
/**
 * Create a sort comparator function with optional primer so that values can be
 * converted to the correct type for comparison.
 *
 * @example
 * createComparator('-name', ('Bob Smith', name) => 'bob smith')
 *
 * @example
 * This is done so values can be properly compared here we convert a date to an
 * epoch or number which can be easily evaluated.
 * primer = (value = '01/01/1999') => 915177600
 *
 * @param accessor the property that is to be primed if required.
 * @param primer the function for priming the value convert to type etc.
 */
function createComparator(accessor, primer = defaultPrimer) {
    const isDesc = accessor.charAt(0) === '-';
    const key = isDesc ? accessor.slice(1) : accessor;
    let comparator = defaultComparator;
    if (primer)
        comparator = (a, b) => defaultComparator(primer(a, key), primer(b, key));
    if (isDesc)
        return [key, (a, b) => -1 * comparator(a, b)];
    return [key, comparator];
}
/**
 * Creates a Array sort function sorting by one or more properties and with optional primer for
 * casting values to correct types before comparing.
 *
 * @example
 * const sorter = createSort([], ['name', '-age'], (value, key) => value);
 *
 *
 * @param items the array of objects to be sorted.
 * @param accessors an array of accessors to be sorted against.
 * @param primer an optional primer function for formatting values before compare.
 */
export function sortArray(items, accessors, primer) {
    const comparators = accessors.map((a) => createComparator(a, primer));
    if (!comparators.length)
        return items.sort();
    const fn = (a, b) => {
        let result = 0;
        for (const tuple of comparators) {
            const [key, compare] = tuple;
            result = compare(getProperty(a, key), getProperty(b, key));
            if (result !== 0)
                break;
        }
        return result;
    };
    return items.sort(fn);
}
