/**
 * @param {number} n
 * @return {number}
 */
// 递归
// 时间复杂度 O(2^n)
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2)
};

// 动态规划
// 时间复杂度 O(n) 空间复杂度 O(n)
var fib = function (n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n];
};

// 滚动-动态规划
// 时间复杂度 O(n) 空间复杂度 O(1)
var fib = function (n) {
  if (n === 0 || n === 1) return n;
  let dp1 = 0;
  let dp2 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp2 + dp1;
    dp1 = dp2;
    dp2 = temp;
  }
  return dp2;
};

fib(2);