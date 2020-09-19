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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  if (!root) return sum;
  const stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    if (root.right) {
      stack.push(root.right)
    }
    if (root.left) {
      if(!root.left.left && !root.left.right){
        sum += root.left.val;
      }
      stack.push(root.left)
    }
  }
  return sum;
};