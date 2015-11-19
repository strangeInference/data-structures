var Tree = function(value) {
  // delegate failed lookups to treeMethods object
  var newTree = {};
  _.extend(newTree,treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
