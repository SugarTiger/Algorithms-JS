// 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。
// 如果小数部分为循环小数，则将循环的部分括在括号内。
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

// 官方题解
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }
  var fraction = [];
  if (numerator < 0 ^ denominator && numerator < 0) {
    fraction.push('-'); // 负号
  }
  var dividend = Math.abs(numerator);
  var divisor = Math.abs(denominator);
  fraction.push(Math.floor(dividend / divisor) + '');
  var remainder = dividend % divisor;
  if (remainder === 0) {
    return fraction.join('');
  }
  fraction.push('.');
  var map = new Map();
  while (remainder !== 0) {
    if (map.has(remainder)) {
      fraction.splice(map.get(remainder), 0, '(');
      fraction.push(')');
      break;
    }
    map.set(remainder, fraction.length);
    remainder *= 10;
    fraction.push(Math.floor(remainder / divisor) + '');
    remainder %= divisor;
  }
  return fraction.join();
}

fractionToDecimal(10, 3)
fractionToDecimal(1, 3)
fractionToDecimal(1, 7)
fractionToDecimal(10, 2)
fractionToDecimal(1, 2)
fractionToDecimal(2, 1)