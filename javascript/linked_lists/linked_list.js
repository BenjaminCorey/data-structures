function LinkedList() {
  var Node,
      length = 0,
      head = null;

  Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.getHead = function () {
    return head;
  };
  
  this.append = function (element) {

    var node = new Node(element),
        current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while ( current.next ) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  
  this.insert = function (position, element) {

    var current = head,
        node = new Node(element),
        previous,
        index = 0;

    if ( position < 0 || position >= length ) {
      return false;
    }

    if ( position === 0 ) {
      node.next = head;
      head = node;
    } else {
      while ( index++ < position ) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    length++;
  };

  this.removeAt = function (position) {

    var current = head,
        previous,
        index = 0;

    if (position < 0 || position >= length) { 
      return false;
    }

    if ( position === 0 ) {
      head = current.next;
    } else {
      while ( index++ < position ) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.element;
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    var current = head,
        index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.toString = function () {

    var current = head,
        buffer = [];

    while ( current ) {
      buffer.push(current);
      current = current.next;
    }
    return buffer.join(',');
  };

  this.print = function () {
    
  };
}
