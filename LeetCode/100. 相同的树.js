/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归求法
var isSameTree = function (p, q) {
  var result = isSameTreeHelper(p, q);
  return result;
};
// 如果两颗树相同，那么树的左右子树都相同
var isSameTreeHelper = function (p, q) {
  if (p === null && q === null) return true; // 同时为null则相同
  if (p === null || q === null) return false; // 一个为null，则不同
  return p.val === q.val && isSameTreeHelper(p.left, q.left) && isSameTreeHelper(p.right, q.right)
}

// 迭代法,广度优先遍历
var isSameTree = function (p, q) {
  var queue = [p, q];
  while (queue.length > 0) {
    p = queue.shift();
    q = queue.shift();
    if (p === null && q === null) continue; // 同时为null则相同
    if (p === null || q === null) return false; // 一个为null，则不同
    if (p.val !== q.val) return false;
    queue.push(p.left, q.left, p.right, q.right);
  }
  return true;
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

isSameTree(new TreeNode(12, null, new TreeNode(-60)), new TreeNode(12, null, new TreeNode(70)))