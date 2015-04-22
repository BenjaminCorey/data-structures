function BinarySearchTree() {

  var root = null;

  var Node = function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function(key) {
    if (!root) {
      root = new Node(key);
    } else {
      insertNode(root, new Node(key));
    }
  };

  this.remove = function(key) {
    
  };

  this.search = function(key) {
    
  };

  this.inOrderTraverse = function() {
    
  };

  this.preOrderTraverse = function() {
    
  };

  this.min = function() {
    
  };

  this.max = function() {
    
  };
}
