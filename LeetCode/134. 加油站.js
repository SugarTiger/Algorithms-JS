/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 暴力法 时间复杂度O(N^2) 空间复杂度O(1)
var canCompleteCircuit = function (gas, cost) {
  const len = gas.length;
  let result = -1;
  function checkPing(index) {
    let curr = 0;
    let count = 0;
    for (let i = index; count < len; i++, count++) {
      if (i === len) i = 0;
      curr += (gas[i] - cost[i]);
      if (curr < 0) break;
    }
    if (count === len) {
      result = index;
    }
  }
  for (let i = 0; i < len; i++) {
    checkPing(i)
    if (result !== -1) break;
  }
  return result;
};

// 官方解法 时间复杂度O(n)
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let sumOfGas = 0, sumOfCost = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      sumOfGas += gas[j];
      sumOfCost += cost[j];
      if (sumOfCost > sumOfGas) {
        break;
      }
      cnt++;
    }
    if (cnt === n) {
      return i
    } else {
      i = i + cnt + 1;
    }
  }
  return -1;
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
canCompleteCircuit([1], [1])
canCompleteCircuit([1, 1], [1, 1])
canCompleteCircuit([2, 3, 4], [3, 4, 3])
canCompleteCircuit([1, 3, 1, 4, 5], [3, 2, 4, 1, 4])