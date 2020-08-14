/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var rob = function (root) {
  var sum = robHelper(root);
  return sum;
};

var robHelper = function (root) {
  if (!root) return 0;
  var sum1 = root.val; // 偷根节点
  var sum2 = robHelper(root.left) + robHelper(root.right); // 不偷根节点
  if (root.left) {
    sum1 += robHelper(root.left.left) + robHelper(root.left.right)
  }
  if (root.right) {
    sum1 += robHelper(root.right.left) + robHelper(root.right.right)
  }
  return Math.max(sum1, sum2)
}

// 后序遍历+动态规划，优化时间复杂度
var rob = function (root) {
  if (!root) return 0;
  var stackA = [root];
  var stackB = [];
  var node = null;
  while (stackA.length > 0) {
    node = stackA.pop();
    stackB.push(node);
    if (node.left) stackA.push(node.left)
    if (node.right) stackA.push(node.right)
  }
  var map = new Map();
  map.set(null, 0);
  while (stackB.length > 0) {
    node = stackB.pop();
    let sum1 = node.val;
    let sum2 = map.get(node.left) + map.get(node.right)
    if (node.left) {
      sum1 += map.get(node.left.left) + map.get(node.left.right)
    }
    if (node.right) {
      sum1 += map.get(node.right.left) + map.get(node.right.right)
    }
    map.set(node, Math.max(sum1, sum2))
  }
  return map.get(root);
};

// 递归后续遍历+动态规划
var rob = function (root) {
  var map = new Map();
  map.set(null, 0);
  dfs(root, map);
  return map.get(root);
}
var dfs = function (node, map) {
  if (!node) return;
  dfs(node.left, map)
  dfs(node.right, map)
  let sum1 = node.val;
  let sum2 = map.get(node.left) + map.get(node.right)
  if (node.left) {
    sum1 += map.get(node.left.left) + map.get(node.left.right)
  }
  if (node.right) {
    sum1 += map.get(node.right.left) + map.get(node.right.right)
  }
  map.set(node, Math.max(sum1, sum2))
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

rob(new TreeNode(3, new TreeNode(2, null, new TreeNode(3)), new TreeNode(3, null, new TreeNode(1))));
rob(new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(3)), new TreeNode(5, null, new TreeNode(1))));