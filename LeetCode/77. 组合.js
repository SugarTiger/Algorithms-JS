/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 参考子集的代码，符合k长度再push
var combine = function (n, k) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums[i - 1] = i;
  }
  const res = [];
  if (n === 0) return res;
  if (n === k) return [nums];
  var path = [];
  var depth = 0;
  dfs(nums, n, 0, depth, path, res, k);
  return res;
};
var dfs = function (nums, len, start, depth, path, res, k) {
  if (depth === len) {
    return;
  }
  if (path.length === k) {
    res.push([...path]);
    return;
  }
  for (let i = start; i < len; i++) {
    path.push(nums[i]);
    dfs(nums, len, i + 1, depth + 1, path, res, k);
    path.pop();
  }
}

combine(1, 1)
combine(2, 2)
combine(3, 3)
combine(4, 2)