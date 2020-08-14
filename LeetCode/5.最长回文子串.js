/**
 * @param {string} s
 * @return {string}
 */
// 暴力法
var longestPalindrome = function (s) {
  var len = s.length;
  if (len < 2) return s;
  var star = 0; // 最大回文子串的开始索引
  var maxLen = 1; // 最大回文字符串的最大长度
  for (var i = 0; i < len; i++) {
    chcekPalindrome(i, i + 1);
    chcekPalindrome(i - 1, i + 1);
  }
  function chcekPalindrome(left, right) {
    while (left > -1 && right < len && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        star = left;
      }
      left--;
      right++;
    }
  }
  var result = s.slice(star, star + maxLen)
  return result;
};


longestPalindrome('babad'); // bab || aba
longestPalindrome('cbbd'); // bb