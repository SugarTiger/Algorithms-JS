/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  var stack = [root]; // 保存节点
  var depthStack = [0]; // 保存节点深度
  var currentDepth = 0;
  var result = [];
  while (stack.length > 0) {
    root = stack.pop();
    currentDepth = depthStack.pop();
    if (!result[currentDepth]) {
      result[currentDepth] = []
    }
    result[currentDepth].push(root.val)
    if (root.right) {
      stack.push(root.right)
      depthStack.push(currentDepth + 1);
    }
    if (root.left) {
      stack.push(root.left)
      depthStack.push(currentDepth + 1);
    }
  }
  return result;
};

// 广度遍历
var BSF = function (root) {
  if (!root) return root;
  var queue = [root];
  var result = [];
  while (queue.length > 0) {
    root = queue.shift();
    result.push(root.val);
    if (root.left) {
      queue.push(root.left)
    }
    if (root.right) {
      queue.push(root.right)
    }
  }
  return result;
}

// 官方写法
var levelOrder = function (root) {
  const ret = [];
  if (!root) return ret;
  const q = [root];
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return ret;
};

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

levelOrder(new TreeNode(3, new TreeNode(9, new TreeNode(17)), new TreeNode(20, new TreeNode(15)))); // [[3],[9,20],[17,15]]
BSF(new TreeNode(3, new TreeNode(9, new TreeNode(17)), new TreeNode(20, new TreeNode(15))));
levelOrder(new TreeNode(3)); // [[3]]
BSF(new TreeNode(3));
levelOrder(new TreeNode(3, new TreeNode(1, new TreeNode(2), new TreeNode(2)), new TreeNode(1, new TreeNode(2), new TreeNode(2, new TreeNode(4))))); // [[3]]
BSF(new TreeNode(3, new TreeNode(1, new TreeNode(2), new TreeNode(2)), new TreeNode(1, new TreeNode(2), new TreeNode(2, new TreeNode(4)))));