/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var result = 0;
  var b = Array(n).fill(false);  // 初始化默认值都为 false，为质数标记
  if (2 < n) result++; // 如果大于 2 则一定拥有 2 这个质数
  for (var i = 3; i < n; i += 2) { // 从 3 开始遍历，且只遍历奇数
    if (!b[i]) { // 是质数
      for (var j = 3; i * j < n; j += 2) {
        b[i * j] = true; // 将当前质数的奇数倍都设置成非质数标记 true
      }
      result++; // 质数个数 +1
    }
  }
  return result;
};

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// countPrimes(2)
// countPrimes(10)
// countPrimes(72)
// countPrimes(216)
// countPrimes(432)
countPrimes(499979)