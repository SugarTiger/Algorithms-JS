/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 空间复杂度O(n+m)
var setZeroes = function (matrix) {
  var n = matrix.length;
  if (n === 0) return [];
  var m = matrix[0].length;
  var r = new Set();
  var c = new Set();
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        r.add(i)
        c.add(j)
      }
    }
  }
  for (var i of r) {
    matrix[i].fill(0);
  }
  for (var j of c) {
    for (var i = 0; i < n; i++) {
      matrix[i][j] = 0;
    }
  }

};

// 空间复杂度常数级别的解决方法
var setZeroes = function (matrix) {
  var n = matrix.length;
  if (n === 0) return [];
  var m = matrix[0].length;
  var firstRowHaszero = false; // 第一行是否有零
  var firstColHaszero = false; // 第一列是否有零
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i === 0 && matrix[i][j] === 0) {
        firstRowHaszero = true;
      }
      if (j === 0 && matrix[i][j] === 0) {
        firstColHaszero = true;
      }
      if (matrix[i][j] === 0) { // 如果当前的点是0，则把此点对应的第一行，第一列设置为零，最后根据第一行第一列的标零情况来设置0
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (var j = 1; j < m; j++) {
    if (matrix[0][j] === 0) { // 第一行第j列是0，则把第j列都设置为0
      for (var i = 0; i < n; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (var i = 1; i < n; i++) {
    if (matrix[i][0] === 0) { // 第一行第j列是0，则把第j列都设置为0
      matrix[i].fill(0)
    }
  }
  // 最后再操作第一行和第一列
  if (firstRowHaszero) {
    matrix[0].fill(0)
  }
  if (firstColHaszero) {
    for (var i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

}

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);