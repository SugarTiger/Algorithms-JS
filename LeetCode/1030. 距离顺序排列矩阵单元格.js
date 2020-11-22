/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// 广度优先遍历 时间复杂度O(RC) 空间复杂度O(RC)
var allCellsDistOrder = function (R, C, r0, c0) {
  const arr = [];
  const ans = [];
  for (let i = 0; i < R; i++) {
    arr[i] = Array(C).fill(0);
  }
  arr[r0][c0] = 1;
  const queue = [[r0, c0]];
  while (queue.length > 0) {
    const [r, c] = queue.pop();
    ans.push([r, c]);
    if (r + 1 < R && arr[r + 1][c] === 0) {
      arr[r + 1][c] = 1;
      queue.unshift([r + 1, c])
    }
    if (r - 1 > -1 && arr[r - 1][c] === 0) {
      arr[r - 1][c] = 1;
      queue.unshift([r - 1, c])
    }
    if (c + 1 < C && arr[r][c + 1] === 0) {
      arr[r][c + 1] = 1;
      queue.unshift([r, c + 1])
    }
    if (c - 1 > -1 && arr[r][c - 1] === 0) {
      arr[r][c - 1] = 1;
      queue.unshift([r, c - 1])
    }
  }
  return ans;

};

allCellsDistOrder(1, 2, 0, 0)
allCellsDistOrder(2, 2, 0, 1)
allCellsDistOrder(2, 3, 1, 2)