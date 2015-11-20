

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // if hashTable is undefined at index, then add a new object
  if (this._storage.get(index) === undefined) {
    var temp = {};
    temp[k] = v;
    this._storage.set(index, temp);
  }
  // if hashTable is defined at index, then augment existing object
  else {
    this._storage.get(index)[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  insert(): O(1), but hash function is O(n)
  retrieve(): O(1), but hash function is O(n)
  remove(): O(1), but hash function is O(n)
*/

