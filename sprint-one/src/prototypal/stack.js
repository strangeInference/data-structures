var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {
  push: function(val) {
    this[this.stackSize] = val;
    this.stackSize++;
  },

  pop: function() {
    var temp = this[this.stackSize-1];
    delete this[this.stackSize-1];
    this.stackSize--;
    return temp;
  },

  size: function(){
    return this.stackSize >= 0 ? this.stackSize : 0;
  }
};


