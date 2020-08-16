/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var len = nums.length;
    var counts = 0;
    if(len === 1)return counts;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(nums[i] === nums[j])counts++;
        }
    }
    return counts;
};

numIdenticalPairs([1,2,3,1,1,3])
numIdenticalPairs([1,1,1,1])
numIdenticalPairs([1,2,3])
numIdenticalPairs([1,1])
numIdenticalPairs([1])
