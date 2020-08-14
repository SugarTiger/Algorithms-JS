/**
 * @param {number} n
 * @return {number}
 */
// 线性时间复杂度
var trailingZeroes = function (n) {
  var sum = 1;
  // 计算阶乘
  // 计算0的数量
  var count = 0;
  var twoCount = 0;
  var fireCount = 0;
  for (let i = 1; i <= n; i++) {
    var num = i;
    if(num % 2 === 0){
      while (num % 2 === 0) {
        num /= 2;
        twoCount++;
      }
      i++;
    }else if(num % 5 === 0){
      while (num % 5 === 0) {
        num /= 5;
        fireCount++;
      }
    }
  }
  return Math.min(twoCount,fireCount);
};

trailingZeroes(2147483647)
trailingZeroes(40)
trailingZeroes(4)
trailingZeroes(5)
trailingZeroes(6)
trailingZeroes(11)
trailingZeroes(21)
trailingZeroes(30)