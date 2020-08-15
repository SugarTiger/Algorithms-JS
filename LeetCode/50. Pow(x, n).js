/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
var myPow = function (x, n) {
  if (n === 0) return 1;
  var isPositive = true; // n 是一个正数
  if (n < 0) {
    n = -n;
    isPositive = false;
  }
  if (x === 1 || x === 0) return x;
  if (x === -1) {
    if (n % 2 === 0) return 1;
    return x;
  }
  if (n <= -2147483648 || n >= 2147483647) return 0;
  let ans = 1;
  for (var i = 1; i <= n; i++) {
    ans *= x;
  }
  if (!isPositive) {
    ans = 1 / ans;
  }
  return ans;
};