/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while (i >= 0 && j >= 0 && k >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
  if (i === -1) {
    while (k >= 0) {
      nums1[k--] = nums2[j--]
    }
  }

};


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
merge([4, 5, 6, 0, 0, 0], 3, [], 0);
merge([0, 0, 0], 0, [1, 2, 3], 3);