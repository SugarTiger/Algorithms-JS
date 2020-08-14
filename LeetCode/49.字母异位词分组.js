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
    let key = keys.join('');
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

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
groupAnagrams([])
groupAnagrams(['eat'])