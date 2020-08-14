/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 第一种方法
    var len = nums.length;
    return len !== ([...new Set(nums)].length)
};