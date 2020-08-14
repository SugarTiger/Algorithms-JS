/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  var n = board.length;
  if (n === 0) return;
  var m = board[0].length;
  // 把里面的O全部变成1
  for (var i = 1; i < n - 1; i++) {
    for (var j = 1; j < m - 1; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 1;
      }
    }
  }
  // 把与边界为0的相连的1变成0
  for (var j = 0; j < m; j++) {
    if (board[0][j] === 'O') {
      board[0][j] = 1
      dfsToO(board, 0, j, n, m);
      board[0][j] = 'O'
    }
    if (board[n - 1][j] === 'O') {
      board[n - 1][j] = 1
      dfsToO(board, n - 1, j, n, m);
      board[n - 1][j] = 'O'
    }
  }
  for (var i = 0; i < n; i++) {
    if (board[i][0] === 'O') {
      board[i][0] = 1
      dfsToO(board, i, 0, n, m);
      board[i][0] = 'O'
    }
    if (board[i][m - 1] === 'O') {
      board[i][m - 1] = 1
      dfsToO(board, i, m - 1, n, m);
      board[i][m - 1] = 'O'
    }
  }
  // 最后把是1的点改回O
  for (var i = 1; i < n - 1; i++) {
    for (var j = 1; j < m - 1; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 'X';
      }
    }
  }

};

var dfsToO = function (board, i, j, n, m) {
  if (i < 0 || j < 0 || i > n - 1 || j > m - 1 || board[i][j] !== 1) { // 边界情况了
    return;
  }
  board[i][j] = 'O';
  dfsToO(board, i - 1, j, n, m)
  dfsToO(board, i, j - 1, n, m)
  dfsToO(board, i + 1, j, n, m)
  dfsToO(board, i, j + 1, n, m)
}


solve([["X", "O", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]);
/**
X X X X      X X X X
X O O X  =>  X X X X
X X O X      X X X X
X O X X      X O X X
 */
solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]);