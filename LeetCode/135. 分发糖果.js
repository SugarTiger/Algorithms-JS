/**
 * @param {number[]} ratings
 * @return {number}
 */
// 时间复杂度 最好的情况O(n) 最坏的情况 O(nlogn) 空间复杂度O(n)
var candy = function (ratings) {
  const len = ratings.length;
  if (len === 0) return 0;
  let weights = [1];
  let pre = ratings[0];
  for (let i = 1; i < len; i++) {
    if (pre === ratings[i]) { // 等于
      weights[i] = 1;
    } else if (pre < ratings[i]) { // 大于
      weights[i] = weights[i - 1] + 1;
    } else { // 小于
      weights[i] = 1;
      // 往后检查
      let j = i - 1;
      while (j >= 0 && ratings[j] > ratings[j + 1] && weights[j] <= weights[j + 1]) {
        weights[j] = weights[j + 1] + 1
        j--;
      }
    }
    pre = ratings[i];
  }
  return weights.reduce((sum, item) => (sum + item), 0)
};

// 优化 时间复杂度O(n) 空间复杂度O(n)
var candy = function (ratings) {
  const n = ratings.length;
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  let right = 0, ret = 0;
  for (let i = n - 1; i > -1; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    ret += Math.max(left[i], right);
  }
  return ret;
};


candy([3, 3, 2, 1, 2, 3, 2, 1, 1]); // 16
candy([1, 0, 2]); // 2,1,2  5
candy([1, 2, 2]); // 1,2,1  4
candy([1, 1, 0, 2]); // 1,2,1,2  6