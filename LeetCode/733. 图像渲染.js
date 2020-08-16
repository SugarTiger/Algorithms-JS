/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const n = image.length;
  if (n === 0) return image;
  const m = image[0].length;
  const oldColor = image[sr][sc];
  dfs(image, sr, sc, newColor, oldColor, n, m);
  return image;
};

// 深度优先遍历
var dfs = function (image, sr, sc, newColor, oldColor, n, m) {
  if (sr < 0 || sr >= n || sc < 0 || sc >= m || image[sr][sc] !== oldColor || image[sr][sc] === newColor) return;
  image[sr][sc] = newColor;
  dfs(image, sr - 1, sc, newColor, oldColor, n, m);
  dfs(image, sr + 1, sc, newColor, oldColor, n, m);
  dfs(image, sr, sc - 1, newColor, oldColor, n, m);
  dfs(image, sr, sc + 1, newColor, oldColor, n, m);
}

// 广度优先遍历
var floodFill = function (image, sr, sc, newColor) {
  const n = image.length;
  if (n === 0) return image;
  const m = image[0].length;
  const oldColor = image[sr][sc];
  const queue = [[sr, sc]];
  while (queue.length > 0) {
    const [sr,sc] = queue.shift();
    if (sr < 0 || sr >= n || sc < 0 || sc >= m || image[sr][sc] !== oldColor || image[sr][sc] === newColor) continue;
    image[sr][sc] = newColor;
    queue.push([sr - 1, sc]);
    queue.push([sr + 1, sc]);
    queue.push([sr, sc - 1]);
    queue.push([sr, sc + 1]);
  }
  return image;
}


floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1)