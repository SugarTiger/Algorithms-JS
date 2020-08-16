/**
 * @param {number[][]} matrix
 * @return {number}
 */

//  暴力法，深度优先遍历
var longestIncreasingPath = function (matrix) {
  var n = matrix.length;
  if (n === 0) return 0;
  var m = matrix[0].length;
  var max = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      var t = dfs(matrix, i, n, j, m, 1);
      if (t > max) {
        max = t;
      }
    }
  }
  return max;
};

// 往上，下，左，右四个方向移动
var dfs = function (matrix, i, n, j, m, max) {
  var temp = matrix[i][j];
  var max1 = max;
  var max2 = max;
  var max3 = max;
  var max4 = max;
  if (matrix[i - 1] && matrix[i][j] < matrix[i - 1][j]) {
    matrix[i][j] = false;
    max1 = dfs(matrix, i - 1, n, j, m, max + 1);
    matrix[i][j] = temp;
  }
  if (matrix[i + 1] && matrix[i][j] < matrix[i + 1][j]) {
    matrix[i][j] = false;
    max2 = dfs(matrix, i + 1, n, j, m, max + 1);
    matrix[i][j] = temp;
  }
  if (matrix[i][j] < matrix[i][j - 1]) {
    matrix[i][j] = false;
    max3 = dfs(matrix, i, n, j - 1, m, max + 1);
    matrix[i][j] = temp;
  }
  if (matrix[i][j] < matrix[i][j + 1]) {
    matrix[i][j] = false;
    max4 = dfs(matrix, i, n, j + 1, m, max + 1);
    matrix[i][j] = temp;
  }
  return Math.max(max1, max2, max3, max4);
}

// 优化：方法一：记忆化深度优先搜索
var longestIncreasingPath = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  var rows = matrix.length;
  var columns = matrix[0].length;
  var memo = [];
  for (var i = 0; i < rows; i++) {
    memo[i] = Array(columns).fill(0)
  }
  var ans = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      ans = Math.max(ans, dfs(matrix, i, rows, j, columns, memo))
    }
  }
  return ans;
}

var dfs = function (matrix, row, rows, column, columns, memo) {
  if (memo[row][column]!==0) {
    return memo[row][column];
  }
  memo[row][column]++;
  var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let dir of dirs) {
    var newRow = row + dir[0], newColumn = column + dir[1];
    if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && matrix[newRow][newColumn] > matrix[row][column]) {
      memo[row][column] = Math.max(memo[row][column], dfs(matrix, newRow, rows, newColumn, columns, memo) + 1)
    }
  }
  return memo[row][column];
}


longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]
]); // 4

longestIncreasingPath([
  [3, 4, 5],
  [3, 2, 6],
  [2, 2, 1]
]); // 4

longestIncreasingPath([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10], [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], [39, 38, 37, 36, 35, 34, 33, 32, 31, 30], [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], [59, 58, 57, 56, 55, 54, 53, 52, 51, 50], [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], [79, 78, 77, 76, 75, 74, 73, 72, 71, 70], [80, 81, 82, 83, 84, 85, 86, 87, 88, 89], [99, 98, 97, 96, 95, 94, 93, 92, 91, 90], [100, 101, 102, 103, 104, 105, 106, 107, 108, 109], [119, 118, 117, 116, 115, 114, 113, 112, 111, 110], [120, 121, 122, 123, 124, 125, 126, 127, 128, 129], [139, 138, 137, 136, 135, 134, 133, 132, 131, 130], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]); //