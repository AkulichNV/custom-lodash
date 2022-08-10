const zip = require('../zip');

test('Creates an array [[`a`, 1, true], [`b`, 2, false]] of grouped elements [`a`, `b`], [1, 2], [true, false]', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});
