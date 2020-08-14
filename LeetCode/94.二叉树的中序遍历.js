/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归写法
var inorderTraversal = function (root) {
  var result = [];
  var midOrder = function (root) {
    if (!root) return;
    midOrder(root.left);
    result.push(root.val);
    midOrder(root.right);
  }
  midOrder(root)
  return result;
};

// 遍历写法
var inorderTraversal = function (root) {
  var stack = []; // 辅助栈
  var result = [];
  while (stack.length > 0 || root) {
    // 收集树的左节点，如果root 是右边节点的话，会继续收集
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop(); // 栈的头部就是最左边的节点或者中间节点
    result.push(root.val);
    root = root.right; // 上面的while会判断root.right,所以直接赋值就好
  }
  return result;
}