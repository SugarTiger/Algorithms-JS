/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 暴力解法
var twoSum = function (numbers, target) {
  var len = numbers.length;
  var i = 0, j = 1;
  while (i < j) {
    var sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1];
    } else {
      j++;
      if (j === len) {
        i++;
        j = i + 1;
      }
    }
  }
};

// 二分查找
var twoSum = function (numbers, target) {
  var len = numbers.length;
  for (var i = 0; i < len - 1; i++) {
    if (numbers > target) break;
    if (numbers[i] === numbers[i - 1]) continue;
    var diff = target - numbers[i];
    var left = i + 1;
    var isAdd = false;
    while (numbers[i] === numbers[left]) {
      isAdd = true;
      left++;
    }
    if (isAdd) left--;
    var right = len - 1;
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (numbers[mid] === diff) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] > diff) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return [-1, -1]; // 没有找到
};
// 双指针
var twoSum = function (numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  while (left < right) {
    var sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

// 哈希表，可以满足无序列表
var twoSum = function (numbers, target) {
  var map = new Map();
  var len = numbers.length;
  for (var i = 0; i < len; i++) {
    map.set(numbers[i], i);
  }
  for (var i = 0; i < len; i++) {
    var diff = target - numbers[i];
    if (map.has(diff) && map.get(diff) !== i) {
      return [i + 1, map.get(diff) + 1]
    }
  }
  return [-1, -1];
}

twoSum([2, 7, 11, 15], 9); // [1,2]
twoSum([2, 3, 4, 5, 6, 7], 11); // [3,6]
twoSum([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4], 8); // [4,5]