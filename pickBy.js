/** Creates an object composed of the object properties predicate returns truthy for.
 * The predicate is invoked with two arguments: (value, key). */

function pickBy(obj, predicate) {
  let newObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj)) {
    if (predicate(value)) {
      newObj = Object.assign(newObj, { [key]: value });
    }
  }
  return newObj;
}
module.exports = pickBy;
