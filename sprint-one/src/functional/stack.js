var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++

  };

  someInstance.pop = function() {
    var poped = storage[size-1];
    delete storage[size-1];
    size--
    return poped;
    
      };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
