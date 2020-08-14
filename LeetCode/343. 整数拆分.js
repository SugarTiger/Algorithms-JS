/**
 * @param {number} n
 * @return {number}
 */

//  动态规划
// f(n) = max(f(n-i)*i); 其中i是 1 到n-1的整数
// f(1) = 1;
var integerBreak = function (n) {
  if (n < 1) return 0;
  var dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i < j; i++) {
      dp[j] = Math.max(dp[j], dp[j - i] * i, (j - i) * i);
    }
  }
  return dp[n];
};

// integerBreak(2); // 1   2 = 1 + 1, 1 × 1 = 1
// integerBreak(3); // 1   2 = 1 + 1, 1 × 1 = 1
// integerBreak(4); // 1   2 = 1 + 1, 1 × 1 = 1
// integerBreak(5); // 1   2 = 1 + 1, 1 × 1 = 1
integerBreak(6); // 1   2 = 1 + 1, 1 × 1 = 1
integerBreak(7); // 1   2 = 1 + 1, 1 × 1 = 1
integerBreak(8); // 1   2 = 1 + 1, 1 × 1 = 1
integerBreak(9); // 1   2 = 1 + 1, 1 × 1 = 1
integerBreak(10); // 36   10 = 3 + 3 + 4, 3 × 3 × 4 = 36