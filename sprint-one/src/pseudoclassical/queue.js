var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.queueSize] = val;
  this.queueSize++;
}

Queue.prototype.size = function() {
  return this.queueSize >= 0 ? this.queueSize : 0;
};


