/**
 * @param {number[]} A
 * @return {boolean}
 */
// 双指针
var validMountainArray = function (A) {
  const len = A.length;
  if (len < 3) return false;
  let l = 0, r = len - 1;
  let lPre = -Infinity, rPre = -Infinity;
  while (l < len && A[l] > lPre) {
    lPre = A[l++];
  }
  while (r > -1 && A[r] > rPre) {
    rPre = A[r--]
  }
  return l - r === 2 && l !== 1 && r !== len - 2;
};

validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
validMountainArray([0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 11])
validMountainArray([3, 5, 5])
validMountainArray([0, 3, 2, 1])
validMountainArray([0, 5, 6, 5, 0])
validMountainArray([0, 5, 6, 6, 5, 0])
