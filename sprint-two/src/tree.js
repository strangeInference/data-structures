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
  var found = false;

  // set up recursive function to find target in children
  var childSearch = function(children) {
    for (var i=0; i<children.length; i++) {
      if (children[i].value === target) {
        found = true;
      }
      if (children[i].children.length > 0) {
        childSearch(children[i].children);
      }
    }
  }

  childSearch(this.children);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
