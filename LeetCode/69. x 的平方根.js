/**
 * @param {number} x
 * @return {number}
 */
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 自己想到的方法
var mySqrt = function (x) {
  let ans = 0;
  while ((ans * ans) < x) {
    ans++;
  }
  if (ans * ans !== x) {
    ans -= 1;
  }
  return ans;
};

// 官方 方法一：袖珍计算器算法
// 时间复杂度：O(1)
// 空间复杂度：O(1)
var mySqrt = function (x) {
  if (x === 0) return 0;
  var ans = Math.floor(Math.exp(0.5 * Math.log(x)));
  return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
}

// 官方 方法二：二分查找
// 由于 x 平方根的整数部分 ans 是满足 k^2 <= x 的最大 k 值
var mySqrt = function (x) {
  var l = 0, r = x, ans = -1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}


mySqrt(4); // 2
mySqrt(0); // 0
mySqrt(1); // 1
mySqrt(2); // 1
mySqrt(3); // 1
mySqrt(8); // 2
mySqrt(9); // 3
mySqrt(9); // 3