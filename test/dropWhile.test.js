const dropWhile = require('../dropWhile');

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

test('Slice of `users` excluding elements dropped from the beginning until `[active, false]`returns falsey.', () => {
  expect(dropWhile(users, ['active', false])).toStrictEqual([{ user: 'pebbles', active: true }]);
});

test('Slice of `users` excluding elements dropped from the beginning until `(o) => !o.active`returns falsey.', () => {
  expect(dropWhile(users, (o) => !o.active)).toStrictEqual([{ user: 'pebbles', active: true }]);
});

test('Slice of `users` excluding elements dropped from the beginning until `{ user: `barney`, active: false }` returns falsey.', () => {
  expect(dropWhile(users, { user: 'barney', active: false })).toStrictEqual([{ user: 'fred', active: false }, { user: 'pebbles', active: true }]);
});

test('Slice of `users` excluding elements dropped from the beginning until `active` returns falsey.', () => {
  expect(dropWhile(users, 'active')).toStrictEqual([{ user: 'barney', active: false }, { user: 'fred', active: false }, { user: 'pebbles', active: true }]);
});
