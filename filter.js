/** Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection). */

function filter(array, predicate) {
  let index = 0;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  const result = [];

  while (index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex] = value;
      resIndex += 1;
    }
    index += 1;
  }
  return result;
}
module.exports = filter;
