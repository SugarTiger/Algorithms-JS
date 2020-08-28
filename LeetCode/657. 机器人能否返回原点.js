/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0, y = 0;// 起始坐标
  const n = moves.length;
  let i = 0;
  while (i < n) {
    let step = moves.charAt(i++);
    if (step === 'U') {
      y += 1;
    } else if (step === 'D') {
      y -= 1;
    } else if (step === 'R') {
      x += 1;
    } else if (step === 'L') {
      x -= 1;
    }
  }
  return x === 0 && y === 0;
};
judgeCircle("UD")
judgeCircle("LL")