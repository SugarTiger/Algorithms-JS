/**
 * @param {number[]} A
 * @return {number[]}
 */
// 最直接的方法
var sortedSquares = function (A) {
  A = A.map(num => {
    return num * num
  });
  return A.sort((a, b) => (a - b))
};

// 根据A已经是排好序的条件，合并两个有序数组  时间复杂度O(n) 空间复杂度O(n) 新数组
var sortedSquares = function (A) {
  var len = A.length;
  var diff = 0;
  // 查找正负的分界点
  for (let i = 0; i < len; i++) {
    if (A[i] < 0) {
      diff = i;
    }
    A[i] = A[i] * A[i];
  }
  var res = [];
  var i = diff;
  var j = diff + 1;
  while (i >= 0 || j < len) {
    if (i >= 0 && j < len) {
      if (A[i] > A[j]) {
        res.push(A[j++])
      } else if (A[i] < A[j]) {
        res.push(A[i--])
      } else {
        res.push(A[i--])
        res.push(A[j++])
      }
    } else if (i >= 0) {
      res.push(A[i--])
    } else {
      res.push(A[j++])
    }
  }
  return res;
}

// 双指针
var sortedSquares = function (A) {
  var j = A.length-1;
  var i = 0;
  var res = [];
  while(i <= j){
    const numA = A[i]*A[i]
    const numB = A[j]*A[j];
    if(numA > numB){
      res.unshift(numA)
      i++
    }else{
      res.unshift(numB)
      j--;
    }
  }
  return res;
}


sortedSquares([-5, -4, -3])
sortedSquares([0, 1, 2, 3, 4])
sortedSquares([-4, -1, 0, 0, 0, 3, 10])
sortedSquares([-4, -1, 0, 3, 10])
sortedSquares([-7, -3, 2, 3, 11])