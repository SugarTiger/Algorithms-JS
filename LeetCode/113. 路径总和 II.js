/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

//  深度优先遍历
var pathSum = function (root, sum) {
  const ans = [];
  if (!root) return ans;
  let s = 0;
  var dfs = function (node, path) {
    path.push(node.val)
    s += node.val
    if (!node.left && !node.right && sum === s) {
      ans.push([...path]);
      path.pop(); // 回溯
      s -= node.val
      return;
    }
    if (node.left) {
      dfs(node.left, path)
    }
    if (node.right) {
      dfs(node.right, path)
    }
    path.pop(); // 回溯
    s -= node.val
  }
  dfs(root, [])
  return ans;
};


// 广度优先遍历
var pathSum = function (root, sum) {
  const ans = [];
  if (!root) return ans;
  const queue = [root];
  const map = new Map();
  map.set(root, null); // 根节点的父节点是null
  var getPath = function (node) {
    var path = [];
    let s = 0;
    while (map.has(node) && node) {
      s += node.val;
      path.unshift(node.val);
      node = map.get(node)
    }
    if (s === sum) {
      ans.push(path)
    }
  }
  while (queue.length > 0) {
    root = queue.shift();
    if (!root.left && !root.right) {
      getPath(root)
    }
    if (root.left) {
      queue.push(root.left);
      map.set(root.left, root);
    }
    if (root.right) {
      queue.push(root.right);
      map.set(root.right, root);
    }
  }
  return ans;
}


//  Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


pathSum(new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1)))), 22)