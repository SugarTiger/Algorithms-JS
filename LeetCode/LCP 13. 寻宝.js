/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function (maze) {
  const n = maze.length;
  const m = maze[0].length;
  // 机关和石头
  const buttons = [];
  const stones = [];
  // 起点和重点
  let sx = -1, sy = -1, tx = -1, ty = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 'M') {
        buttons.push([i, j])
      }
      if (maze[i][j] === 'O') {
        stones.push([i, j])
      }
      if (maze[i][j] === 'S') {
        sx = i;
        sy = j;
      }
      if (maze[i][j] === 'T') {
        tx = i;
        ty = j;
      }
    }
  }
  const nb = buttons.length;
  const ns = stones.length;
  const startDist = bfs(sx, sy, maze, n, m);

  // 边界情况：没有机关
  if(nb === 0){
    return startDist[tx][ty];
  }
  // 从某个机关到其他机关 / 起点与终点的最短距离。
  const dist = [nb];
  for(let i=0;i<nb;i++){
    dist[i] = Array(nb+2).fill(-1);
  }
  // 中间结果
};

// 广度优先遍历
var bfs = function (x, y, maze, n, m) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const ret = [];
  for (let i = 0; i < n; i++) {
    ret[i] = Array(m).fill(-1);
  }
  ret[x][y] = 0;
  const queue = [];
  queue.push([x, y]);
  while (queue.length > 0) {
    let p = queue.shift();
    const curx = p[0], cury = p[1];
    for (let k = 0; k < 4; k++) {
      let nx = curx + dx[k], ny = cury + dy[k];
      if (inBound(nx, ny, n, m) && maze[nx][ny] !== "#" && ret[nx][ny] === -1) {
        ret[nx][ny] = ret[curx][cury] + 1;
        queue.push([nx, ny])
      }
    }
  }
  return ret;
}
var inBound = function (x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}


minimalSteps(["S#O", "M..", "M.T"]); // 16
minimalSteps(["S#O", "M.#", "M.T"]); // -1
minimalSteps(["S#O", "M.T", "M.."]); // 17
minimalSteps(["S#O#", "M..T", "..M.", "...M"]); // 20