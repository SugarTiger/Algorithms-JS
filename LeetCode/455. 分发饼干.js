/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 排序
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const numOfChildren = g.length;
  const numOfCookies = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
      j++;
    }
    if (j < numOfCookies) {
      count++;
    }
  }
  return count;
};

findContentChildren([1, 2, 3], [1, 1]);// 1
findContentChildren([1, 2], [1, 2, 3]);// 2