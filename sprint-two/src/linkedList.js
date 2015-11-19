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
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    // if LinkedList has 0 values
    if (this.head === null){
      return;
    }

    // if LinkedList has 1 value
    else if (this.head.next === null) {
      var temp = this.head.value;
      this.head = null;
      this.tail = null;
      return temp;
    }

    // if LinkedList has more than 1 value
    else {
      var temp = this.head.value;
      this.head = this.head.next;
      return temp;
    }
  };

  list.contains = function(target) {
    var current = this.head;
    // loop through LinkedList, searching for target value
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
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
