/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const len = candidates.length;
  const res = [];
  const nums = [];
  const set = new Set();
  var dfs = function (start, depth, sum) {
    if (sum > target) return;
    if (sum === target) {
      const tempNums = nums.slice(0);
      const key = tempNums.sort().join('');
      if (!set.has(key)) {
        set.add(key);
        res.push(tempNums);
      }
      return;
    }
    if (depth === len) return;
    for (let i = start; i < len; i++) {
      nums.push(candidates[i]);
      sum += candidates[i];
      dfs(i + 1, depth + 1, sum)
      sum -= candidates[i];
      nums.pop();
    }
  }
  dfs(0, 0, 0);
  return res;
};


combinationSum2([1], 1);
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
combinationSum2([2, 5, 2, 1, 2], 5);