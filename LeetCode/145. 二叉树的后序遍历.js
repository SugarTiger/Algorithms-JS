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
 * @return {number[]}
 */
// 递归
var postorderTraversal = function (root) {
  const res = [];
  helper(root, res)
  return res;
};
var helper = function (root, res) {
  if (root) {
    helper(root.left, res)
    helper(root.right, res)
    res.push(root.val)
  }
}

// 非递归
var postorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const stack1 = [root];
  while (stack1.length > 0) {
    root = stack1.pop();
    res.unshift(root.val)
    if (root.left) {
      stack1.push(root.left)
    }
    if (root.right) {
      stack1.push(root.right)
    }
  }
  return res;
};