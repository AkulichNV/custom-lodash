const merge = require('../merge');

const object = {
  a: [{ b: 2 }, { d: 4 }],
};

const other = {
  a: [{ c: 3 }, { e: 5 }],
};

test('Merge two objects: object and other, is equal { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }', () => {
  expect(merge(object, other)).toStrictEqual({ a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] });
});

test('Merge objects: { cpp: "12" }, { java: "23" }, { python: "35" }, is equal {cpp: "12", java: "23", python: "35"}', () => {
  expect(merge({ cpp: '12' }, { java: '23' }, { python: '35' })).toStrictEqual({ cpp: '12', java: '23', python: '35' });
});

test('Merge objects: { cpp: "1256" }, { cpp: "23" }, { java: "23" }, { python: "35" }, is equal {cpp: ["1256", "23"], java: "23", python: "35"}', () => {
  expect(merge({ cpp: '1256' }, { cpp: '23' }, { java: '23' }, { python: '35' })).toStrictEqual({ cpp: ['1256', '23'], java: '23', python: '35' });
});
