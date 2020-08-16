/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var len = word.length;
  var n = board.length;
  if(len === 0 || n === 0)return false;
  var m = board[0].length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (find(board, i, j, word, 0, n, m)) {
        return true;
      }
    }
  }
  return false;
};

// 从i,j开始查找word
var find = function (board, i, j, word, k, n, m) {
  if (k === word.length) return true;
  if (i > n - 1 || i < 0 || j > m - 1 || j < 0) return false;
  // 对应的字母相等，可以继续延续下去查找
  if (board[i][j] !== false && word[k] === board[i][j]) {
    // 标记此单元格已经使用过了，防止重复使用，继续查找
    var temp = board[i][j];
    board[i][j] = false
    var result = find(board, i - 1, j, word, k + 1, n, m) || find(board, i + 1, j, word, k + 1, n, m) || find(board, i, j - 1, word, k + 1, n, m) || find(board, i, j + 1, word, k + 1, n, m)
    board[i][j] = temp;
    return result;
  } else {
    return false;
  }
}

exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCCED")

exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "SEE")

exist([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCB")