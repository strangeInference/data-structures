

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = [k, v];
  // if hashTable is undefined at index, then add a new object
  if (this._storage.get(index) === undefined) {
    //tupleArrar.push([])
    //this._storage.set(index, );
    this._storage.set(index, []);
  }
  // if hashTable is defined at index, then augment existing object
  /*
  else {
    this._storage.get(index)[k] = v;
  }*/
  this._storage.get(index).push(tupleArray);
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  insert(): O(1), but hash function is O(n)
  retrieve(): O(1), but hash function is O(n)
  remove(): O(1), but hash function is O(n)
*/

