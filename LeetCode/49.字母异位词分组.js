/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = new Map();
  for (let item of strs) {
    let keys = Array(26).fill(0);
    let i = 0, len = item.length;
    while (i < len) {
      let code = item.charCodeAt(i++) - 97;
      keys[code]++;
    }
    let key = keys.join(','); // 如果空格合并会出现重复
    if (map.has(key)) {
      let newArr = map.get(key);
      newArr.push(item)
      map.set(key, newArr)
    } else {
      map.set(key, [item])
    }
  }
  var result = [];
  for (let item of map) {
    result.push(item[1])
  }
  return result;
};

// 官方解法
var groupAnagrams = function(strs) {
  const map = new Object();
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};

groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])
groupAnagrams(["ddddddddddg", "dgggggggggg"])
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
groupAnagrams([])

