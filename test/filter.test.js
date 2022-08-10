const filter = require('../filter');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'mark', age: 30, active: true },
];

test('Iterates over elements of users, returning an array of all elements predicate (o) => !o.active returns truthy for.', () => {
  expect(filter(users, (o) => !o.active)).toStrictEqual([{ user: 'fred', age: 40, active: false }]);
});

test('Iterates over elements of users, returning an array of all elements predicate { age: 36, active: true } returns truthy for.', () => {
  expect(filter(users, (o) => o.age === 36 && o.active)).toStrictEqual([{ user: 'barney', age: 36, active: true }]);
});

test('Iterates over elements of users, returning an array of all elements predicate (o) => o.active returns truthy for.', () => {
  expect(filter(users, (o) => o.active)).toStrictEqual([{ user: 'barney', age: 36, active: true }, { user: 'mark', age: 30, active: true }]);
});
