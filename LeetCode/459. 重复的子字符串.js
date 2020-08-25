/**
 * @param {string} s
 * @return {boolean}
 */
// 暴力法
// 时间复杂度 O(n^2)
var repeatedSubstringPattern = function (s) {
  var n = s.length;
  var temp = '';
  for (let i = 1; i <= (n >> 1) + 1; i++) {
    let sub = s.slice(0, i)
    let count = 0;
    temp = '';
    while (temp.length < n) {
      temp += sub;
      count++;
    }
    if (count > 1 && temp === s) {
      return true;
    }
  }
  return false;
};


// 使用js内置api
var repeatedSubstringPattern = function (s) {
  return (s + s).indexOf(s, 1) !== s.length;
};

// 官方枚举法 时间复杂度O(n^2) 空间复杂度O(1)
var repeatedSubstringPattern = function (s) {
  var n = s.length;
  for (let i = 1; i * 2 <= n; i++) {
    if (n % i !== 0) continue;
    var match = true;
    for (let j = i; j < n; j++) {
      if (s.charAt(j) !== s.charAt(j - i)) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false;
};


// KMP 算法 时间复杂度O(n) 空间复杂度O(n)
var repeatedSubstringPattern = function (s) {
  return kmp(s + s, s);
}
var kmp = function (query, pattern) {
  var n = query.length;
  var m = pattern.length;
  var fail = Array(m).fill(-1);
  for (let i = 1; i < m; i++) {
    let j = fail[i - 1];
    while (j !== -1 && pattern.charAt(j + 1) !== pattern.charAt(i)) {
      j = fail[j]
    }
    if (pattern.charAt(j + 1) === pattern.charAt(i)) {
      fail[i] = j + 1;
    }
  }
  var match = -1;
  for (let i = 1; i < n - 1; ++i) {
    while (match !== -1 && pattern.charAt(match + 1) !== query.charAt(i)) {
      match = fail[match];
    }
    if (pattern.charAt(match + 1) === query.charAt(i)) {
      ++match;
      if (match === m - 1) {
        return true;
      }
    }
  }
  return false;
}

repeatedSubstringPattern('abab'); // true
repeatedSubstringPattern('aba'); // false
repeatedSubstringPattern('a'); // false
repeatedSubstringPattern('ab'); // false