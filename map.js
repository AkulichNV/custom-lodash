/** Creates an array of values by running each element in collection thru iteratee.
 * The iteratee is invoked with three arguments: (value, index|key, collection). */

function map(collection, iteratee) {
  let index = 0;
  let arr = [];
  if (Array.isArray(collection)) {
    arr = collection;
  } else {
    arr = Object.values(collection);
  }
  const length = arr == null ? 0 : arr.length;
  const result = new Array(length);

  while (index < length) {
    result[index] = iteratee(arr[index], index, arr);
    index += 1;
  }
  return result;
}
module.exports = map;
