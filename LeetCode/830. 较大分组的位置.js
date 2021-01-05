/**
 * @param {string} s
 * @return {number[][]}
 */
// 时间复杂度 O(n) 空间复杂度O(1)
var largeGroupPositions = function (s) {
  const n = s.length, result = [];
  if (n < 3) return result;
  let count = 1, curr = s.charAt(0), start = 0;
  for (let i = 1; i < n; i++) {
    if (curr === s.charAt(i)) {
      count++;
    } else {
      if (count >= 3) {
        result.push([start, i - 1])
      }
      count = 1;
      start = i;
      curr = s.charAt(i);
    }
  }
  if (count >= 3) {
    result.push([start, n - 1])
  }
  return result;
};

largeGroupPositions("abbxxxxzzy"); // [[3,6]]
largeGroupPositions("aaa"); // [[0,2]]
largeGroupPositions("abcdddeeeeaabbbcd"); // [[3,5],[6,9],[12,14]]
largeGroupPositions("aba"); // []
largeGroupPositions("abcdddeeeeaabbbcddd"); // [[3,5],[6,9],[12,14],[16,18]]