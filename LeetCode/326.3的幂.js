/**
 * @param {number} n
 * @return {boolean}
 */

//  循环
var isPowerOfThree = function (n) {
  while (n >= 1) {
    if (n === 1) {
      return true;
    }
    n = n / 3
  }
  return false;
};

// 不循环
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0
};

isPowerOfThree(3)
isPowerOfThree(9)
isPowerOfThree(1)