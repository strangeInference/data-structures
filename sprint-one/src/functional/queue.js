var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    delete storage[0];
    for (var index in storage) {
      storage[index-1] = storage[index];
      delete storage[index];
    }
    if (size > 0) {
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    return size > 0 ? size : 0;
  };

  return someInstance;
};
