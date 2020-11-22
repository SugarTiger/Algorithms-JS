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
// 迭代法 时间复杂度O(n) 空间复杂度O(n)
var sumNumbers = function (root) {
  let sum = 0;
  if (!root) return sum;
  const stack = [root];
  const nums = [root.val];
  while (stack.length > 0) {
    let node = stack.pop();
    let num = nums.pop();
    if (!node.right && !node.left) {
      sum += num;
    } else {
      if (node.right) {
        stack.push(node.right);
        nums.push(num * 10 + node.right.val)
      }
      if (node.left) {
        stack.push(node.left);
        nums.push(num * 10 + node.left.val)
      }
    }
  }
  return sum;
};

// 递归写法
var sumNumbers = function (root) {
  let sum = helper(root, 0);
  return sum;
};
var helper = function (root, sum) {
  if (!root) return sum;
  if (root.left && root.right) {
    return helper(root.left, sum * 10 + root.val) + helper(root.right, sum * 10 + root.val)
  } else if (root.left) {
    return helper(root.left, sum * 10 + root.val)
  } else if (root.right) {
    return helper(root.right, sum * 10 + root.val)
  } else {
    return sum * 10 + root.val;
  }
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))); // 25
sumNumbers(new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0))); // 1026