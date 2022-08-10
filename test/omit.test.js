const omit = require('../omit');

const object = { a: 1, b: '2', c: 3 };

test('Create an object { b: "2" } composed of the own and inherited enumerable property paths of object ["a", "c"] that are not omitted', () => {
  expect(omit(object, ['a', 'c'])).toStrictEqual({ b: '2' });
});

test('Create an object { foo: `foo`, baz: `baz` } composed of the own and inherited enumerable property paths of object { foo: `foo`, bar: `bar`, baz: `baz` } and `bar` that are not omitted', () => {
  expect(omit({ foo: 'foo', bar: 'bar', baz: 'baz' }, 'bar')).toStrictEqual({ foo: 'foo', baz: 'baz' });
});

test('Create an object { foo: `foo` } composed of the own and inherited enumerable property paths of object { foo: `foo`, bar: `bar`, baz: `baz` } and `bar`, `baz` that are not omitted', () => {
  expect(omit({ foo: 'foo', bar: 'bar', baz: 'baz' }, 'bar', 'baz')).toStrictEqual({ foo: 'foo' });
});
