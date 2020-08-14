/**
 * @param {number} N
 * @return {boolean}
 */
// 两个玩家都以最佳状态参与游戏。
var divisorGame = function (N) {
  var isA = true;
  while (N > 1) {
    N = N - 1;
    isA = !isA;
  }
  return !isA;
};

// 发现规律，如果N是偶数，最后就是鲍勃赢
// 如果N是奇数，最后就是爱丽丝赢，但是1除外
var divisorGame = function (N) {
  return N % 2 === 0;
};

divisorGame(1); // false
divisorGame(2); // true
divisorGame(3); // false
divisorGame(4); // true
divisorGame(5); // false
divisorGame(6); // true