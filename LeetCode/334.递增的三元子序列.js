/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  var len = nums.length;
  if (len < 3) return false;
  var i = 0;
  var samll = Infinity;
  var mid = Infinity;
  while (i < len) {
    if (nums[i] <= samll) {
      samll = nums[i]
    } else if (nums[i] <= mid) {
      mid = nums[i]
    } else if (nums[i] > mid) {
      return true;
    }
    i++;
  }
  return false;
};

// increasingTriplet([1, 0, 0, 10, 0, 100]); // true
// increasingTriplet([1, 0, 0, 0, -1, -1, -1, 3]); // false
// increasingTriplet([5, 4, 3, 2, 1, 2, 3]); // true
// increasingTriplet([5, 1, 5, 5, 2, 5, 4]) // true
// increasingTriplet([5, 4, 5, 7, 4, 3,]) // true
increasingTriplet([9, 8, 7, 10, 6, 9, 10]) // true