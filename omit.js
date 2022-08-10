/** The opposite of _.pick; this method creates an object composed of the own
 *  and inherited enumerable property paths of object that are not omitted. */

function omit(obj, ...keys) {
  let newObj = obj;
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof keys[i] === 'object') {
      for (let j = 0; j < keys[i].length; j += 1) {
        const { [keys[i][j]]: _, ...curObj } = newObj;
        newObj = curObj;
      }
    } else {
      const { [keys[i]]: _, ...curObj } = newObj;
      newObj = curObj;
    }
  }
  return newObj;
}
module.exports = omit;
