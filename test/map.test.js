const map = require('../map');

function square(n) {
  return n * n;
}

test('Creates an array of values by running each element in collection [4, 8] thru iteratee square', () => {
  expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

test('Creates an array of values by running each element in collection { a: 4, b: 8 } thru iteratee square', () => {
  expect(map({ a: 4, b: 8 }, square)).toStrictEqual([16, 64]);
});

const users = [
  { user: 'barney' },
  { user: 'fred' },
];

test('Creates an array of values by running each element in collection { a: 4, b: 8 } thru iteratee square', () => {
  expect(map(users, (o) => o.user)).toStrictEqual(['barney', 'fred']);
});
