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
var levelOrderBottom = function (root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  const depthQueue = [1];
  let currentDepth = 1, list = [];
  while (queue.length > 0) {
    root = queue.shift();
    const depth = depthQueue.shift();
    if (currentDepth !== depth) {
      currentDepth = depth;
      result.unshift(list)
      list = [];
    }
    list.push(root.val);
    if (root.left) {
      queue.push(root.left)
      depthQueue.push(depth + 1);
    }
    if (root.right) {
      queue.push(root.right)
      depthQueue.push(depth + 1);
    }
  }
  if(list.length > 0){
    result.unshift(list)
  }
  return result;

};


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


levelOrderBottom(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))