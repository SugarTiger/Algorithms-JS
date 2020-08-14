/**
 * @param {number[][]} grid
 * @return {number}
 */
// 递归法
var minPathSum = function (grid) {
  var n = grid.length;
  if (n === 0) return 0;
  var m = grid[0].length;
  var res = minPathSumHelp(grid, n - 1, m - 1, n, m);
  return res;
};
var minPathSumHelp = function (grid, i, j, n, m) {
  if (i === 0 && j === 0) return grid[0][0];
  if (i < 0 || j < 0) {
    return Infinity;
  }
  return Math.min(minPathSumHelp(grid, i - 1, j, n, m), minPathSumHelp(grid, i, j - 1, n, m)) + grid[i][j];
}


// 动态规划法 时间复杂度O(n*m) 空间复杂度O(n*m)
var minPathSum = function (grid) {
  var n = grid.length;
  if (n === 0) return 0;
  var m = grid[0].length;
  var dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = grid[i][j];
      } else if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (i > 0 && j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
    }
  }
  return dp[n - 1][m - 1];
};

// 动态规划法 优化空间 滚动数组  时间复杂度O(n*m) 空间复杂度O(m)
var minPathSum = function (grid) {
  var n = grid.length;
  if (n === 0) return 0;
  var m = grid[0].length;
  var dp = [[], []];
  for (let i = 0; i < n; i++) {
    // 滚动数组，1 项是最新的值
    dp[0] = dp[1];
    dp[1] = [];
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[1][0] = grid[i][j];
      } else if (i === 0 && j > 0) {
        dp[1][j] = dp[1][j - 1] + grid[i][j]
      } else if (i > 0 && j === 0) {
        dp[1][0] = dp[0][0] + grid[i][j]
      } else {
        dp[1][j] = Math.min(dp[0][j], dp[1][j - 1]) + grid[i][j]
      }
    }
  }
  return dp[1][m - 1];
};

minPathSum([])
minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]); // 7
minPathSum([[1, 2, 3], [4, 5, 6], [9, 8, 5]]); // 17
minPathSum([[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]]); // 17