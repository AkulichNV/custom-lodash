const drop = require('../drop');

test('Slice of [1, 2, 3] with 2 elements dropped from the beginning to equal [3]', () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});

test('Slice of [1, 2, 3] with 5 elements dropped from the beginning to equal []', () => {
  expect(drop([1, 2, 3], 5)).toStrictEqual([]);
});

test('Slice of [] with 5 elements dropped from the beginning to equal []', () => {
  expect(drop([], 5)).toStrictEqual([]);
});

test('Slice of [1, 2, 3, 4] with 0 elements dropped from the beginning to equal [1, 2, 3, 4]', () => {
  expect(drop([1, 2, 3, 4], 0)).toStrictEqual([1, 2, 3, 4]);
});
