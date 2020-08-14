/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = {};
  var len = nums.length;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return result;
};


topKFrequent([2, 1, 2, 1, 3, 1, 2, 1, 3], 2)
topKFrequent([2, 1, 2, 1, 3, 1, 2, 1, 3, 4, 4, 4, 5, 5, 6, 6], 3)