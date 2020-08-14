/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (str[0] === ' ') {
    str = str.trim();
  }
  var len = str.length;
  if (len === 0) return 0;
  if (!isNum(str[0]) && str[0] !== '+' && str[0] !== '-') return 0;
  var symbol = '+'; // 默认是整数
  var starInde = 0, endIndex;
  if (str[0] === '+' || str[0] === '-') {
    starInde = 1;
    symbol = str[0];
  }
  var i = starInde;
  // 获取有效的开头字符，+，-,
  while (i < len) {
    if (!isNum(str[i])) return 0;
    if (str[i] === '0') {
      i++;
    } else {
      starInde = i;
      break;
    }
  }
  i = starInde;
  // 收集有效的数字
  while (i <= len) {
    const charIsNum = isNum(str[i] || '');
    if (charIsNum) {
      i++;
    } else {
      endIndex = i;
      break;
    }
  }
  if (starInde >= endIndex) {
    return 0;
  }
  var res = +(str.substring(starInde, endIndex));
  if (symbol === '-') {
    res = -res;
  }
  if (res > 2147483647) {
    res = 2147483647;
  } else if (res < -2147483648) {
    res = -2147483648;
  }
  return res;
};

var isNum = function (char) {
  var a = char.charCodeAt(0);
  return a >= 48 && a <= 57;
}


myAtoi("  -0012a42")
myAtoi("+-2")
myAtoi("42")
myAtoi("   -42")
myAtoi("4193 with words")
myAtoi("words and 987")
myAtoi("-91283472332")
