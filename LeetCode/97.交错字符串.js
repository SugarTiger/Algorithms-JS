/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// 递归版
var isInterleave = function (s1, s2, s3) {
  if (s1[0] !== s3[0] && s2[0] !== s3[0]) return false;
  if (s1[0] === s3[0] && s2[0] === s3[0]) {
    if (s3 === '') return true;
    s3 = s3.slice(1)
    return isInterleave(s1.slice(1), s2, s3) || isInterleave(s1, s2.slice(1), s3);
  } else if (s1[0] === s3[0]) {
    if (s3 === '') return s2 === '';
    s3 = s3.slice(1)
    return isInterleave(s1.slice(1), s2, s3)
  } else if (s2[0] === s3[0]) {
    if (s3 === '') return s1 === '';
    s3 = s3.slice(1)
    return isInterleave(s1, s2.slice(1), s3)
  }
  return true;
};

// 动态规划版(递推版)
// 我们定义 f(i, j) 表示 s_1的前 i 个元素和 s_2的前 j 个元素是否能交错组成的前 i+j 个元素
// f(i, j) = [f(i-1,j) and s1(i-1) === s3(i+j-1) )]or[f(i,j-1) and s2(j-1) === s3(i+j-1)]
var isInterleave = function (s1, s2, s3) {
  var n = s1.length;
  var m = s2.length;
  if (n + m !== s3.length) return false;
  var dp = [[true]];
  for (var i = 1; i <= n; i++) {
    dp[i] = []; // 初始化数组
  }
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= m; j++) {
      let p = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p])
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p])
      }
    }
  }
  return dp[n][m];
}


// 动态规划，优化空间复杂度版;使用滚动数组优化空间复杂度
var isInterleave = function (s1, s2, s3) {
  var n = s1.length;
  var m = s2.length;
  if (n + m !== s3.length) return false;
  var dp = [true];
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= m; j++) {
      let p = i + j - 1;
      if (i > 0) {
        dp[j] = dp[j] && s1[i - 1] === s3[p]
      }
      if (j > 0) {
        dp[j] = dp[j] || (dp[j - 1] && s2[j - 1] === s3[p])
      }
    }
  }
  return dp[m];
}



console.log(isInterleave('', '', '')) // true
console.log(isInterleave('', 'a', 'a')) // true
console.log(isInterleave('a', 'b', 'a')) // false
console.log(isInterleave('abc', 'abc', 'aabbcc')) // true
console.log(isInterleave('abc', 'abc', 'abcabc')) // true
console.log(isInterleave('a', 'a', '')) // false
console.log(isInterleave('abc', 'abc', 'abcabc')) // true
console.log(isInterleave('abc', 'abc', 'abab')) // false
console.log(isInterleave('abc', 'abc', 'abcabcdd')) // false
console.log(isInterleave('abc', 'abc', 'abcabccc')) // false
console.log(isInterleave('abc', '', 'cba')) // false
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')) // false
// 超时
isInterleave("bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
  "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
  "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab")