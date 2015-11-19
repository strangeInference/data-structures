var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.queueSize = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(val){
    this[this.queueSize] = val;
    this.queueSize++;
  },

  size: function(){
    return this.queueSize >=0 ? this.queueSize : 0;
  }
};


