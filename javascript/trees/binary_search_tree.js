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

  var inOrderTraverseNode = function(node, callback) {
    if (node) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  var preOrderTraverseNode = function(node, callback) {
    if (node) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  var postOrderTraverseNode = function(node, callback) {
    if (node) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
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

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  this.preOrderTraverse = function() {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function() {
    postOrderTraverseNode(root, callback);
  };
  
  this.min = function() {
    while (node && node.left) {
      node = node.left;
    }
    return node.key;
  };

  this.max = function() {
    while (node && node.right) {
      node = node.right;
    }
    return node.key;
  };
}
