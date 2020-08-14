/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   var len1 = nums1.length;
//   var len2 = nums2.length;
//   var result = [];
//   if (len1 === 0 || len2 === 0) return result;
//   var map = new Map();
//   for (var i = 0; i < len1; i++) {
//     if (map.has(nums1[i])) {
//       map.set(nums1[i], map.get(nums1[i]) + 1)
//     } else {
//       map.set(nums1[i], 1)
//     }
//   }
//   for (var i = 0; i < len2; i++) {
//     var isHas = map.has(nums2[i]);
//     if (isHas) {
//       result.push(nums2[i]);
//       var num = map.get(nums2[i]);
//       if (num === 1) {
//         map.delete(nums2[i])
//       } else {
//         map.set(nums2[i], num - 1)
//       }
//     }
//   }
//   return result;
// };

// 排好序
var intersect = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var result = [];
  if (len1 === 0 || len2 === 0) return result;
  nums1.sort((a, b) => (a - b));
  nums2.sort((a, b) => (a - b));
  var i = 0, j = 0;
  while (i < len1 && j < len2) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
};


intersect([1, 2, 2, 1], [2, 2])
intersect([4, 9, 5], [9, 4, 9, 8, 4])
