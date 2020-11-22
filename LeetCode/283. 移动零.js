/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 内置方法 时间复杂度O(n^2)
var moveZeroes = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0])
      i--;
      len--;
    }
  }
};

var moveZeroes = function (nums) {
  let len = nums.length;
  let i = 0;
  let j = 0;
  while (i < len) {
    if(nums[i] === 0){
      j = i;
      while(nums[j]===0){
        j++;
      }
      if(j < len){
        swap(nums,i,j)
      }
    }
    i++;
  }
}


// 双指针
var moveZeroes = function (nums) {
  let len = nums.length;
  let l = 0;
  let r = 0;
  while (r < len) {
    if(nums[r]!==0){
      swap(nums,l,r);
      l++;
    }
    r++;
  }
}


var swap = function (nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0])
moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0, 1])
