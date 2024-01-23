/**
 * Removes undefined values.
 *
 * @param obj the object to be cleaned.
 */
export function cleanObj(obj = {}) {
    return Object.entries(obj).reduce((a, [key, val]) => {
        if (typeof val !== 'undefined')
            a[key] = val;
        return a;
    }, {});
}
/**
 * Converts object into simple object literal using JSON.parse, JSON.stringify.
 *
 * @param obj the object to be cloned.
 */
export function simpleClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}