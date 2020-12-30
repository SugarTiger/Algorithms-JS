/**
 * @param {number[]} stones
 * @return {number}
 */
// 内置排序
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a)
  while (stones.length > 1) {
    let max1 = stones.shift();
    stones.sort((a, b) => b - a)
    let max2 = stones.shift();
    if (max1 !== max2) {
      stones.unshift(Math.abs(max1 - max2))
      stones.sort((a, b) => b - a)
    }
  }
  return stones[0] || 0;
};



lastStoneWeight([8, 8, 2, 1, 4, 10, 8, 3]); // 0
lastStoneWeight([7, 6, 7, 6, 9]); // 3
lastStoneWeight([2, 7, 4, 1, 8, 1]); // 1