/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 例如，"ace"是"abcde"的一个子序列，而"aec"不是）
var isSubsequence = function (s, t) {
  var m = t.length;
  var n = s.length;
  if (n === 0) return true;
  var index = 0;
  for (let i = 0; i < m; i++) {
    if (t[i] === s[index]) {
      index++;
    }
    if (index === n) {
      return true;
    }
  }
  return false;
};

// 如果有超级多个s，可以把t的全部子序列求出来，放到一个哈希表里面，然后可以在O(1)的时间复杂度内，查询到s是否是子序列
// 建立全子序列的哈希表时间复杂度为O(n*2en)


isSubsequence('abc', 'ahbgdc')
isSubsequence('acb', 'ahbgdc')