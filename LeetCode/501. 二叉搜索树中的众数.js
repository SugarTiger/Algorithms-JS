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
// 哈希表法  时间复杂度O(n) 空间复杂度O(n)
var findMode = function (root) {
  const res = [];
  const stack = [];
  const hash = new Map();
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    root = stack.pop();
    if (!hash.has(root.val)) {
      hash.set(root.val, 0);
    }
    hash.set(root.val, hash.get(root.val) + 1);
    root = root.right;
  }
  let maxCount = 0;
  for (let item of hash) {
    if (item[1] > maxCount) {
      maxCount = item[1]; // 求出最大的次数
    }
  }
  // 收集和最大次数一样的数字
  for (let item of hash) {
    if (item[1] === maxCount) {
      res.push(item[0])
    }
  }
  return res;
};

// 不需要hash表的遍历 时间复杂度O(n) 空间复杂度O(n)
var findMode = function (root) {
  let answer = [];
  const stack = [];
  let base = 0, count = 0, maxCount = 0;
  var update = function (x) {
    // 如果当前的数字和之前记录的数字是相同的，则次数加一，如果不同，则次数恢复为1，然后记录的数字更新为当前数子
    if (x === base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    // 如果当前的次数和记录到的最大次数相同
    if (count === maxCount) {
      answer.push(base); // 收集可能的众数
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base]; // 之前收集到的清空
    }
  }
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    root = stack.pop();
    update(root.val)
    root = root.right;
  }
  return answer;
}



function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

findMode(new TreeNode(1, null, new TreeNode(2, new TreeNode(2), new TreeNode(3, new TreeNode(3)))))
