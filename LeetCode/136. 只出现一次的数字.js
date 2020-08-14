/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.find(item=>nums.lastIndexOf(item)===nums.indexOf(item))
};