/**
 * 
  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  var len = s.length;
  if (len === 1) return map[s];
  var result = map[s[0]];
  for (var i = 1; i < len; i++) {
    if (map[s[i - 1]] < map[s[i]]) {
      result += map[s[i]] - map[s[i - 1]] - map[s[i - 1]];
    } else {
      result += map[s[i]];
    }
  }
  return result;
};


romanToInt("III"); // 3
romanToInt("IV"); // 4
romanToInt("IX"); // 9
romanToInt("IC"); // 99
romanToInt("LVIII") // 58
romanToInt("MCMXCIV"); // 1994