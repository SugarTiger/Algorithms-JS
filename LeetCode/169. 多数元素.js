/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表法 时间复杂度O(n) 空间复杂度O(n)
var majorityElement = function (nums) {
  const map = new Map();
  let ans = 0;
  let count = 0;
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
    if (map.get(num) > count) {
      count = map.get(num);
      ans = num;
    }
  }
  return ans;
};
// 排序法 时间复杂度O(nlogn) 空间复杂度(logn)
var majorityElement = function (nums) {
  var n = nums.length;
  nums.sort();
  return nums[n >> 1];
}


// 分治法 如果数 a 是数组 nums 的众数，如果我们将 nums 分成两部分，那么 a 必定是至少一部分的众数
var majorityElement = function (nums) {
  return majorityElementRec(nums, 0, nums.length - 1);
}
var majorityElementRec = function (nums, lo, hi) {
  if (lo === hi) return nums[lo];
  const mid = ((hi - lo) >> 1) + lo;
  const left = majorityElementRec(nums, lo, mid);
  const right = majorityElementRec(nums, mid + 1, hi);
  if (left === right) return left;
  const leftCount = countInRange(nums, left, lo, hi);
  const rightCount = countInRange(nums, right, lo, hi);
  return leftCount > rightCount ? left : right;
}
// 计算某个数在指定范围内出现的次数
var countInRange = function (nums, num, lo, hi) {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] === num) count++;
  }
  return count;
}


// Boyer-Moore 投票算法 时间复杂度O(n) 空间复杂度O(1)
// 众数出现的次数一定比其它数多
var majorityElement = function (nums) {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}


majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);