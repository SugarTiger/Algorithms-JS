// 全排列
var permute = function (nums) {
  // 首先是特判
  var len = nums.length;
  // 使用一个动态数组保存所有可能的全排列
  var res = [];
  if (len === 0) {
    return [res];
  }
  var used = Array(len).fill(false); // boolean 数组，// 保存那些数被用过，跳过使用的
  var path = [];
  // 深度遍历
  dfs(nums, len, 0, path, used, res)
  return res;
}

var dfs = function (nums, len, depth, path, used, res) {
  if (depth === len) { // 遍历到最底层就把路径添加到res里面
    res.push([...path]);
    return;
  }
  for (var i = 0; i < len; i++) {
    if (!used[i]) {
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, len, depth + 1, path, used, res)
      // 注意：这里是状态重置，是从深层结点回到浅层结点的过程，代码在形式上和递归之前是对称的
      used[i] = false;
      path.pop();
    }
  }
}


permute([])
permute([1])
permute([1, 2])
permute([1, 2, 3])
permute([1, 2, 3, 4])