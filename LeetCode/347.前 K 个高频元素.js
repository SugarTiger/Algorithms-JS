/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力哈希次数表排序法
var topKFrequent = function (nums, k) {
  var map = new Map();
  var len = nums.length;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      result.push(nums[i])
      map.set(nums[i], 0)
    }
    map.set(nums[i], map.get(nums[i]) + 1)
  }
  result = result.sort((a, b) => (map.get(b) - map.get(a))).slice(0, k)
  return result;
};

// 官方方法 基于快速排序
var topKFrequent = function (nums, k) {
  var map = new Map();
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0)
    }
    map.set(nums[i], map.get(nums[i]) + 1)
  }
  const values = [];
  for (let num of map.keys()) {
    values.push([num, map.get(num)]);
  }
  const ret = [];
  qsort(values, 0, values.length - 1, ret, 0, k);
  return ret;
};

var qsort = function (values, start, end, ret, retIndex, k) {
  const picked = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(values, picked, start);
  const pivot = values[start][1];
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (values[i][1] >= pivot) {
      swap(values, index + 1, i);
      index++;
    }
  }
  swap(values, index, start);
  if (k <= index - start) {
    qsort(values, start, index - 1, ret, retIndex, k);
  } else {
    for (let i = start; i <= index; i++) {
      ret[retIndex++] = values[i][0];
    }
    if (k > index - start + 1) {
      qsort(values, index + 1, end, ret, retIndex, k - (index - start + 1));
    }
  }
}
var swap = function (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j]
  nums[j] = temp;
}

topKFrequent([2, 1, 2, 1, 3, 1, 2, 1, 3], 2)
topKFrequent([2, 1, 2, 1, 3, 1, 2, 1, 3, 4, 4, 4, 5, 5, 6, 6], 3)