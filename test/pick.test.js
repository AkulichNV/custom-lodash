const pick = require('../pick');

const object = { a: 1, b: '2', c: 3 };

const object2 = { foo: 'foo', bar: 'bar', baz: 'baz' };

test('Creates an object { a: 1, c: 3 } composed of the picked object properties by [`a`, `c`].', () => {
  expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
});

test('Create an object { bar: `bar` } composed of the picked object properties by `bar`.', () => {
  expect(pick(object2, 'bar')).toStrictEqual({ bar: 'bar' });
});

test('Create an object { bar: `bar`, baz: `baz` } composed of the picked object properties by `bar` and `baz`.', () => {
  expect(pick(object2, 'bar', 'baz')).toStrictEqual({ bar: 'bar', baz: 'baz' });
});
