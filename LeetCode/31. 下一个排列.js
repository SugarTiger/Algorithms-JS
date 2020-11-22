/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) { i-- }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) { j-- }
    swap(nums, i, j)
  }
  reverse(nums, i + 1);
};

var swap = function (nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
var reverse = function (nums, start) {
  let left = start, right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right)
    left++;
    right--;
  }
}


nextPermutation([])