/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  var dp = '1';
  var result = '1';
  var i = 1;
  while (i < n) {
    result = '';
    var dpLen = dp.length;
    var j = 0, temp = '', tempCount = 0, tempRes = '';
    while (j < dpLen) {
      if (temp === dp[j]) {
        tempCount++;
      } else {
        result += tempRes;
        temp = dp[j];
        tempCount = 1;
      }
      tempRes = tempCount + dp[j];
      j++;
    }
    result += tempRes;
    dp = result;
    i++;
  }
  return result;
};


// countAndSay(1); // '1'
// countAndSay(2); // '11'
// countAndSay(3); // '21'
countAndSay(4); // '1211'
countAndSay(5); // '111221'
