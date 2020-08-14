/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// 深度优先遍历
var cloneGraph = function (node) {
  var map = new Map();
  var cloneNode = dfs(node, map)
  return cloneNode;
};
var dfs = function (node, map) {
  if (!node) return node;
  if (map.has(node.val)) {
    return map.get(node.val);
  }
  var cloneNode = new Node(node.val);
  map.set(cloneNode.val, cloneNode);
  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(dfs(neighbor, map));
  }
  return cloneNode;
}

// 广度优先遍历
var cloneGraph = function (node) {
  if (!node) return node;
  var map = new Map();
  var queue = [node];
  var root = null;
  while (queue.length > 0) {
    node = queue.shift();
    let cloneNode = map.get(node.val);
    if (!cloneNode) {
      cloneNode = new Node(node.val);
    }
    if (!root) {
      root = cloneNode;
    }
    for (let neighbor of node.neighbors) {
      if (map.has(neighbor.val)) {
        cloneNode.neighbors.push(map.get(neighbor.val));
      } else {
        let cloneNeighbor = new Node(neighbor.val);
        map.set(cloneNeighbor.val, cloneNeighbor)
        cloneNode.neighbors.push(cloneNeighbor);
        queue.push(neighbor)
      }
    }
    map.set(cloneNode.val, cloneNode)
  }
  return root;
};


function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};



var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
node1.neighbors.push(node2, node4)
node2.neighbors.push(node1, node3)
node3.neighbors.push(node2, node4)
node4.neighbors.push(node1, node3)

cloneGraph(node1)