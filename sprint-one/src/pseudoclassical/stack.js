var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.stackSize] = val;
  this.stackSize++;
}

Stack.prototype.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
}


