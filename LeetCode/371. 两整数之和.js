/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 在位运算操作中，异或的一个重要特性是无进位加法
// 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
// step1：a和b按位异或，相当于忽略进位，计算两个数相加的值 得到 num1
// step2：a和b按位与，再左移1位，相当于计算两个数相加的进位值 得到 num2
// step3：把 num1 赋给 a,把 num2 赋给b,重复 step1和step2,知道b为0,则a就是结果
var getSum = function (a, b) {
  if (a === 0) return b;
  while (b !== 0) {
    const num1 = a ^ b;
    b = (a & b) << 1;
    a = num1;
  }
  return a;
};
getSum(-1, 3)
getSum(2, 4)
getSum(3, 5)
getSum(0, 5)
getSum(5, 0)