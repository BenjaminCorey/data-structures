function DoublyLinkedList() {
  var length = 0,
      head = null,
      tail = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  this.insert = function (position, element) {
    if (position < 0 || position > length) { return false };
    var node = new Node(element),
        current = head,
        previous,
        index = 0;
    if ( position === 0 ) {
      if ( !head ) {
        head = tail = node;
      } else {
        node.next = head;
        head.prev = node;
        head = node;
      }
    } else if ( position === length ) {
      tail.next = node;
      node.prev = tail;
      tail = node;
    } else {
      for (index = 0; index < position; index++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      node.prev = previous;
      previous.next = node;
      current.prev = node;
    }
    length++;
    return true;
  }
}
