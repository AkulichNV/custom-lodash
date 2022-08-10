const pickBy = require('../pickBy');

const object = { a: 1, b: '2', c: 3 };

test('Create an object { b: "2" } composed of the own and inherited enumerable property paths of object that predicate (O) => typeof O === "number" doesn\'t return truthy for', () => {
  expect(pickBy(object, (O) => typeof O === 'number')).toStrictEqual({ a: 1, c: 3 });
});

test('Create an object { b: "2" } composed of the own and inherited enumerable property paths of object that predicate (O) => typeof O === "number" doesn\'t return truthy for', () => {
  expect(pickBy(object, (O) => typeof O === 'string')).toStrictEqual({ b: '2' });
});
