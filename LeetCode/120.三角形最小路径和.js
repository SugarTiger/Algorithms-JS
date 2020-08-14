/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 动态规划法
var minimumTotal = function (triangle) {
  var n = triangle.length;
  var dp = [[triangle[0][0]]]; // 状态保存，dp[i][j] 为从三角形顶点到达点(i,j)的最小路径和, 顶点的路径和就是等于顶点 triangle[0][0]
  var min = dp[0][0];
  for (var i = 1; i < n; i++) {
    var m = triangle[i].length;
    dp[i] = [];
    min = Infinity;
    for (var j = 0; j < m; j++) {
      // 计算状态
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + triangle[i][0]; // 如果 i 不等于0，，j等于0，则 dp[i][j] 就是上一层的j=0的最小路径和加上当前节点值 triangle[i][j]
      } else if (j === m - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]; // 如果 i 不等于0，，j等于末尾的节点，则 dp[i][j] 就是上一层的末尾节点的最小路径和加上当前节点值 triangle[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]; // 如果 i 不等于0，，j不等于0，则 dp[i][j] 就是上一层的j和 j-1的最小路径和 的最小值 加上当前节点值 triangle[i][j]
      }
      if (i === n - 1 && min > dp[i][j]) { // 计算最后一层最小值的最小值
        min = dp[i][j];
      }
    }
  }
  return min;
};

minimumTotal([[2]])