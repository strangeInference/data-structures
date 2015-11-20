

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = [k, v];
  // if hashTable is undefined at index, then add a new object
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  // if hashTable is defined at index, then augment existing object
  this._storage.get(index).push(tupleArray);
  this._size++;
  if (this._size / this._limit > 0.75) {
    this.resize(Math.floor(this._limit * 2));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage.get(index), function(item) {
    if (item[0] == k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);
  _.each(storage, function(item, i) {
    if (item[0] == k) {
      storage = storage.slice(0,i) + storage.slice(i+1);
    }
  });
  this._storage.set(index, storage);
  this._size--;
  if (this._size / this._limit < 0.25) {
    this.resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype.resize = function(limit) {
  // iterate through storage and rerun the hash function with new limit
  var newHash = new HashTable(limit);
  for (var i=0; i<this._limit; i++) {
    if (this._storage.get(i) !== undefined) {
      for (var j=0; j<this._storage.get(i).length; j++) {
        newHash.insert(this._storage.get(i)[j][0], this._storage.get(i)[j][1]);
      }
    }
  }
  this._limit = limit;
  this._storage = newHash._storage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  insert(): O(1), but hash function is O(n)
  retrieve(): O(1), but hash function is O(n)
  remove(): O(1), but hash function is O(n)
*/

