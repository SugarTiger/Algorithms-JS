/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var len = nums.length;
  if (len < 3) return [];
  var result = [];
  nums.sort((a, b) => (a - b)); // 将数组进行排序
  var i = 0, left, right;
  while (i < len - 2) {
    if (nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    left = i + 1;
    right = len - 1;
    while (left < right) {
      var sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        result.push([nums[left++], nums[i], nums[right--]]);
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
    i++;
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4])
threeSum([-1, 0, 1, 0])