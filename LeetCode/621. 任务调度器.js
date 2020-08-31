/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 方法一：排序
var leastInterval = function (tasks, n) {
  const map = Array(26).fill(0);
  for (let task of tasks) {
    map[task.charCodeAt(0) - 65]++;
  }
  map.sort();
  let time = 0;
  while (map[25] > 0) {
    let i = 0;
    while (i <= n) {
      if (map[25] === 0)
        break;
      if (i < 26 && map[25 - i] > 0) {
        map[25 - i]--;
      }
      time++;
      i++;
    }
    map.sort();
  }
  return time;
};

// 方法二 设计
var leastInterval = function (tasks, n) {
  const map = Array(26).fill(0);
  for (let task of tasks) {
    map[task.charCodeAt(0) - 65]++;
  }
  map.sort();
  let max_val = map[25] - 1, idle_slots = max_val * n;
  for (let i = 24; i >= 0 && map[i] > 0; i--) {
    idle_slots -= Math.min(map[i], max_val);
  }
  return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;
}


leastInterval(["A", "A", "A", "B", "B", "B"], 2); // A -> B -> (待命) -> A -> B -> (待命) -> A -> B