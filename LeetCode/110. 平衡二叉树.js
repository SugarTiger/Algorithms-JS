/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自顶向下的递归
// 时间复杂度O(n^2) 空间复杂度O(n)
var isBalanced = function (root) {
  if (!root) return true;
  var map = new Map();
  var ans = isBalancedHelper(root, map);
  return ans;
};

var isBalancedHelper = function (root, map) {
  if (!root) return true;
  var diff = Math.abs(getDepth(root.left, map) - getDepth(root.right, map));
  if (diff > 1) {
    return false;
  }
  // 左右子树的高度茶不大于1，而且，左右子树也是平衡二叉树
  return true && isBalancedHelper(root.left, map) && isBalancedHelper(root.right, map);
}

// 获取树的深度
var getDepth = function (root, map) {
  if (map.has(root)) {
    return map.get(root)
  }
  if (!root) {
    map.set(root, 0);
    return 0;
  }
  var depth = Math.max(getDepth(root.left, map), getDepth(root.right, map)) + 1;
  map.set(root, depth);
  return depth;
}

// 自底向上的递归  优化 getDepth 函数的调用次数
// 自底向上递归的做法类似于后序遍历
// 时间复杂度O(n) 空间复杂度O(n)
var isBalanced = function (root) {
  return getDepth(root) >= 0;
};

var getDepth = function (root) {
  if (!root) return 0;
  const leftHeight = getDepth(root.left);
  const rightHeight = getDepth(root.right);
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
