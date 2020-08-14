// 给定一个无向图graph，当这个图为二分图时返回true。
// 如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
// graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边： graph[i] 中不存在i，并且graph[i]中没有重复的值。

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
// 深度优先搜索
// var isBipartite = function (graph) {
//   var UNCOLORED = 0; // 没有颜色
//   var RED = 1; // 红色
//   var gLen = graph.length;
//   var GREEN = 2; // 绿色
//   var color = Array(gLen).fill(UNCOLORED); // 默认全部是没有颜色
//   var valid = true; // 结果
//   // 深度优先遍历
//   var dfs = function (currentNode, c, graph) {
//     color[currentNode] = c; // 给当前节点上色
//     var cNei = c === RED ? GREEN : RED; // 给与节点连接的节点上相反的颜色
//     for (let neighbor of graph[currentNode]) {
//       if (color[neighbor] === UNCOLORED) {
//         dfs(neighbor, cNei, graph);
//         if (!valid) {
//           return;
//         }
//       } else if (color[neighbor] != cNei) {
//         valid = false;
//         return;
//       }
//     }
//   }
//   for (var i = 0; i < gLen && valid; ++i) {
//     if (color[i] === UNCOLORED) {
//       dfs(i, RED, graph) // 第一个节点红色
//     }
//   }
//   return valid;
// };


// 广度优先遍历
var isBipartite = function (graph) {
  var UNCOLORED = 0, RED = 1, GREEN = 2;
  var n = graph.length;
  var color = Array(n).fill(UNCOLORED); // 默认全部没有上颜色
  var valid = true;

  for (let i = 0; i < n; i++) {
    if (color[i] === UNCOLORED) {
      // 广度遍历上颜色
      let queue = [i];
      color[i] = RED;
      while (queue.length !== 0) {
        let target = queue.shift();
        let cNei = color[target] === RED ? GREEN : RED; // 给与节点连接的节点上相反的颜色
        for (let neighbor of graph[target]) {
          if (color[neighbor] === UNCOLORED) {
            queue.push(neighbor);
            color[neighbor] = cNei;
          } else if (color[neighbor] !== cNei) {
            return false;
          }
        }
      }
    }
  }
  return valid;
}


isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])

