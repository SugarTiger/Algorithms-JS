/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  递归
var PredictTheWinner = function (nums) {
  return helper(nums, 0, nums.length - 1) >= 0;
};
var helper = function (nums, start, end) {
  if (start === end) {
    return nums[start];
  }
  let scoreStart = nums[start] - helper(nums, start + 1, end); // 选择第一个
  let scoreEnd = nums[end] - helper(nums, start, end - 1); // 选择最后一个
  return Math.max(scoreStart, scoreEnd);
}

// 动态规划
// 定义二维数组 dp，其行数和列数都等于数组的长度，dp[i][j] 表示当数组剩下的部分为下标 i 到下标 j 时，当前玩家与另一个玩家的分数之差的最大值，注意当前玩家不一定是先手。
var PredictTheWinner = function (nums) {
  const length = nums.length;
  const dp = [];
  for (let i = 0; i < length; i++) {
    dp[i] = [];
    dp[i][i] = nums[i];
  }
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][length - 1] >= 0;
}

PredictTheWinner([1, 5, 2]); // false
PredictTheWinner([1, 5, 233, 7]); // true
PredictTheWinner([5, 5, 5, 5]); // true
PredictTheWinner([5]); // true
PredictTheWinner([5, 6]); // true