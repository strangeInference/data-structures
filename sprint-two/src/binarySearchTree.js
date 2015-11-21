var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value){
  var subFunction = function(tree) {
    if (value > tree.value) {
      if (tree.right === null) {
        tree.right = BinarySearchTree(value);
      }
      else {
        subFunction(tree.right);
      }
    }
    else {
      if (tree.left === null) {
        tree.left = BinarySearchTree(value);
      }
      else {
        subFunction(tree.left);
      }
    }
  }
  subFunction(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var subFunction = function(tree) {
    if (value === tree.value) {
      result = true;
    }
    else if (value < tree.value && tree.left !== null) {
      subFunction(tree.left);
    }
    else if (value > tree.value && tree.right !== null) {
      subFunction(tree.right);
    }
  }
  subFunction(this);
  return result;

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var subFunction = function(tree) {
    cb(tree.value);
    if (tree.left !== null) {
      subFunction(tree.left);
    }
    if (tree.right !== null) {
      subFunction(tree.right);
    }
  }
  subFunction(this);
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var tree = [this];
  var subFunction = function(children) {
    // create new children array
    var newChildren = [];
    // iterate over the trees in the children
    for (var i=0; i<children.length; i++) {
      // callback(each child)
      cb(children[i].value);
      // add each child to new children array
      if (children[i].left !== null) {
        newChildren.push(children[i].left);
      }
      if (children[i].right !== null) {
        newChildren.push(children[i].right);
      }
    }

    // subfunction(children)
    if (newChildren.length > 0) {
      subFunction(newChildren);
    }

  };  
  subFunction(tree);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
/* insert(): O(log n), worst case is O(n)
 * contains(): O(log n), worst case is O(n)
 * depthFirstLog(): O(n)
*/ 
