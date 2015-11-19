var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  return newQueue;
};

var queueMethods = {
  enqueue: function(val){
    this[this.queueSize] = val;
    this.queueSize++;
  },

  dequeue: function(){
    var temp = this[0];
    delete this[0];
    for(var i = 1; i < this.queueSize; i++){
      this[i-1] = this[i];
      delete this[i];
    }
    this.queueSize--;
    return temp;
  },

  size: function(){
    return this.queueSize >= 0 ? this.queueSize : 0;
  }
};


