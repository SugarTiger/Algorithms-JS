/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length;
  const res = [];
  if (len === 0) return res;
  const set = new Set();
  dfs(candidates, len, res, [], 0, 0, target, set);
  return res;
};

var dfs = function (candidates, len, res, list, start, sum, target, set) {
  if (sum > target) return;
  if (sum === target && start > 0) {
    const tempList = [...list];
    const key = tempList.sort().join('')
    if (!set.has(key)) {
      set.add(key)
      res.push(tempList);
    }
    return;
  }
  for (let i = 0; i < len; i++) {
    list.push(candidates[i]);
    sum += candidates[i];
    dfs(candidates, len, res, list, start + 1, sum, target, set);
    sum -= candidates[i];
    list.pop();
  }
}


combinationSum([2, 3, 5], 8)
combinationSum([2, 3, 6, 7], 7)