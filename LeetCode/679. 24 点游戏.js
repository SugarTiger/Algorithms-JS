/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 因为数字的个数和操作符个数是固定的，所以可以组合的可能性也是固定的
// 一共 9216 种不同的组合
var judgePoint24 = function (nums) {
  const list = [...nums];
  const ans = solve(list);
  return ans;
};
var solve = function (list) {
  const TARGET = 24, EPSILON = 1e-6,
    ADD = 0,  // 加法
    MULTIPLY = 1, // 乘法
    SUBTRACT = 2,  // 减法
    DIVIDE = 3; // 除法
  const size = list.length;
  if (size === 0) return false;
  if (size === 1) return Math.abs(list[0] - TARGET) < EPSILON;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j) {
        const list2 = [];
        for (let k = 0; k < size; k++) {
          if (k !== i && k !== j) {
            list2.push(list[k]); // 选择两个数添加到数组里
          }
        }
        // 进行加减乘除计算
        for (let k = 0; k < 4; k++) {
          if (k < 2 && i > j) continue;
          if (k === ADD) {
            list2.push(list[i] + list[j]);
          } else if (k === MULTIPLY) {
            list2.push(list[i] * list[j]);
          } else if (k === SUBTRACT) {
            list2.push(list[i] - list[j]);
          } else if (k === DIVIDE) {
            if (Math.abs(list[j]) < EPSILON) {
              continue
            } else {
              list2.push(list[i] / list[j])
            }
          }
          if (solve(list2)) {
            return true;
          }
          list2.pop();
        }
      }
    }
  }
  return false;
}


judgePoint24([4, 1, 8, 7])