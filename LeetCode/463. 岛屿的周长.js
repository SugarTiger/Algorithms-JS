/**
 * @param {number[][]} grid
 * @return {number}
 */
// 空间复杂度O(nm) 时间复杂度O(nm)
var islandPerimeter = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let sum = 0;
  const dfs = function (i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 0 || grid[i][j] === 2) return;
    if (!grid[i][j - 1]) sum++;
    if (!grid[i][j + 1]) sum++;
    if (!(grid[i + 1] && grid[i + 1][j])) sum++;
    if (!(grid[i - 1] && grid[i - 1][j])) sum++;
    grid[i][j] = 2;
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
      }
    }
  }
  return sum;
};

// 优化空间复杂度 空间复杂度O(1) 时间复杂度O(nm)
var islandPerimeter = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i][j - 1]) sum++;
        if (!grid[i][j + 1]) sum++;
        if (!(grid[i + 1] && grid[i + 1][j])) sum++;
        if (!(grid[i - 1] && grid[i - 1][j])) sum++;
      }
    }
  }
  return sum;
};


islandPerimeter(
  [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ]); // 16

islandPerimeter(
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]); // 8