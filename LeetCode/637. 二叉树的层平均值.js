/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 广度优先遍历
var averageOfLevels = function (root) {
  const queue = [root];
  const depthQueue = [1];
  let depth = 1;
  let count = 0;
  let sum = null;
  const ans = [];
  while (queue.length > 0) {
    if (sum === null) {
      sum = 0;
    }
    root = queue.shift();
    const nodeDepth = depthQueue.shift();
    if (nodeDepth !== depth) {
      ans.push(sum / count);
      depth = nodeDepth;
      count = 0;
      sum = 0;
    }
    count++;
    sum += root.val;
    if (root.left) {
      queue.push(root.left)
      depthQueue.push(nodeDepth + 1);
    }
    if (root.right) {
      queue.push(root.right)
      depthQueue.push(nodeDepth + 1);
    }
  }
  if (sum !== null) {
    ans.push(sum / count)
  }
  return ans;
};


// 深度优先遍历
var averageOfLevels = function (root) {
  const queue = [root];
  const dQueue = [0];
  const sums = [];
  const counts = [];
  while (queue.length > 0) {
    const d = dQueue.shift();
    root = queue.shift();
    if (!sums[d]) sums[d] = 0;
    if (!counts[d]) counts[d] = 0;
    sums[d] += root.val;
    counts[d]++;
    if (root.left) {
      queue.push(root.left)
      dQueue.push(d + 1);
    }
    if (root.right) {
      queue.push(root.right)
      dQueue.push(d + 1);
    }
  }
  // 手机记录
  const len = sums.length;
  const ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(sums[i] / counts[i])
  }
  return ans;
}


averageOfLevels(new TreeNode(0))

averageOfLevels(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}