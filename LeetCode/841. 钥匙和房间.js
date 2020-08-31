/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

//  判断是否可以遍历完图所有的点
// 深度优先遍历
var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  if (n === 0) return true;
  const set = new Set();
  dfs(rooms, 0, set);
  return set.size === n;
};
var dfs = function (rooms, curr, set) {
  if (set.has(curr)) return;
  set.add(curr);
  while (rooms[curr].length > 0) {
    const i = rooms[curr].shift();
    if (i !== curr) {
      dfs(rooms, i, set);
    }
  }
}

// 广度优先遍历
var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  if (n === 0) return true;
  const set = new Set();
  const queue = [0];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (!set.has(curr)) {
      set.add(curr);
      while (rooms[curr].length > 0) {
        const i = rooms[curr].shift();
        if (i !== curr) {
          queue.push(i);
        }
      }
    }
  }
  return set.size === n;
};

canVisitAllRooms([[1], [2], [3], []]); // true
canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]); // false
canVisitAllRooms([[1],[4],[3],[2],[1]]); // false
canVisitAllRooms([[1],[3,4],[3],[2],[1]]); // true

