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
// 广度优先遍历 时间复杂度O(n) 空间复杂度O(n)
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  const heightQueue = [1];
  let node = null;
  let height = 0;
  while (queue.length > 0) {
    node = queue.shift();
    height = heightQueue.shift();
    if (!node.left && !node.right) {
      return height;
    }
    if (node.left) {
      queue.push(node.left)
      heightQueue.push(height + 1)
    }
    if (node.right) {
      queue.push(node.right)
      heightQueue.push(height + 1)
    }
  }
  return height;

};