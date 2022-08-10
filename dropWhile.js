/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 * */

function dropWhile(arr, arg) {
  const type = typeof arg;
  if (type === 'string') {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][arg] !== true) {
        return arr.slice(i);
      }
    }
  } else if (type === 'function') {
    for (let i = 0; i < arr.length; i += 1) {
      if (!arg(arr[i])) {
        return arr.slice(i);
      }
    }
  } else if (Array.isArray(arg)) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][arg[0]] !== arg[1]) {
        return arr.slice(i);
      }
    }
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      const keys = Object.keys(arg);
      for (let k = 0; k < keys.length; k += 1) {
        const key = keys[k];
        const value = arr[i][key];
        if (value !== arg[key]) {
          return arr.slice(i);
        }
      }
    }
  }
  return [];
}

module.exports = dropWhile;
