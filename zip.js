/** Creates an array of grouped elements,
 * the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on. */

function zip(...arrays) {
  if (!(arrays != null && arrays.length)) {
    return [];
  }
  const result = [];
  for (let k = 0; k < arrays[0].length; k += 1) {
    result[k] = new Array(arrays.length);
  }
  for (let i = 0; i < arrays.length; i += 1) {
    const len = arrays[i].length;
    for (let j = 0; j < len; j += 1) {
      result[j][i] = arrays[i][j];
    }
  }
  return result;
}
module.exports = zip;
