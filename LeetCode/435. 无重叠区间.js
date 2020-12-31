/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 动态规划
// 等价于「选出最多数量的区间，使得它们互不重叠」
// f(i) 表示 「以区间 i 为最后一个区间，可以选出的区间数量的最大值」
// 状态转移方程： f(i) = j < i && j[1] <= i[0] => Math.max(f[i], f[j] + 1)
// 时间复杂度O(n^2) 空间复杂度O(n)
var eraseOverlapIntervals = function (intervals) {
  const n = intervals.length;
  if (n === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0])
  const f = Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
  }
  return n - Math.max(...f); // 最后总数减去可以选出的最大区间数量就是
};

// 贪心法
// 先把终点从小到大排序，然后尽量多的收集不相交的区间
var eraseOverlapIntervals = function (intervals) {
  const n = intervals.length;
  if (n === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1])
  let right = intervals[0][1];
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      ans++;
      right = intervals[i][1];
    }
  }
  return n - ans;
}

eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]); // 2
eraseOverlapIntervals([[1, 2], [1, 2], [1, 3], [2, 4], [5, 7], [2, 9]]); // 3
eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]); // 2
eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]); // 1
eraseOverlapIntervals([[1, 2], [2, 3]]); // 0