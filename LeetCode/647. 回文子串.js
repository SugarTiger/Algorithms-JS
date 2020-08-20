/**
 * @param {string} s
 * @return {number}
 */
// 方法1 暴力法 找出所有的可能回文子串 时间复杂度 O(n^3) 空间复杂度 O(1)
var countSubstrings = function (s) {
  const len = s.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (isPalindrome(s, i, j)) {
        count++;
      }
    }
  }
  return count;
};
// 判断字符串是否是回文
var isPalindrome = function (str, left, right) {
  while (left <= right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}


// 方法2 优化时间复杂度  中心拓展 找出所有可能的中心
// 回文中心分奇数和偶数，奇数长度的回文中心是一个字符串，偶数长度的回文中心是两个字符串
// 时间复杂度O(n^2) 空间复杂度 O(1)
var countSubstrings = function (s) {
  var n = s.length;
  var ans = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    var l = i >> 1, r = (i >> 1) + i % 2; // 可以罗列一下不同的回文中心，l和r的值，就可以得出规律
    // 一个循环处理完奇偶中心
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--;
      r++;
      ans++;
    }
  }
  return ans;
};


// 方法3 利用空间复杂度优化时间复杂度，Manacher 算法
var countSubstrings = function (s) {
  let n = s.length;
  let t = ['$', '#'];
  for (let i = 0; i < n; i++) {
    t.push(s.charAt(i), '#');
  }
  n = t.length;
  t.push('!');
  t = t.join('');
  const f = new Array(n);
  let iMax = 0, rMax = 0, ans = 0;
  for (let i = 1; i < n; i++) {
    // 初始化 f[i]
    f[i] = i <= rMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1;
    // 中心拓展
    while (t.charAt(i + f[i]) === t.charAt(i - f[i])) {
      ++f[i];
    }
    // 动态维护 iMax 和 rMax
    if (i + f[i] - 1 > rMax) {
      iMax = i;
      rMax = i + f[i] - 1;
    }
    // 统计答案，当前贡献为 (f[i] - 1) / 2 下取整
    ans += (f[i] >> 1)
  }
  return ans;
}



countSubstrings('abc'); // 3   三个回文子串: "a", "b", "c"
countSubstrings('abcba'); // 7   
countSubstrings('aaa'); // 6   6个回文子串: "a", "a", "a", "aa", "aa", "aaa"