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

// 递归写法
var isValidBST = function (root) {
  if (!root) return true;
  var min = -Infinity;
  var isBST = true;
  midOrder(root); // 中序遍历
  function midOrder(root) {
    if (!root) return;
    if (!isBST) return;
    midOrder(root.left)
    if (min < root.val) {
      min = root.val;
    } else {
      isBST = false;
    }
    midOrder(root.right)
  }
  return isBST;
}


// 非递归写法
// 根据二叉搜索数的特点，二叉搜索数的中序遍历是得到的节点是从小到大排序的，判断是否从小到大排序
var isValidBST = function (root) {
  if (!root) return true;
  var isBST = true;
  var min = -Infinity;
  // 中序遍历
  var stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root); // 收集左节点
      root = root.left;
    }
    root = stack.pop(); // 弹出栈中的左节点
    if (min < root.val) {
      min = root.val
    } else {
      isBST = false;
      break;
    }
    root = root.right; // 当前节点设置为右节点，接着继续收集左节点
  }
  return isBST;
}

// 如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树。
var isValidBST = function (root) {
  var a = isValidBSTHelp(root, -Infinity, Infinity);
  return a;
}

var isValidBSTHelp = function (root, lo, hi) {
  if (!root) return true;
  if (root.val <= lo || root.val >= hi) return false;
  return isValidBSTHelp(root.left, lo, root.val) && isValidBSTHelp(root.right, root.val, hi);
}




function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))
isValidBST(new TreeNode(5,
  new TreeNode(1), new TreeNode(4,
    new TreeNode(3), new TreeNode(6))))

