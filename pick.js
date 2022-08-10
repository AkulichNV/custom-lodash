/** Creates an object composed of the picked object properties. */

function pick(obj, ...keys) {
  let newObj = {};
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof keys[i] === 'object') {
      for (let j = 0; j < keys[i].length; j += 1) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(obj)) {
          if (key === keys[i][j]) {
            newObj = Object.assign(newObj, { [key]: value });
          }
        }
      }
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(obj)) {
        if (key === keys[i]) {
          newObj = Object.assign(newObj, { [key]: value });
        }
      }
    }
  }
  return newObj;
}
module.exports = pick;
