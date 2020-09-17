/**
 * @param {number} x
 * @return {boolean}
 */

//  时间复杂度O(K) k 为数字的位数，空间复杂度O(1)
var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0) return false;
  let temp = x;
  let c = 1;
  let newX = 0;
  while (temp / c >= 1) {
    const n = Math.floor(temp / c) % 10;
    newX = n + (newX * 10)
    c *= 10;
  }
  return x === newX
};

// 官方方法 时间复杂度O(log n)
var isPalindrome = function (x) {
  // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return revertedNumber === x || x === Math.floor(revertedNumber / 10)
}



isPalindrome(121)
isPalindrome(1221)
isPalindrome(1)
isPalindrome(54321)
isPalindrome(10)
isPalindrome(100)
isPalindrome(102)