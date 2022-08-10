const compact = require('../compact');

test('Compact array [0, 1, false, 2, null, 3] to equal [1, 2, 3]', () => {
  expect(compact([0, 1, false, 2, null, 3])).toStrictEqual([1, 2, 3]);
});

test('Compact array [0, 1, false, 2, null, 3, undefined] to equal [1, 2, 3]', () => {
  expect(compact([0, 1, false, 2, null, 3, undefined])).toStrictEqual([1, 2, 3]);
});

test('Compact array [0, false, null, "", undefined, NaN] to equal []', () => {
  expect(compact([0, false, null, '', undefined, NaN])).toStrictEqual([]);
});

test('Compact array ["1", "2", "3"] to equal ["1", "2", "3"]', () => {
  expect(compact(['1', '2', '3'])).toStrictEqual(['1', '2', '3']);
});

test('Compact array [] to equal []', () => {
  expect(compact([])).toStrictEqual([]);
});
