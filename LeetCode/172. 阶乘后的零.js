/**
 * @param {number} n
 * @return {number}
 */
// 线性时间复杂度
var trailingZeroes = function (n) {
  // 计算阶乘
  // 一个2和一个5相乘才有一个0，所以计算2和5的个数就知道尾0有多少个
  // 5的数量肯定比2的数量多，所以只需要计算5的数量
  var count = 0;
  for (let i = 5; i <= n; i += 5) {
    var num = i;
    while (num % 5 === 0) {
      num /= 5;
      count++;
    }
  }
  return count;
};

// 优化时间复杂度
// 
var trailingZeroes = function (n) {
  var zeroCount = 0;
  var currentMultiple = 5;
  while (n >= currentMultiple) {
    zeroCount += (n / currentMultiple);
    currentMultiple *= 5;
  }
  return zeroCount;
}

trailingZeroes(40)
trailingZeroes(4)
trailingZeroes(5)
trailingZeroes(6)
trailingZeroes(11)
trailingZeroes(21)
trailingZeroes(30)
trailingZeroes(2147483647)