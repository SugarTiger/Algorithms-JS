/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0, j = 0;
  var map = new Map();
  var maxSub = 0;
  while (i < s.length) {
    while (map.has(s[i])) {
      map.delete(s[j++])
    }
    map.set(s[i], 1);
    maxSub = Math.max(map.size, maxSub);
    i++;
  }
  return maxSub;
};

// 优化时间复杂度
var lengthOfLongestSubstring = function (s) {
  let i = 0, j = 0;
  var map = new Map();
  var maxSub = 0;
  while (i < s.length) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]) + 1, j); // 可能 map.get(s[i]) 是出现比较早的字符，所以需要和现在的j比较，取最大值
    }
    map.set(s[i], i);
    maxSub = Math.max(i - j + 1, maxSub);
    i++;
  }
  return maxSub;
};

// lengthOfLongestSubstring('abcabcbb')
// lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('abcbacd')
lengthOfLongestSubstring('')