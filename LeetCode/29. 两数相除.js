/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 将两数相除，要求不使用乘法、除法和 mod 运算符。

// 暴力 累减法 时间复杂度O(n) 空间复杂度O(1)
var divide = function (dividend, divisor) {
  var isMinus = false; // 是否是负数
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    isMinus = true;
  }
  if (dividend < 0) {
    dividend = -dividend;
  }
  if (divisor < 0) {
    divisor = -divisor;
  }
  var ans = 0;
  if (dividend < divisor) {
    ans = 0;
  } else if (divisor === 1) {
    ans = dividend;
  } else if (dividend === divisor) {
    ans = 1;
  } else {
    // 计算
  }
  if (isMinus) {
    ans = -ans;
  }
  if (ans > 2147483647) {
    ans = 2147483647;
  } else if (ans < -2147483648) {
    ans = -2147483648;
  }
  return ans;
};

// 优化时间复杂度
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  const INT_MAX = 2147483647;
  const INT_MIX = -2147483648;
  if (divisor === -1) {
    if (dividend > INT_MIX) return -dividend;
    return INT_MAX;
  }
  var a = dividend;
  var b = divisor;
  var sign = 1;
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    sign = -1;
  }
  a = a > 0 ? a : -a;
  b = b > 0 ? b : -b;
  var res = div(a, b);
  if (sign > 0) {
    return res > INT_MAX ? INT_MAX : res;
  }
  return -res;
};
var div = function (a, b) {
  if (a < b) return 0;
  var count = 1;
  var tb = b;
  while ((tb + tb) <= a) {
    count = count + count;
    tb = tb + tb;
  }
  return count + div(a - tb, b);
}

divide(10, -1)
divide(-2147483648, -1)
divide(10, 1);
divide(10, 2)
divide(10, 3)
divide(10, 4)
divide(10, -2)
divide(10, -3)
divide(10, -4)
divide(0, 10)
divide(0, -10)
