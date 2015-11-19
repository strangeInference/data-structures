var Tree = function(value) {
  // delegate failed lookups to treeMethods object
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  newTree.children = null;  // fix me
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
