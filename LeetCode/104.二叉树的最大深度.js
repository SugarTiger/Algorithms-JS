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
// 递归版
// var maxDepth = function (root) {
//   if (!root) return 0;
//   var leftH = 0, rightH = 0;
//   if (root.left) {
//     leftH = maxDepth(root.left)
//   }
//   if (root.right) {
//     rightH = maxDepth(root.right)
//   }
//   return Math.max(leftH, rightH) + 1;
// };

// 非递归版
var maxDepth = function (root) {
  if (!root) return 0;
  var stack = [root]; // 保存节点
  var depthStack = [1]; // 保存节点深度
  var currentDepth = 1;
  var depth = 0;
  while (stack.length > 0) {
    root = stack.pop();
    currentDepth = depthStack.pop();
    if (currentDepth > depth) depth = currentDepth;
    if (root.right) {
      stack.push(root.right)
      depthStack.push(currentDepth + 1);
    }
    if (root.left) {
      stack.push(root.left)
      depthStack.push(currentDepth + 1);
    }
  }
  return depth;
};



function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

maxDepth(new TreeNode(3, new TreeNode(9, new TreeNode(17)), new TreeNode(20, new TreeNode(15))))