/**
 * @param {string} s
 * @return {number}
 */
// 时间复杂度O(s.length) 空间复杂度O(s.length)
var firstUniqChar = function (s) {
  const len = s.length;
  let i = 0, ans = Infinity;
  const map1 = new Map();
  const map2 = new Map();
  while (i < len) {
    const letter = s.charAt(i);
    if (!map1.has(letter)) {
      map1.set(letter, i)
      map2.set(letter, i)
    } else {
      map2.delete(letter)
    }
    i++;
  }
  for (let [, idx] of map2) {
    if (ans > idx) {
      ans = idx;
    }
  }
  return ans === Infinity ? -1 : ans;
};

var firstUniqChar = function (s) {
  var map = new Map();
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2)
    } else {
      map.set(s[i], 1)
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

firstUniqChar("leetcode"); // 0
firstUniqChar("loveleetcode"); // 2