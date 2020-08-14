/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var len = nums.length;
  if (len === 0) return 0;
  var left = 0;
  var right = len - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (left >= 0 && left < len) {
    if (nums[left] > target) {
      return left;
    } else {
      return left + 1;
    }
  } else if (right < len && right > -1) {
    if (nums[right] > target) {
      return right;
    } else {
      return right + 1;
    }
  }
};

// 官方解法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

searchInsert([1], 1) // 0
searchInsert([1, 3, 5, 6], 5) // 2
searchInsert([1, 3, 5, 6], 2) // 1
searchInsert([1, 3, 5, 6], 7) // 4
searchInsert([1, 3, 5, 6], 0) // 0