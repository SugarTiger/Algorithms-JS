/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 因为前提是每次的输入都会有对应的值，所以一次遍历就可以找到答案，因为后面的值总是会和前面的值配对
var twoSum = function (nums, target) {
  var map = new Map();
  var n = nums.length
  for (var i = 0; i < n; i++) {
    var com = target - nums[i];
    if (map.has(com)) {
      return [map.get(com), i]
    }
    map.set(nums[i], i)
  }
};
