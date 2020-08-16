/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度O(n)
var findPeakElement = function (nums) {
  var maxIndex = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var pre = nums[i - 1];
    var next = nums[i + 1];
    if (pre === undefined) {
      pre = -Infinity;
    }
    if (next === undefined) {
      next = -Infinity;
    }
    if (pre < nums[i] && next < nums[i]) {
      maxIndex = i;
      break;
    }
  }
  return maxIndex;
};


// 优化后时间复杂度O(n)
var findPeakElement = function (nums) {
  nums.push(-Infinity);
  nums.unshift(-Infinity);
  var len = nums.length;
  var maxIndex = 1;
  for (var i = 1; i < len - 1; i++) {
    var pre = nums[i - 1];
    var next = nums[i + 1];
    if (pre < nums[i] && next < nums[i]) {
      maxIndex = i;
      break;
    } else if ((pre === nums[i] && next === nums[i]) || (pre > nums[i] && nums[i] > next)) {
      i++;
    }
  }
  return maxIndex - 1;
}

// 优化：因为两头都似乎无限小，所以只有三种情况：
// 1、降序，峰值就在第一个元素
// 2、升序，峰值就在最后一个元素
// 3、波动，峰值在中间，但是满足nums[i] > nums[i+1] 则，i就是峰值
var findPeakElement = function (nums) {
  var len = nums.length;
  for (var i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return len - 1;
}

// 迭代二分查找
var findPeakElement = function (nums) {
  var l = 0;
  var r = nums.length - 1;
  while (l < r) {
    var mid = (l + r) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}


findPeakElement([1]); // 0
findPeakElement([1, 2, 3, 1]); // 2
findPeakElement([1, 2, 1, 3, 5, 6, 4]); // 1