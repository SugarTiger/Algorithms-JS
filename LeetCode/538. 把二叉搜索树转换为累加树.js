/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 利用二叉搜索树中序遍历的性质
var convertBST = function (root) {
  if (!root) return root;
  let sum = 0;
  let stack = [root]
  while (stack.length > 0) {
    const node = stack.pop();
    sum += node.val;
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  // 中序遍历
  let node = root;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    const temp = node.val;
    node.val = sum;
    sum -= temp;
    node = node.right;
  }
  return root;
};

// 反中序遍历
var convertBST = function (root) {
  let sum = 0;
  var midSort = function (node) {
    if (!node) return;
    midSort(node.right);
    temp = node.val;
    node.val = node.val + sum;
    sum += temp;
    midSort(node.left);
  }
  midSort(root)
  return root;
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

convertBST(null)
convertBST(new TreeNode(5))
convertBST(new TreeNode(5, null, new TreeNode(13)))
convertBST(new TreeNode(5, new TreeNode(2), new TreeNode(13)))