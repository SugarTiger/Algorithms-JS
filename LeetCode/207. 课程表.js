/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 拓扑排序思想 深度优先算法
var canFinish = function (numCourses, prerequisites) {
  var visited = Array(numCourses).fill(0); // 保存节点状态
  var valid = true; // 结果
  var edges = []; // 
  for (var i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  // 收集每一个课程指向的课程，指向的意思就是：例如课程A指向课程B，则需要修完课程A才能修课程B
  for (let item of prerequisites) {
    edges[item[1]].push(item[0]);
  }
  // 从每一个课程开始遍历，如果中途 valid 为false，则中断遍历
  for (var i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      valid = dfs(i, visited, edges, valid);
    }
  }
  return valid;
};
var dfs = function (u, visited, edges, valid) {
  visited[u] = 1; // 遍历中
  for (var v of edges[u]) { // 遍历 u 指向的各个节点
    if (visited[v] === 0) { // 未遍历
      valid = dfs(v, visited, edges, valid);
      if (!valid) return false;
    } else if (visited[v] === 1) {// 存在环
      valid = false;
      return valid;
    }
  }
  visited[u] = 2; // 遍历完成
  return true;
}

// 拓扑排序思想 广度优先算法
var canFinish2 = function (numCourses, prerequisites) {
  var edges = []; // 二维数组，索引号对应课程，值是需要修完索引号的课程才能修的课程列表
  var indeg = Array(numCourses).fill(0);
  for (var i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  for (let info of prerequisites) {
    edges[info[1]].push(info[0]); // 收集课程info[1]对应的课程info[0]
    indeg[info[0]]++; // 入度+1
  }
  var queue = [];
  for (var i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i); // 收集入度为0的节点，先学习
    }
  }
  var visited = 0; // 记录学习过的课程
  while (queue.length !== 0) {
    visited++;
    let u = queue.shift(); // 取出队头
    for (let v of edges[u]) { // 遍历学习了 u 之后可以学习的课程
      --indeg[v]; // 学习了一个课程u之后，v的入度都可以减1
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
  }
  return visited === numCourses;
}



canFinish(2, [[1, 0]])
canFinish(2, [[1, 0], [0, 1]])
canFinish(5, [[1, 0], [2, 1], [3, 2], [4, 1], [3, 4]])
canFinish(5, [[1, 0], [2, 1], [3, 2], [4, 1], [3, 4], [1, 3]])