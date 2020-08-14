/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 利用中序遍历
var kthSmallest = function (root, k) {
  var n = 0, stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    root = stack.pop();
    n++;
    if (n === k) {
      return root.val;
    }
    root = root.right
  }
  return 0;
};