/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const len = nums.length;
  const ans = [];
  const s = new Set();
  var dfs = function (start) {
    if (start === len) {
      let key = nums.join("");
      if (!s.has(key)) {
        ans.push([...nums])
        s.add(key);
      }
      return;
    }
    for (let i = start; i < len; i++) {
      let temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
      dfs(start + 1);
      temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
    }
  }
  dfs(0)
  return ans;
};


var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
    if (idx === nums.length) {
      ans.push(perm.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      perm.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  }
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};




permuteUnique([1, 2, 3, 4])
permuteUnique([1, 1, 2])