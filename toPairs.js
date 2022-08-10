/** Creates an array of own enumerable string keyed-value pairs
 * for object which can be consumed by _.fromPairs.
 * If object is a map or set, its entries are returned. */

function toPairs(obj) {
  if (!obj || Object.keys(obj).length === 0) {
    return [];
  }
  if (obj instanceof Set || obj instanceof Map) {
    return obj;
  }
  return Object.entries(obj);
}
module.exports = toPairs;
