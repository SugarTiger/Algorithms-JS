/**
 * @param {number[]} boxes
 * @return {number}
 */
// 动态规划法
// 1 <= boxes.length <= 100
// 1 <= boxes[i] <= 100
var removeBoxes = function (boxes) {
  const dp = [];
  for (let i = 0; i < 100; i++) {
    dp[i] = [];
    for (let j = 0; j < 100; j++) {
      dp[i][j] = Array(100).fill(0);
    }
  }
  return calculatePoints(boxes, dp, 0, boxes.length - 1, 0);
};

var calculatePoints = function (boxes, dp, l, r, k) {
  if (l > r) return 0;
  if (dp[l][r][k] !== 0) return dp[l][r][k];
  while (r > l && boxes[r] === boxes[r - 1]) {
    r--;
    k++;
  }
  dp[l][r][k] = calculatePoints(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1);
  for (let i = l; i < r; i++) {
    if (boxes[i] === boxes[r]) {
      dp[l][r][k] = Math.max(dp[l][r][k], calculatePoints(boxes, dp, l, i, k + 1) + calculatePoints(boxes, dp, i + 1, r - 1, 0))
    }
  }
  return dp[l][r][k];
}



removeBoxes([]); // 0
removeBoxes([1]); // 1
removeBoxes([1, 3]); // 2
removeBoxes([1, 3, 2]); // 3
removeBoxes([1, 3, 2, 2]); // 6
removeBoxes([1, 3, 2, 2, 2]); // 11
removeBoxes([1, 3, 2, 2, 2, 3]); // 14
removeBoxes([1, 3, 2, 2, 2, 3, 4]); // 15
removeBoxes([1, 3, 2, 2, 2, 3, 4, 3]); // 20
removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]); // 23

removeBoxes([1, 2, 1, 2, 1]); // 11

