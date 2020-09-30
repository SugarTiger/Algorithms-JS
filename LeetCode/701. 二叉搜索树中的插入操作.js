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
 * @param {number} val
 * @return {TreeNode}
 */
// 递归 时间复杂度 O(log2n) 空间复杂度 O(log2n)
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  insertIntoBSTHelper(root, val)
  return root;
};
var insertIntoBSTHelper = function (root, val) {
  if (root.val > val) {
    if (root.left) {
      insertIntoBSTHelper(root.left, val);
    } else {
      root.left = new TreeNode(val);
    }
  } else if (root.val < val) {
    if (root.right) {
      insertIntoBSTHelper(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  }
}