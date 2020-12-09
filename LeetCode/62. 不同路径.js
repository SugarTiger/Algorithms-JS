/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 时间复杂度 O(n*m) 空间复杂度O(m*n)
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0
  var dp = [];
  for (var i = 0; i < m; i++) {
    dp[i] = [];
    for (var j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = 1;
      } else if (i === 0) {
        dp[0][j] = dp[0][j - 1];
      } else if (j === 0) {
        dp[i][0] = dp[i - 1][0];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1]
};

// 优化空间复杂度成 O(n)
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0
  var dp1 = [];
  var dp2 = [];
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp2[0] = 1;
      } else if (i === 0) {
        dp2[j] = dp2[j - 1];
      } else if (j === 0) {
        dp2[0] = dp1[0];
      } else {
        dp2[j] = dp1[j] + dp2[j - 1];
      }
    }
    // 调换
    let temp = dp2;
    dp2 = dp1
    dp1 = temp;
  }
  return dp1[n - 1]
};

// 再优雅一点
// 时间复杂度 O(m*n) 空间复杂度O(n)
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0;
  let dp = [];
  let pre = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    dp[0] = 1;
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j - 1] + pre[j];
    }
    pre = dp;
    dp = [];
  }
  return pre[n - 1];
};

// 组合数学  时间复杂度O(min(n,m)) 空间复杂度 O(1)
var uniquePaths = function(m, n) {
  let ans = 1;
  for (let x = n, y = 1; y < m; ++x, ++y) {
      ans = Math.floor(ans * x / y);
  }
  return ans;
};

uniquePaths(3, 2)
uniquePaths(7, 3)