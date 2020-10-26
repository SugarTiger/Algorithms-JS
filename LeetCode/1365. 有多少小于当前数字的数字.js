/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力法 时间复杂度O(n2) 空间复杂度O(1)
var smallerNumbersThanCurrent = function (nums) {
  var res = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (j !== i && nums[i] > nums[j]) {
        count++;
      }
    }
    res[i] = count;
  }
  return res;
};

// 哈希表 时间复杂度O(nlogn) 空间复杂度O(n)
var smallerNumbersThanCurrent = function (nums) {
  const len = nums.length;
  const tempNums = nums.slice();
  tempNums.sort((a, b) => (a - b));
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(tempNums[i])) {
      map.set(tempNums[i], i);
    }
  }
  for (let i = 0; i < len; i++) {
    tempNums[i] = map.get(nums[i]);
  }
  return tempNums;
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3]) // [4,0,1,1,3]
smallerNumbersThanCurrent([6, 5, 4, 8]) // [2,1,0,3]
smallerNumbersThanCurrent([7, 7, 7, 7]) // [0,0,0,0]