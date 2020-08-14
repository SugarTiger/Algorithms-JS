/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 伪-二分查找
var searchRange = function (nums, target) {
  var res = [-1, -1];
  var n = nums.length;
  if (n === 0) return res;
  var l = 0;
  var r = n - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) {
      l = mid;
      r = mid;
      // 计算起点和终点
      while (nums[l] === nums[mid] || nums[r] === nums[mid]) {
        if (nums[l] === nums[mid]) {
          res[0] = l;
          l--;
        }
        if (nums[r] === nums[mid]) {
          res[1] = r;
          r++;
        }
      }
      break;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
};


// 真-二分查找
var searchRange = function (nums, target) {
  var res = [-1, -1];
  // 寻找左边界
  let leftIndex = searchRangeHelper(nums,target,true); 
  if(nums[leftIndex]!==target){
    return res;
  }
  // 右边界
  res[0] = leftIndex;
  res[1] = searchRangeHelper(nums,target,false); 
  return res;
};

var searchRangeHelper = function(nums,target,left){
  var n = nums.length;
  if (n === 0) return -1;
  var l = 0;
  var r = n - 1;
  while(l <= r){

  }
  return l;
}

searchRange([], 1); // [-1,-1]
searchRange([1], 1); // [0,0]
searchRange([5, 7, 7, 8, 8, 10], 8); // [3,4]
searchRange([5, 7, 7, 8, 8, 10], 6); // [-1,-1]
searchRange([5, 6, 7, 7, 8, 8, 10], 6); // [1,1]