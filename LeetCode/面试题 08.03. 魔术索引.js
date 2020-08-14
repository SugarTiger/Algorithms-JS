/**
 * @param {number[]} nums
 * @return {number}
 */
// 线性时间复杂度
var findMagicIndex = function (nums) {
  var n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === i) return i
  }
  return -1;
};

// 官方
var findMagicIndex = function (nums) {
  var n = nums.length;
  return getAnswer(nums, 0, n - 1)
};
var getAnswer = function (nums, left, right) {
  if (left > right) {
    return -1;
  }
  var mid = left + ((right - left) >> 1);
  var leftAnswer = getAnswer(nums, left, mid - 1);
  if (leftAnswer !== -1) {
    return leftAnswer;
  } else if (nums[mid] === mid) {
    return mid;
  }
  return getAnswer(nums, mid + 1, right);
}

// 跳跃查询
var findMagicIndex = function (nums) {
  var n = nums.length;
  var i=0;
  while(i < n){
    if(i === nums[i]){
      return i;
    }else if(i < nums[i]){
      i = nums[i]
    }else{
      i++
    }
  }
  return -1;
}

console.log(findMagicIndex([0, 2, 3, 4, 5]))
console.log(findMagicIndex([1, 1, 1]))
console.log(findMagicIndex([0, 0, 2]))