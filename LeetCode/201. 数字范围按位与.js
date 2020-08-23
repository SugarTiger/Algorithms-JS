/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 暴力法 时间复杂度O(n) 空间复杂度O(1)
var rangeBitwiseAnd = function (m, n) {
  if (m === n) return m;
  if (m === 0 || m === 1) return 0;
  var ans = n;
  while (m <= n) {
    ans = ans & n;
    n--;
  }
  return ans;
};

// 数学规律
var rangeBitwiseAnd = function (m, n) {
  var ans = n;
  if (m === n) {
    ans = m;
  } else if (m === 0 || m === 1) {
    ans = 0;
  } else if (m > n) {
    ans = n;
  } else {
    // 求 m 是 2 的几次方
    var i = Math.log(m) / Math.log(2);
    // 求 n 是 2 的几次方
    var j = Math.log(n) / Math.log(2);
    // 大于的情况是结果都是0
    if (Math.floor(i) < Math.floor(j)) {
      ans = 0;
    } else if (Math.floor(i) === i) {
      // 如果i是整数，证明 m 除了最高位是1，其它位都是0，最后的结构必然似乎m
      ans = m;
    } else {
      let temp = Math.pow(2, Math.floor(i));
      ans = temp + rangeBitwiseAnd(m - temp, n - temp);
    }
  }
  return ans;
};

// 官方方法 位移
var rangeBitwiseAnd = function (m, n) {
  var shift = 0;
  while (m < n) {
    m >>= 1;
    n >>= 1;
    shift++;
  }
  return m << shift;
}


rangeBitwiseAnd(0, 7)
rangeBitwiseAnd(5, 5)
rangeBitwiseAnd(5, 7)
rangeBitwiseAnd(7, 5)
rangeBitwiseAnd(2, 2147483647)
rangeBitwiseAnd(1073741825, 2147483647) // 都是在