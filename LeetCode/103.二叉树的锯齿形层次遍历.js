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
// 循环遍历
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  var result = [];
  var queue = [root]; // 双端队列
  var indexQueue = [0];
  var count = 1; // 记录每一层有多少个节点，为0的时候需要转换方向
  var reverseCount = 0; // 记录每一层有多少个节点，为0的时候需要转换方向
  var direction = 1; // 方向 1 是正向，0 是反向
  while (queue.length > 0) {
    let i;
    if (direction === 1) {
      root = queue.pop(); // 取出队列中的尾部节点
      count--;
      i = indexQueue.pop(); // 头部节点对应的层数
      if (root.left) {
        queue.unshift(root.left);  // 下一层的节点放置在头部
        indexQueue.unshift(i + 1);
        reverseCount++;
      }
      if (root.right) {
        queue.unshift(root.right)
        indexQueue.unshift(i + 1);
        reverseCount++;
      }
      // 重置方向
      if (count === 0) {
        direction = 0;
      }
    } else {
      root = queue.shift(); // 从头部取出节点
      reverseCount--;
      i = indexQueue.shift();
      if (root.right) {
        queue.push(root.right) // 下一层节点放在队尾
        indexQueue.push(i + 1);
        count++;
      }
      if (root.left) {
        queue.push(root.left)
        indexQueue.push(i + 1);
        count++;
      }
      // 重置方向
      if (reverseCount === 0) {
        direction = 1;
      }
    }
    if (!result[i]) {
      result[i] = [];
    }
    result[i].push(root.val);

  }
  return result;
};



function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

zigzagLevelOrder(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7))))