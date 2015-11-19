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

Stack.prototype.pop = function() {
  var temp = this.storage[this.stackSize-1];
  delete this.storage[this.stackSize-1];
  this.stackSize--;
  return temp;
}

Stack.prototype.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
}


