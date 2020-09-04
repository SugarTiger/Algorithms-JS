/**
 * @param {number} n
 * @return {string[][]}
 */
// 方法一：基于集合的回溯
var solveNQueens = function (n) {
  const solutions = [];
  const queens = Array(n).fill(-1);
  const columns = new Set(); // 列
  const diagonals1 = new Set(); // 从左上到右下方向的斜线
  const diagonals2 = new Set(); // 从右上到左下方向的斜线
  backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2); // 从第0行开始放置
  return solutions;
};
var backtrack = function (solutions, queens, n, row, columns, diagonals1, diagonals2) {
  if (row === n) {
    const board = generateBoard(queens, n);
    solutions.push(board); // 添加一种解法
  } else {
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) continue;
      const diagonal1 = row - i; // 从左上到右下方向的斜线上的点相减是同一个数数
      if (diagonals1.has(diagonal1)) continue;
      const diagonal2 = row + i; // 从右上到左下方向的斜线上的点相加是同一个数数
      if (diagonals2.has(diagonal2)) continue;
      // 不在列不在斜线上
      queens[row] = i;
      columns.add(i);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      backtrack(solutions, queens, n, row + 1, columns, diagonals1, diagonals2);
      // 回溯
      queens[row] = -1;
      columns.delete(i);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }
}
var generateBoard = function (queens, n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    const row = Array(n).fill('.');
    row[queens[i]] = 'Q';
    board.push(row.join(''))
  }
  return board;
}

solveNQueens(4)