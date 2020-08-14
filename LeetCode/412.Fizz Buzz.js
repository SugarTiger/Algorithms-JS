// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    let isBuzz = i % 5 === 0;
    let isFizz = i % 3 === 0;
    if (isBuzz && isFizz) {
      result.push('FizzBuzz')
    } else if (isBuzz) {
      result.push('Buzz')
    } else if (isFizz) {
      result.push('Fizz')
    } else {
      result.push(i)
    }
  }
  return result;
};