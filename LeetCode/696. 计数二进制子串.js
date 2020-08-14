/**
 * @param {string} s
 * @return {number}
 */
// 暴力法，滑动窗口 （会超时）
var countBinarySubstrings = function (s) {
  var n = s.length;
  var count = 0;
  for (var j = 2; j <= n; j = j + 2) {
    for (var i = 0; i + j - 1 < n; i++) {
      if (isBinarySubstrings(s, i, i + j - 1)) {
        count++;
      }
    }
  }
  return count;
};

var isBinarySubstrings = function (s, l, r) {
  var n = r - l + 1;
  if (n === 0 || n % 2 === 1) return false;
  var markL = s[l];
  while (l < r) {
    if (s[l] === s[r] || s[l] !== markL) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

// 按字符分组 空间复杂度O(n) 时间复杂度O(n)
var countBinarySubstrings = function (s) {
  var n = s.length;
  var result = 0;
  if (n === 0) return result;
  var j = -1;
  var counts = []; // 记录连续出现的相同字符，counts数组相邻的项对应不同的字符连续出现的个数
  var pre = '';
  for (let i = 0; i < n; i++) {
    if (pre === s[i]) {
      counts[j]++;
    } else {
      pre = s[i];
      counts[++j] = 1;
    }
  }
  // 收集结果
  for (let i = 1; i < j + 1; i++) {
    result += Math.min(counts[i - 1], counts[i]);// 根据规律，两个不同的数可以组合的种类个数是由最小的一个决定
  }
  return result;
}

// 对于某一个位置 ii，其实我们只关心 i - 1i−1 位置的 \rm countscounts 值是多少，所以可以用一个 \rm lastlast 变量来维护当前位置的前一个位置，这样可以省去一个 \rm countscounts 数组的空间。
var countBinarySubstrings = function (s) {
  var n = s.length;
  var result = 0;
  if (n === 0) return result;
  var pre = ''; // 记录上一个字符
  var last = 0;
  var count = 0; // 记录连续相同字符的个数
  for (let i = 0; i < n; i++) {
    if (pre === s[i]) {
      count++;
    } else {
      result += Math.min(last, count)
      pre = s[i];
      last = count;
      count = 1;
    }
  }
  // 最后一次累计
  result += Math.min(last, count)
  return result;
}

// 官方解法
var countBinarySubstrings = function (s) {
  let ptr = 0, n = s.length, last = 0, ans = 0;
  while (ptr < n) {
    const c = s.charAt(ptr);
    let count = 0;
    while (ptr < n && s.charAt(ptr) === c) {
      ++ptr;
      ++count;
    }
    ans += Math.min(count, last);
    last = count;
  }
  return ans;
};


countBinarySubstrings(""); // 0
countBinarySubstrings("00110011"); // 6
countBinarySubstrings("10101"); // 4
countBinarySubstrings("00111011"); // 4