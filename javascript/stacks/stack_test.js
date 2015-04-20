var expect = require('chai').expect;
var Stack = require('./stack');

describe('Stack', function () {
  it('is defined', function () {
    expect(Stack).to.exist;
  });
  it('initializes as empty', function () {
    var myStack = new Stack();
    expect(myStack.isEmpty()).to.be.true;
  });
  it('isnt empty when an object is added', function () {
    var myStack = new Stack();
    myStack.push('asdf');
    expect(myStack.isEmpty()).to.be.false;
  });
  describe('#push', function () {
    it('adds new items to the stack', function () {
      var myStack = new Stack();
      myStack.push('asdf');
      expect(myStack.size()).to.equal(1);
    });
  });
});
