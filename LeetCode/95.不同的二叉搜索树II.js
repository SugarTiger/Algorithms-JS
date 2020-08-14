/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return generateTreesHelper(1, n);
};
function generateTreesHelper(start, end) {
  var allTrees = [];
  if (start > end) {
    allTrees.push(null)
    return allTrees;
  }

  // 枚举可行根节点
  for (var i = start; i <= end; i++) {
    // 获得所有可行的左子树集合
    var leftTrees = generateTreesHelper(start, i - 1);
    // 获得所有可行的右子树集合
    var rightTrees = generateTreesHelper(i + 1, end);
    // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
    for (let leftNode of leftTrees) {
      for (let rightNode of rightTrees) {
        var currTree = new TreeNode(i);
        currTree.left = leftNode;
        currTree.right = rightNode;
        allTrees.push(currTree);
      }
    }
  }
  return allTrees;
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}