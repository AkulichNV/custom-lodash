/** Checks if value is in collection. If collection is a string,
 * it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of collection. */

function includes(collection, value, fromIndex = 0) {
  if (typeof collection === 'string') {
    const lenSub = value.length;
    for (let i = fromIndex >= 0 ? fromIndex : collection.length + fromIndex;
      i < collection.length; i += 1) {
      let substr = '';
      for (let j = 0; j < lenSub; j += 1) {
        substr += collection[i + j];
      }
      if (substr === value) {
        return true;
      }
    }
    return false;
  }
  let arr = [];
  if (Array.isArray(collection)) {
    arr = collection;
  } else {
    arr = Object.values(collection);
  }
  const length = arr == null ? 0 : arr.length;
  const index = fromIndex >= 0 ? fromIndex : length + fromIndex;
  for (let i = index; i < length; i += 1) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
module.exports = includes;
