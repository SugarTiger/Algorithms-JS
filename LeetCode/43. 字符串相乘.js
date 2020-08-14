/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const n = num1.length;
  const m = num2.length;
  let sum = '0';
  for (let i = n - 1; i >= 0; i--) {
    let ten = 0; // 进位
    let result = '';
    for (let j = m - 1; j >= 0; j--) {
      let temp = (num1[i] * num2[j]) + ten;
      ten = Math.floor(temp / 10);
      temp = temp % 10;
      result = temp + result;
    }
    if (ten > 0) {
      result = ten + result;
    }
    // 补充0
    let nums = i;
    while (n - nums > 1) {
      result += '0';
      nums++;
    }
    sum = addition(result, sum);
  }
  return sum;
};

var addition = function (num1, num2) {
  var n = num1.length;
  var m = num2.length;
  var i = n - 1, j = m - 1;
  var ten = 0, result = '';
  while (i >= 0 || j >= 0) {
    let temp = 0;
    if (i >= 0 && j >= 0) {
      temp = Number(num1[i]) + Number(num2[j]) + ten;
    } else if (i >= 0) {
      temp = Number(num1[i]) + ten;
    } else {
      temp = Number(num2[j]) + ten;
    }
    ten = Math.floor(temp / 10);
    temp = temp % 10;
    result = temp + result;
    i--;
    j--;
  }
  if (ten > 0) {
    result = ten + result;
  }
  return result;
}

// 官方解法二
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const m = num1.length;
  const n = num2.length;
  let ansArr = Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    let x = +num1[i];
    for (let j = n - 1; j >= 0; j--) {
      let y = +num2[j];
      ansArr[i + j + 1] += x * y;
    }
  }
  for (let i = m + n - 1; i > 0; i--) {
    ansArr[i - 1] += Math.floor(ansArr[i] / 10);
    ansArr[i] %= 10;
  }
  let index = ansArr[0] === 0 ? 1 : 0;
  let ans = '';
  while (index < m + n) {
    ans = ans + ansArr[index++];
  }
  return ans;
}



multiply('0', '52')
multiply('9133', '0')
multiply('123', '456')