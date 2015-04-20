var Queue = require('./queue');
var expect = require('chai').expect;

describe('Queue', function () {
  queue = new Queue();

  it('is initialized as empty', function () {
    expect(queue.isEmpty()).to.be.true;
  });

  it('can add things to the queue', function () {
    queue.enqueue('John');
    queue.enqueue('Jack');
    queue.enqueue('Camila');
    expect(queue.size()).to.equal(3);
  })

  it('can remove things from the queue', function () {
    queue.dequeue();
    expect(queue.size()).to.equal(2);
    expect(queue.front()).to.equal('Jack');
  });
});
