/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 官方方法 方法一：二进制枚举 + 哈希
var findSubsequences = function (nums) {
  const n = nums.length;
  const set = new Set();
  const ans = [];
  const temp = [];
  var findSubsequencesHelp = function (mask, nums) {
    temp.length = 0;
    for (let i = 0; i < n; i++) {
      if ((mask & 1) !== 0) {
        temp.push(nums[i])
      }
      mask >>= 1;
    }
  }
  var getHash = function (base, mod) {
    let hashValue = 0;
    for (let x of temp) {
      hashValue = hashValue * base % mod + (x + 101);
      hashValue %= mod;
    }
    return hashValue;
  }
  var check = function () {
    const n = temp.length;
    for (let i = 1; i < n; i++) {
      if (temp[i] < temp[i - 1]) {
        return false;
      }
    }
    return n >= 2;
  }
  for (let i = 0; i < (1 << n); i++) {
    findSubsequencesHelp(i, nums);
    let hashValue = getHash(263, 1e9 + 7);
    if (check() && !set.has(hashValue)) {
      ans.push([...temp]);
      set.add(hashValue)
    }
  }
  return ans;
};


// 方法二：递归枚举 + 减枝
var findSubsequences = function (nums) {
  const ans = [];
  const temp = [];
  dfs(0, -Infinity, nums, ans, temp);
  return ans;
}
var dfs = function (cur, last, nums, ans, temp) {
  if (cur === nums.length) {
    if (temp.length >= 2) {
      ans.push([...temp])
    }
    return;
  }
  if (nums[cur] >= last) {
    temp.push(nums[cur]);
    dfs(cur + 1, nums[cur], nums, ans, temp);
    temp.pop();
  }
  if (nums[cur] !== last) {
    dfs(cur + 1, last, nums, ans, temp);
  }
}


findSubsequences([4, 6]); // [[4, 6]]
findSubsequences([4, 6, 7]); // [[4, 6], [4, 7], [4, 6, 7], [6, 7]]
findSubsequences([4, 6, 7, 7]); // [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
findSubsequences([4, 6, 7, 8]); // [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]