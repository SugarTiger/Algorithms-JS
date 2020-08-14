/**
 * @param {string[]} words
 * @return {number[][]}
 */
// 暴力法
var palindromePairs = function (words) {
  var result = [];
  var len = words.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (words[i] === words[j]) {
        result.push([i, j])
      } else {
        if (isPalindrome(words[i] + words[j])) {
          result.push([i, j])
        }
        if (isPalindrome(words[j] + words[i])) {
          result.push([j, i])
        }
      }
    }
  }
  return result;
};

// 判断字符串是否是回文
var isPalindrome = function (str) {
  let len = str.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}


// 方法一：枚举前缀和后缀
// 利用哈希表
var palindromePairs = function (words) {
  var wordsRev = []; // 翻转后的字符串
  var indices = new Map();
  var n = words.length;
  for (let word of words) {
    wordsRev.push(word.split('').reverse().join(''));
  }
  // 把翻转后的字符串放在哈希表
  for (var i = 0; i < n; i++) {
    indices.set(wordsRev[i], i)
  }
  var ret = [];
  for (var i = 0; i < n; i++) {
    var word = words[i];
    var m = word.length;
    if (m === 0) continue;
    for (var j = 0; j <= m; j++) {
      if (isPalindrome(word, j, m - 1)) {
        var leftId = findWord(indices, word, 0, j - 1)
        if (leftId !== -1 && leftId !== i) {
          ret.push([i, leftId])
        }
      }
      if (j !== 0 && isPalindrome(word, 0, j - 1)) {
        var rightId = findWord(indices, word, j, m - 1)
        if (rightId !== -1 && rightId !== i) {
          ret.push([rightId, i])
        }
      }
    }
  }
  return ret;
}
// 判断字符串是否是回文
var isPalindrome = function (s, left, right) {
  let len = right - left + 1;
  for (var i = 0; i < (len >> 1); i++) {
    if (s[left + i] !== s[right - i]) {
      return false;
    }
  }
  return true;
}

var findWord = function (indices, s, left, right) {
  var i = indices.get(s.substring(left, right + 1));
  if (i === undefined) {
    return -1;
  }
  return i;
}

palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]); // [[0,1],[1,0],[3,2],[2,4]] 
palindromePairs(["bat", "tab", "cat"]); //  [[0,1],[1,0]]