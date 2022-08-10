const includes = require('../includes');

test('Checks if 1 is in [1, 2, 3] is true', () => {
  expect(includes([1, 2, 3], 1)).toStrictEqual(true);
});

test('Checks if 1 from 2 index is in [1, 2, 3] is false', () => {
  expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
});

test('Checks if 1 is in { a: 1, b: 2 } is true', () => {
  expect(includes({ a: 1, b: 2 }, 1)).toStrictEqual(true);
});

test('Checks if `bc` is in `abcd` is true', () => {
  expect(includes('abcd', 'bc')).toStrictEqual(true);
});
