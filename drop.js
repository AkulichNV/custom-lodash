/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 * */

function drop(array, n = 1) {
  if (n === 0) {
    return array;
  }
  const newArr = [];
  let index = 0;
  if (n < array.length) {
    for (let i = n; i < array.length; i += 1) {
      newArr[index] = array[i];
      index += 1;
    }
  }
  return newArr;
}
module.exports = drop;
