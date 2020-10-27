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
// 递归写法
var preorderTraversal = function (root) {
  var res = [];
  helper(root, res);
  return res;
};
var helper = function (root, res) {
  if (root) {
    res.push(root.val);
    helper(root.left, res)
    helper(root.right, res)
  }
}

// 迭代写法
var preorderTraversal = function (root) {
  const res = []
  if (!root) return res;
  const stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    res.push(root.val);
    if (root.right) {
      stack.push(root.right)
    }
    if (root.left) {
      stack.push(root.left)
    }
  }
  return res;
}