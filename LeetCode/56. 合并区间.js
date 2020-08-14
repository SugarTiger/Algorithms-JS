/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  var len = intervals.length;
  if (len === 0) return intervals;
  // 排序
  intervals.sort((a, b) => (a[0] - b[0]));
  var res = [intervals[0]];
  var j = 0;
  for (var i = 1; i < len; i++) {
    if (res[j][1] >= intervals[i][0]) {
      res[j][1] = Math.max(res[j][1],intervals[i][1])
    } else {
      res[++j] = intervals[i];
    }
  }
  return res;
};


merge([[1, 3], [4, 5], [6, 8], [7, 9]]); // []
merge([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1,6],[8,10],[15,18]]
merge([[1, 4], [4, 5]]); // [[1,5]]
merge([[1, 4], [2, 3]]); // [[1,4]]
