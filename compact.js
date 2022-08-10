/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 * */

function compact(arr) {
  let resIndex = 0;
  const result = [];

  if (arr === null) {
    return result;
  }

  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i]) {
      result[resIndex] = arr[i];
      resIndex += 1;
    }
  }
  return result;
}
module.exports = compact;
