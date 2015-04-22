var expect = require('chai').expect;
var Set = require('./set');

describe('Set', function() {
  it('is defined', function() {
    expect(typeof Set).to.equal('function');
  });

  describe('#add', function() {
    it('adds a value to the set', function() {
      var set = new Set();

      expect(set.add('myValue')).to.be.true;
    });
    it('returns false when a value already exists in the set', function() {
      var set = new Set();

      expect(set.add(1)).to.be.true;
      expect(set.add(1)).to.be.false;
      expect(set.has(1)).to.be.true;
    });
  });

  describe('has', function() {
    it('returns false when the value doesnt exist', function() {
      var set = new Set();

      expect(set.has('asdf')).to.be.false;
    });
    it('returns true when the value does exist', function() {
      var set = new Set();
      set.add('asdf');

      expect(set.has('asdf')).to.be.true;
    });
  });
});

