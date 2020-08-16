/**
 * @param {character[][]} grid
 * @return {number}
 */
// 沉没操作
var numIslands = function (grid) {
  var n = grid.length;
  if (n === 0) return 0;
  var m = grid[0].length;
  var landCount = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        landCount++;
        sink(grid, n, m, i, j);
      }
    }
  }
  return landCount;
};
// 沉没岛屿
var sink = function (grid, n, m, i, j) {
  if (i < 0 || i > n - 1 || j < 0 || j > m - 1 || grid[i][j] === '0') return;
  grid[i][j] = '0'; // 沉没
  // 相继沉没上下左右四个点
  sink(grid, n, m, i - 1, j)
  sink(grid, n, m, i + 1, j)
  sink(grid, n, m, i, j - 1)
  sink(grid, n, m, i, j + 1)
}


numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])
numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
])