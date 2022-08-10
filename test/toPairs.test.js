const toPairs = require('../toPairs');
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function Boo() {}

test('Creates an array [[`a`, 1], [`b`, 2]] of own enumerable string keyed-value pairs for object Foo', () => {
  expect(toPairs(new Foo())).toStrictEqual([['a', 1], ['b', 2]]);
});

test('Creates an array [] of own enumerable string keyed-value pairs for object Boo', () => {
  expect(toPairs(new Boo())).toStrictEqual([]);
});

test('Creates an array [] of own enumerable string keyed-value pairs for undefined', () => {
  expect(toPairs()).toStrictEqual([]);
});

test('Creates an array [] of own enumerable string keyed-value pairs for null', () => {
  expect(toPairs(null)).toStrictEqual([]);
});
