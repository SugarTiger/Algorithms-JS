/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 三个指针
var sortColors = function (nums) {
  var len = nums.length;
  var redIndex = 0, whiteIndex = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] === 0) {
      swap(nums, whiteIndex, i)
      swap(nums, redIndex, whiteIndex)
      redIndex++;
      whiteIndex++;
    } else if (nums[i] === 1) {
      swap(nums, whiteIndex, i)
      whiteIndex++;
    }
  }
};

var swap = function (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]
sortColors([2, 0, 2, 1, 1, 0])
sortColors([2])
sortColors([2, 0])
sortColors([2, 1])
sortColors([2, 0, 1])
sortColors([0, 1, 2])
sortColors([0, 1, 1, 0, 2])
sortColors([0, 0, 0, 1, 1, 1, 2, 2, 2])