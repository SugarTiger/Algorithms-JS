/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
// 二分查找
var kthSmallest = function (matrix, k) {
  var n = matrix.length;
  var left = matrix[0][0];
  var right = matrix[n - 1][n - 1];
  while (left < right) {
    var mid = left + ((right - left) >> 1);
    if (check(matrix, mid, k, n)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left
};

var check = function (matrix, mid, k, n) {
  var i = n - 1;
  var j = 0;
  var num = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] <= mid) {
      num += i + 1;
      j++
    } else {
      i--;
    }
  }
  return num >= k;
}

// 直接排序
var kthSmallest = function (matrix, k) {
  var arr = matrix.flat(2).sort((a, b) => (a - b));
  return arr[k - 1];
}

// 归并排序
var kthSmallest = function (matrix, k) {
  var n = matrix.length;
  let resutl = [];
  for (var i = 0; i < n; i++) {
    resutl = mergaSortArr(resutl, matrix[i])
  }
  return resutl[k - 1]
}

// 合并两个有序数组
var mergaSortArr = function (arrA, arrB) {
  var result = [];
  var i = 0, j = 0;
  var n = arrA.length;
  var m = arrB.length;
  let next;
  while (i < n || j < m) {
    if (i < n && j < m) {
      if (arrA[i] > arrB[j]) {
        next = arrB[j];
        j++;
      } else {
        next = arrA[i];
        i++;
      }
    } else if (i < n) {
      next = arrA[i];
      i++;
    } else {
      next = arrB[j];
      j++;
    }
    result.push(next)
  }
  return result;
}

kthSmallest([
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
], 8); // 13

kthSmallest([[1, 2], [3, 3]], 4); // 13

