

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
};
var GraphNode = function(value){
 this.value = value;
 this.connections = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var temp = new GraphNode(node);
  this.nodeList.push(temp);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeList.length; i++){
    if(this.nodeList[i].value === node){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === node){
      this.nodeList = this.nodeList.slice(0, i) + this.nodeList.slice(i + 1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  _.each(this.nodeList, function(node) {
      if (node.value === fromNode) {
        _.each(node.connections, function(edge) {
          if (edge.value === toNode) {
            found = true;
          }
        });
      }
    });
  return found;
};


// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromNodeIndex;
  var toNodeIndex;

  // find indices of fromNode and toNode
  _.each(this.nodeList, function(node, i) {
    if (node.value === fromNode) {
      fromNodeIndex = i;
    }
    if (node.value === toNode) {
      toNodeIndex = i;
    }
  });
  this.nodeList[fromNodeIndex].connections.push(this.nodeList[toNodeIndex]);
  this.nodeList[toNodeIndex].connections.push(this.nodeList[fromNodeIndex]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex;
  var toNodeIndex;
  // find indices of fromNode and toNode
  _.each(this.nodeList, function(node, i) {
    if (node.value === fromNode) {
      fromNodeIndex = i;
    }
    if (node.value === toNode) {
      toNodeIndex = i;
    }
  });

  // variables to store connection lists to avoid typing it all out repeatedly
  var fromConnections = this.nodeList[fromNodeIndex].connections;
  var toConnections = this.nodeList[toNodeIndex].connections;

  // find indices of opposite nodes in connection lists
  var fromConnectionsIndex;
  var toConnectionsIndex;

  _.each(fromConnections, function(node, i) {
    if (node.value === toNode) {
      fromConnectionsIndex = i;
    }
  });

  _.each(toConnections, function(node, i) {
    if (node.value === fromNode) {
      toConnectionsIndex = i;
    }
  });

  // remove nodes from connection lists
  this.nodeList[fromNodeIndex].connections = fromConnections.slice(0, fromConnectionsIndex) + fromConnections.slice(fromConnectionsIndex + 1);
  this.nodeList[toNodeIndex].connections = toConnections.slice(0, toConnectionsIndex) + toConnections.slice(toConnectionsIndex + 1);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeList, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/* addNode(): O(1),
   contains(): O(n),
   removeNode(): O(n),
   hasEdge(): O(n*m),
   addEdge(): O(n),
   removeEdge(): O(n),
   forEachNode(): O(n), depending on the callback function.
*/

