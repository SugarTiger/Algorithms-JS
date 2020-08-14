/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
// 技巧，从右上角开始对比，比右上角大的数只可能出现在身下的行里面，比右上角小的数只可能出现在左边的列
var searchMatrix = function (matrix, target) {
  var n = matrix.length;
  if (n === 0) {
    return false;
  }
  var m = matrix[0].length;
  var i = 0, j = m - 1;
  while (i < n && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};


searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5)

searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20)