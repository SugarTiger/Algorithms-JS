/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// 'M' 代表一个未挖出的地雷
// 'E' 代表一个未挖出的空方块
// 'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块
// 数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻
// 'X' 则表示一个已挖出的地雷
var updateBoard = function (board, click) {
  const [a, b] = click;
  // 是个雷
  if (board[a][b] === 'M') {
    board[a][b] = 'X';
    return board;
  }
  const diffI = [-1, -1, -1, 0, 1, 1, 1, 0];
  const diffJ = [-1, 0, 1, 1, 1, 0, -1, -1];
  dfs(board, a, b, diffI, diffJ);
  return board;
};
// 深度优先遍历 翻开E变成B，如果发现M的话，就把与M相邻的B变成数字
var dfs = function (board, i, j, diffI, diffJ) {
  if (!board[i] || !board[i][j] || board[i][j] !== 'E') return;
  // 遍历这个节点的周围，检查周围有没有类
  let count = 0;
  var k = 0;
  while (diffI[k] !== undefined) {
    if (board[i + diffI[k]] && board[i + diffI[k]][j + diffJ[k]] === 'M') {
      count++;
    }
    k++;
  }
  if (count === 0) {
    board[i][j] = 'B';
    k = 0;
    while (diffI[k] !== undefined) {
      dfs(board, i + diffI[k], j + diffJ[k], diffI, diffJ);
      k++;
    }
  } else {
    board[i][j] = count + '';
  }
}


updateBoard(
  [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E']], [3, 0]);

updateBoard([
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "M"],
  ["E", "E", "M", "E", "E", "E", "E", "E"],
  ["M", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E", "E", "E", "E"],
  ["E", "E", "M", "M", "E", "E", "E", "E"]], [0, 0]);