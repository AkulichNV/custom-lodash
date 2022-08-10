/** Creates a slice of `array` with `n` elements taken from the beginning. */

function take(array, n = 1) {
  if (!(array != null && array.length)) {
    return [];
  }
  if (n > array.length) {
    return array;
  }
  const newArr = [];
  if (n < array.length && n !== 0) {
    for (let i = 0; i < n; i += 1) {
      newArr[i] = array[i];
    }
  }
  return newArr;
}
module.exports = take;
