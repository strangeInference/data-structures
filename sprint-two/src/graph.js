

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

  var fromConnections = this.nodeList[fromNodeIndex].connections;
  var toConnections = this.nodeList[toNodeIndex].connections;

  var fromConnectionsIndex;
  var toConnectionsIndex;

  _.each(fromConnections, function(node, i) {
    if (node.value === toNode) {
      //fromConnections = fromConnections.slice(0, i) + fromConnections.slice(i + 1);  
      fromConnectionsIndex = i;
    }
  });

  this.nodeList[fromNodeIndex].connections = fromConnections.slice(0, fromConnectionsIndex) + fromConnections.slice(fromConnectionsIndex + 1);
  
  _.each(toConnections, function(node, i) {
    if (node.value === fromNode) {
      //toConnections = toConnections.slice(0, i) + toConnections.slice(i + 1);  
      toConnectionsIndex = i;
    }
  });

  this.nodeList[toNodeIndex].connections = toConnections.slice(0, toConnectionsIndex) + toConnections.slice(toConnectionsIndex + 1);

  // find the fromNode
  // look through fromNode.connections to find toNode
  // remove toNode from fromNode.connections
  // look through toNode.connections to find fromNode
  // remove fromNode from toNode.connections

  // look through nodeList for both nodes

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


