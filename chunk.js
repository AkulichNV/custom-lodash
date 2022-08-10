function chunk(arr, chunks) {
  let num = 0;
  if (chunks) {
    num = chunks;
  } else {
    return arr;
  }
  const chunkedArr = [];
  if (arr) {
    for (let i = 0; i < arr.length; i += 1) {
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === num) {
        chunkedArr[chunkedArr.length] = [arr[i]];
      } else {
        last[last.length] = arr[i];
      }
    }
  }
  return chunkedArr;
}
module.exports = chunk;
