/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var len = nums.length;
  var res = []
  if (len === 0) return res;
  var path = [];
  var depth = 0;
  dfs(nums, len, 0, depth, path, res);
  return res;
};
// 深度遍历
function dfs(nums, len, start, depth, path, res) {
  if (depth === len) {
    return;
  }
  res.push([...path]);
  for (var i = start; i < len; i++) {
    path.push(nums[i]);
    dfs(nums, len, i + 1, depth + 1, path, res)
    path.pop();
  }
}


subsets([1, 2, 3]) // [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]