/**
 * @param {string} s
 * @return {number}
 */
// 相当于26进制
var titleToNumber = function (s) {
  if (!s) return 0;
  let sum = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const num = s.charCodeAt(i) - 64;
    sum += num * Math.pow(26, n - i - 1)
  }
  return sum;
};

titleToNumber(''); // 0
titleToNumber('A'); // 1
titleToNumber('AB'); // 28
titleToNumber('ABC'); // 731
titleToNumber('Z'); // 26