/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  动态规划法
// var canJump = function (nums) {
//   var len = nums.length;
//   var dp = Array(len).fill(0); // 0 未知，-1不通，1通
//   dp[len - 1] = 1; // 最后一个点肯定是通的
//   for (var i = len - 2; i >= 0; i--) {
//     var j = i;
//     var maxStep = Math.min(j + nums[j], len - 1);
//     while (j <= maxStep) {
//       if (dp[j] === 1) {
//         dp[i] = 1;
//         break;
//       }
//       j++
//     }
//   }
//   return dp[0] === 1; // 第一个点是通的，则通
// };

// 贪心法
var canJump = function (nums) {
  var len = nums.length;
  var maxJump = len - 1; // 需要跳到最后一个点的步数
  for (var i = len - 2; i >= 0; --i) {
    if (nums[i] + i >= maxJump) { // 如果从当前点起跳，加上可跳的步数，大于最后一个点的步数的话，证明可以跳到该点
      maxJump = i; // 往前遍历，如果前面的数存在可以跳到该点的数，则继续完全挪动，知道maxJump 为 0
    }
  }
  return maxJump === 0;
};

canJump([3, 1, 0, 2, 4])
canJump([2, 3, 1, 1, 4])