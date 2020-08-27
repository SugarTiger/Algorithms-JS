/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// Hierholzer 算法
var findItinerary = function (tickets) {
  const res = [];
  const map = {};
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }
  dfs('JFK', map, res)
  return res;
};
// 当前城市
var dfs = function (node, map, res) {
  const nextNodes = map[node]; // 当前城市的下一站城市
  while (nextNodes && nextNodes.length) { // 遍历可访问的城市，一次迭代设置一个递归分支
    const next = nextNodes.shift(); // 获取并移除第一项优字母小的城市
    dfs(next, map, res) // 向下递归
  }
  // 当前城市没有下一站，就把他加到res里，递归结束，向上返回，选过的城市一个个推入res 
  res.unshift(node)
}


findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["SFO", "CCT"], ["LHR", "SFO"], ["SJC", "SFO"]]);
findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]);
findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]); // ["JFK","ATL","JFK","SFO","ATL","SFO"] 或者 ["JFK","SFO","ATL","JFK","ATL","SFO"]
findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["SFO", "JFK"], ["ATL", "JFK"], ["ATL", "SFO"]]);
findItinerary([])
findItinerary([["JFK", "SFO"]]); // ['JFK','SFO']
findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["SFO", "CCT"], ["LHR", "SFO"]]); // ["JFK","MUC","LHR","SFO","SJC","CCT"]