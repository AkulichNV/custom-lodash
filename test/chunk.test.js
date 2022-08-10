const chunk = require('../chunk');

test('Split array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] into chunks 3 to equal [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
    .toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
});

test('Split array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] into chunks 1 to equal [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1))
    .toStrictEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]);
});

test('Split array [1, 2] into chunks 3 to equal [[1, 2]', () => {
  expect(chunk([1, 2], 3)).toStrictEqual([[1, 2]]);
});

test('Split array [1, 2] into chunks 0 to equal [[1, 2]', () => {
  expect(chunk([1, 2], 0)).toStrictEqual([1, 2]);
});

test('Split array [] into chunks 3 to equal []', () => {
  expect(chunk([], 3)).toStrictEqual([]);
});

test('Split array undefined into chunks 3 to equal []', () => {
  expect(chunk(undefined, 3)).toStrictEqual([]);
});

test('Split array [1, 2, 3] into chunks null to equal [1, 2, 3]', () => {
  expect(chunk([1, 2, 3], null)).toStrictEqual([1, 2, 3]);
});
