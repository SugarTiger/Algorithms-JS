/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划 时间复杂度O(n^2)
var lengthOfLIS = function (nums) {
  var n = nums.length;
  if (n === 0) return 0;
  var dp = Array(n).fill(1);
  var max = 1;
  for (var i = 1; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    if (dp[i] > max) max = dp[i];
  }
  return max;
};

// 方法二：贪心 + 二分查找 时间复杂度O(nlog n)
// 维护一个最长子序列数组
var lengthOfLIS = function (nums) {
  var n = nums.length;
  if (n === 0) return 0;
  let len = 1;
  var sub = [];
  sub[len] = nums[0];
  for (var i = 1; i < n; i++) {
    if (sub[len] < nums[i]) {
      sub[++len] = nums[i];
    } else {
      // 进行二分查找，找到第一个小于 nums[i] 的数字，并插入到sub中
      // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      let left = 1;
      let right = len;
      let pos = 0;
      while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (sub[mid] < nums[i]) {
          pos = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      sub[pos + 1] = nums[i];
    }
  }
  return len;
}



lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]); // 6
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4
lengthOfLIS([10, 9, 2, 5, 3, 4]); // 3
lengthOfLIS([10]); // 1
lengthOfLIS([1, 1, 3]); // 2
lengthOfLIS([]); // 0