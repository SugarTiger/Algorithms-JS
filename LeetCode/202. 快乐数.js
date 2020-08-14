/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var s = new Set();
  s.add(n);
  while (n !== 1) {
    n = isHappyHelper(n);
    if (s.has(n)) {
      return false;
    } else {
      s.add(n);
    }
  }
  return true;
};
// 每一个位数的平方相加
var isHappyHelper = function (n) {
  var sum = 0;
  while (n > 0) {
    var num = n % 10; // 获取个位数
    n = Math.floor(n / 10);
    sum += num * num;
  }
  return sum;
}

// 快慢指针 优化空间复杂度为O(1) 如果不是快慢指针必然相遇，如果相遇的时候不是1,则不是快乐数
var isHappy = function (n) {
  var slowRunner = n; // 慢指针
  var fastRunner = isHappyHelper(n); // 快指针
  while (slowRunner !== 1 && slowRunner !== fastRunner) {
    slowRunner = isHappyHelper(slowRunner)
    fastRunner = isHappyHelper(isHappyHelper(fastRunner))
  }
  return slowRunner === 1;
}


isHappy(19)
isHappy(1)
isHappy(12)
isHappy(123)
isHappy(1234)