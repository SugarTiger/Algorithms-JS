/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  var dp0 = nums[0], dp1 = Math.max(nums[0], nums[1]);
  if (len === 2) return dp1;
  var max1 = dp1; // 偷第一间房子的最大值
  var dp2 = nums[1], dp3 = Math.max(nums[1], nums[2]);
  var max2 = dp3; // 不偷第一间房子的最大值
  // 偷第一间房子,不透最后一间房子
  for (var i = 2; i < len; i++) {
    if (i !== len - 1) { // 偷第一间，不能偷最后一间
      max1 = Math.max(dp0 + nums[i], dp1);
      dp0 = dp1;
      dp1 = max1;
    }
    if (i !== 2) { // 偷最后一间，不能偷第一间
      max2 = Math.max(dp2 + nums[i], dp3);
      dp2 = dp3;
      dp3 = max2;
    }
  }
  if (max2 > max1) {
    return max2;
  }
  return max1;
};

rob([6, 6, 4, 8, 4, 3, 3, 10]); // 27
rob([2, 3, 2]); // 3
rob([2, 3]); // 3