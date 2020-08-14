// 归并排序
function MergerSort(nums) {
  var len = nums.length;
  if (len <= 1) return nums;
  var mid = len >> 1;
  var left = nums.slice(0, mid);
  var right = nums.slice(mid);
  return concatSortArr(MergerSort(left), MergerSort(right))
}

// 合并两个有序数组
function concatSortArr(arrA, arrB) {
  var result = [];
  var n = arrA.length, m = arrB.length;
  var i = 0, j = 0;
  while (i < n || j < m) {
    if (i < n && j < m) {
      if (arrA[i] < arrB[j]) {
        result.push(arrA[i]);
        i++;
      } else {
        result.push(arrB[j]);
        j++;
      }
    } else if (i < n) {
      result.push(arrA[i]);
      i++;
    } else {
      result.push(arrB[j]);
      j++;
    }
  }
  return result;
}



concatSortArr([1, 2, 3], [3, 4, 5])
concatSortArr([1, 2], [3])
concatSortArr([1], [1, 2, 3])

MergerSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
MergerSort([9])