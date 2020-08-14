/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 递归版
var buildTree = function (preorder, inorder) {
  var root = buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
  return root;
};
var buildTreeHelper = function (preorder, pStart, pEnd, inorder, iStart, iEnd) {
  if (pEnd - pStart < 0 || iEnd - iStart < 0) return null;
  var rootVal = preorder[pStart]; // 前序遍历的开头就是根节点
  var rootIndexInInorder = inorder.findIndex(item => (item === rootVal)); // 找出根节点在中序遍历中的索引位置
  var root = new TreeNode(rootVal); // 实例化根节点
  var leftLen = rootIndexInInorder - iStart; // 根节点的索引减去中序遍历开始的位置，得到左子树的长度
  var leftPStart = pStart + 1; // 前序遍历的索引加上1就是左子树的开始位置
  var leftPEnd = leftPStart + leftLen - 1; // 前序遍历的索引开始的位置，加上左子树的长度，就是左子树前序遍历的结束位置
  var leftIEnd = rootIndexInInorder - 1;
  var rightPStart = leftPEnd + 1;
  var rightIStart = rootIndexInInorder + 1;
  root.left = buildTreeHelper(preorder, leftPStart, leftPEnd, inorder, iStart, leftIEnd)
  root.right = buildTreeHelper(preorder, rightPStart, pEnd, inorder, rightIStart, iEnd)
  return root;
}


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])

buildTree([2, 1, 3], [1, 2, 3])
buildTree([2, 1], [1, 2])
buildTree([2], [2])