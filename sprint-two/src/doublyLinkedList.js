var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = doubleNode(value);
    // if LinkedList is empty
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }
    // update LinkedList with new node
    else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

//   list.removeHead = function() {
//     // if LinkedList has 0 values
//     if (list.head === null){
//       return;
//     }

//     // if LinkedList has 1 value
//     else if (list.head.next === null) {
//       var temp = list.head.value;
//       list.head = null;
//       list.tail = null;
//       return temp;
//     }

//     // if LinkedList has more than 1 value
//     else {
//       var temp = list.head.value;
//       list.head = list.head.next;
//       return temp;
//     }
//   };

//   list.contains = function(target) {
//     var current = list.head;
//     // loop through LinkedList, searching for target value
//     while (current !== null) {
//       if (current.value === target) {
//         return true;
//       }
//       current = current.next;
//     }
//     return false;
//   };

//   return list;
// };
}

var doubleNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 /* addToTail(): O(1)
    removeHead(): O(1)
    contains(): O(n);

 */
