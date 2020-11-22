/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(n+m) 空间复杂度O(n)
var intersection = function (nums1, nums2) {
  const res = [];
  const set = new Set();
  for (let num of nums1) {
    set.add(num)
  }
  for (let num of nums2) {
    if (set.has(num)) {
      res.push(num);
      set.delete(num)
    }
  }
  return res;
};

// 排序 + 双指针 时间复杂度O(nlogn + mlogm) 空间复杂度O(logn+logm)
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const res = [];
  const len1 = nums1.length, len2 = nums2.length;
  let i = 0, j = 0;
  while (i < len1 && j < len2) {
    const num1 = nums1[i];
    const num2 = nums2[j];
    if (num1 === num2) {
      if (num1 !== res[res.length - 1]) {
        res.push(num1);
      }
      j++;
      i++;
    } else if (num1 > num2) {
      j++;
    } else {
      i++;
    }
  }
  return res;
}

intersection([1, 2, 2, 1], [2, 2]); // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // [4,9]