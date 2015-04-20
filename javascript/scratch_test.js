var expect = require('chai').expect;
var compress = require('./scratch').compress;
var fib = require('./scratch').fib;
var fibR = require('./scratch').fib;

describe('string compression', function () {
  it('compresses a string of repeating charactures', function () {
    expect(compress('AABBCC')).to.equal('A2B2C2');
  });

  it('compresses when a character repeats more than once', function () {
    expect(compress('AAA')).to.equal('A3');
  });
});

describe('fib', function () {
  it('returns the fib number for 1', function () {
    expect(fib(1)).to.equal(1);
  });
  it('returns the fib number for 10', function () {
    expect(fib(10)).to.equal(55);
  });
  it('can calculate large fib numbers', function () {
    expect(fib(100)).to.equal(354224848179262000000);
  });
});

describe('fibR', function () {
  it('returns valid fib numbers', function () {
    expect(fibR(3)).to.equal(2);
  });
  it('returns valid fib 10', function () {
    expect(fibR(10)).to.equal(55);
  });
  it('can calculate large fib numbers', function () {
    expect(fibR(100)).to.equal(354224848179262000000);
  });
});
