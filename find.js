/** Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection). */

function find(array, predicate) {
  let index = 0;
  const length = array == null ? 0 : array.length;

  while (index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      return value;
    }
    index += 1;
  }
  return null;
}
module.exports = find;
