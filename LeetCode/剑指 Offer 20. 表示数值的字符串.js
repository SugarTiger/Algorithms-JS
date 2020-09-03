/**
 * @param {string} s
 * @return {boolean}
 */
// 内置API方法
var isNumber = function (s) {
  s = s.trim();
  if (s === '') return false;
  const num = Number(s);
  if (num === Infinity || num === -Infinity) return true;
  const ans = num - num;
  return ans === 0;
};



isNumber("  ")
isNumber("+100")
isNumber("5e2")
isNumber("-123")
isNumber("3.1416")
isNumber("-1E-16")
isNumber("0123")
isNumber("12e")
isNumber("1a3.14")
isNumber("1.2.3")
isNumber("+-5")
isNumber("12e+5.4")
isNumber("")
isNumber("123  ")
isNumber("  123")