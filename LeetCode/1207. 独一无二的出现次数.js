/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var uniqueOccurrences = function (arr) {
  const len = arr.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 0)
    }
    map.set(arr[i], map.get(arr[i]) + 1)
  }
  var set = new Set();
  for (let item of map) {
    if (set.has(item[1])) {
      return false;
    }
    set.add(item[1]);
  }
  return true;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true
uniqueOccurrences([1, 2]); // false
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]); // true