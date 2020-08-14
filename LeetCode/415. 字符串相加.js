/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var n = num1.length;
  var m = num2.length;
  var i = n - 1;
  var j = m - 1;
  var decade = 0;
  var result = '';
  var sum = 0;
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0) {
      sum = (+num1[i]) + (+num2[j]) + decade;
      i--;
      j--;
    } else if (i >= 0) {
      sum = (+num1[i]) + decade;
      i--;
    } else if (j >= 0) {
      sum = (+num2[j]) + decade;
      j--;
    }
    decade = Math.floor(sum / 10);
    sum = sum % 10;
    result = sum + result;
  }
  if (decade) {
    result = decade + result;
  }
  return result;
};

addStrings('1', '9')