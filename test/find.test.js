const find = require('../find');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
  { user: 'mark', age: 13, active: false },
];

test('Iterates over elements of users, returning the first element predicate (o) => !o.active returns truthy for.', () => {
  expect(find(users, (o) => !o.active)).toStrictEqual({ user: 'fred', age: 40, active: false });
});

test('Iterates over elements of users, returning the first element predicate { age: 36, active: true } returns truthy for.', () => {
  expect(find(users, (o) => o.age < 39 && o.active)).toStrictEqual({ user: 'barney', age: 36, active: true });
});

test('Iterates over elements of users, returning the first element predicate (o) => o.active returns truthy for.', () => {
  expect(find(users, (o) => o.active)).toStrictEqual({ user: 'barney', age: 36, active: true });
});
