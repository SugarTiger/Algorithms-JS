/**
 * https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/21/
 * 从排序数组中删除重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //     方法 一
    nums.splice.apply(nums,[0,nums.length,...new Set(nums)]);
    //     方法 二
	// var keys = {},len=nums.length;
	// for(var i=0;i<len;i++){
	// if(!keys[nums[i]]){
	// keys[nums[i]] = true;
	// }else{
	// 		nums.splice(i--,1);
	// 		len--;
	// 	}
	// }
    return nums.length
};