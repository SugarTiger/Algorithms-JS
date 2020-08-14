/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var n = nums.length;
  var res = [];
  var backtrack = function (first) {
    // 所有的数都填完了
    if (first === n) {
      res.push([...nums])
    }
    for (var i = first; i < n; i++) {
      // 动态维护数组
      var temp = nums[first];
      nums[first] = nums[i]
      nums[i] = temp;
      // 继续递归填下一个数
      backtrack(first + 1)
      // 撤销操作
      temp = nums[first];
      nums[first] = nums[i]
      nums[i] = temp;
    }
  }
  backtrack(0);
  return res;
};


permute([]); // [[]]
permute([1]); // [[1]]
permute([1, 2]); // [[1,2],[2,1]]
permute([1, 2, 3]); // 
permute([1, 2, 3, 4])