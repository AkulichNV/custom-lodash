const take = require('../take');

test('Slice of `[1, 2, 3]` with `` elements taken from the beginning.', () => {
  expect(take([1, 2, 3])).toStrictEqual([1]);
});

test('Slice of `[1, 2, 3]` with `2` elements taken from the beginning.', () => {
  expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});

test('Slice of `[1, 2, 3]` with `5` elements taken from the beginning.', () => {
  expect(take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
});

test('Slice of `[1, 2, 3]` with `0` elements taken from the beginning.', () => {
  expect(take([1, 2, 3], 0)).toStrictEqual([]);
});

test('Slice of `undefined` with `0` elements taken from the beginning.', () => {
  expect(take(0)).toStrictEqual([]);
});

test('Slice of `undefined` with `` elements taken from the beginning.', () => {
  expect(take()).toStrictEqual([]);
});
