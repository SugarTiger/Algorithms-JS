/**
 * @param {number} x
 * @return {number}
 */
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 迭代写法
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


mySqrt(0); // 0
mySqrt(1); // 1
mySqrt(2); // 1
mySqrt(3); // 1
mySqrt(4); // 2
mySqrt(8); // 2
mySqrt(9); // 3
mySqrt(9); // 3