/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var map = {};
  var len1 = s.length;
  var len2 = t.length;
  if (len1 !== len2) return false;
  for (var i = 0; i < len1; i++) {
    if (map[s[i]] > 0) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (var i = 0; i < len2; i++) {
    if (map[t[i]] > 0) {
      map[t[i]]--;
    }
  }
  for (let key in map) {
    if (map[key] !== 0) return false;
  }
  return true;
};

var isAnagram = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen !== tLen) return false;
  const sMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < sLen; i++) {
    if (!sMap.has(s.charAt(i))) {
      sMap.set(s.charAt(i), 0)
    }
    if (!tMap.has(t.charAt(i))) {
      tMap.set(t.charAt(i), 0)
    }
    sMap.set(s.charAt(i), sMap.get(s.charAt(i)) + 1)
    tMap.set(t.charAt(i), tMap.get(t.charAt(i)) + 1)
  }
  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value) return false;
  }
  return true;
}


isAnagram("a", "b")