var Queue = require('./queue');

function PriorityQueue () {
  var items = [];

  function QueueElement (value, priority) {
    this.value = value;
    this.priority = priority;
  }

  this.enqueue = function( value, priority ) {
    var queueElement = new QueueElement( value, priority );

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
        if (!added) {
          items.push(queueElement);
        }
      }
    }
  };
}

module.exports = PriorityQueue;
