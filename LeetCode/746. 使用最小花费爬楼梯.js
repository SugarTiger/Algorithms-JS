/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划
// dp[i] 表示达到下标i阶楼梯的最小花费
// 由于可以选择下标 0 或 1 作为初始阶梯，因此有 dp[0]=dp[1]=0。
// 从 i-1 花费了 cost[i-1] 到 i 或者  从 i-2 花费了 cost[i-2] 到 i
// 从  2<=i <= n 开始 dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const dp = [0, 0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[len];
};

// 优化空间复杂度
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  let dp1 = 0;
  let dp2 = 0;
  for (let i = 2; i <= len; i++) {
    let dpTemp = Math.min(dp1 + cost[i - 1], dp2 + cost[i - 2]);
    dp2 = dp1;
    dp1 = dpTemp;
  }
  return dp1;
}



minCostClimbingStairs([10, 15, 20]); // 15
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]); // 6