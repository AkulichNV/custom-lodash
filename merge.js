const zip = require('./zip');
/** This method is like _.assign except that it recursively merges own
 * and inherited enumerable string keyed properties of source objects into the destination object.
 * Source properties that resolve to undefined are skipped if a destination value exists.
 * Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment.
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources. */

function merge(object, ...sources) {
  //   console.log(object, sources);
  let obj = object;
  let objE = {};
  for (let i = 0; i < sources.length; i += 1) {
    for (let j = 0; j < Object.keys(obj).length; j += 1) {
      for (let k = 0; k < Object.keys(sources[i]).length; k += 1) {
        // console.log(Object.keys(obj)[j], Object.keys(sources[i])[k]);
        if (Object.keys(obj)[j] === Object.keys(sources[i])[k]) {
        //   console.log(true);
          const proper = Object.keys(obj)[j];
          const arr1 = Object.values(obj)[j]; // [{ b: 2 }, { d: 4 }]
          const arr2 = Object.values(sources[i])[k]; // [{ c: 3 }, { e: 5 }]
          //   console.log(arr1, arr2);
          if (typeof arr1 === 'object') {
            for (let m = 0; m < arr1.length; m += 1) {
              arr1[m] = Object.assign(arr1[m], arr2[m]);
            }
            objE[proper] = [...arr1];
          } else {
            objE[proper] = [arr1, arr2];
          }

        //   obj = Object.assign(obj[j], sources[i][k]);
        //   merge(obj[j], sources[i][k]);
        }
      }
    }
    if (Object.keys(objE).length === 0) {
      obj = Object.assign(obj, sources[i]);
    } else {
      obj = Object.assign(obj, objE);
      objE = {};
    }
  }
  return obj;
}
module.exports = merge;
