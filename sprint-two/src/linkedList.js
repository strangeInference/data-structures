var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.length = 

  list.addToTail = function(value) {
    var node = Node(value);
    
    // if LinkedList is empty
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    // update LinkedList with new node
    else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
