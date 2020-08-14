/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var sum = 0;
  var len = nums.length;
  // 求0到n的阶加
  for (var i = 0; i <= len; i++) {
    sum += i;
  }
  // 减去现有的数
  for (i = 0; i < len; i++) {
    sum -= nums[i];
  }
  return sum;
};

missingNumber([0, 1, 3])
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])