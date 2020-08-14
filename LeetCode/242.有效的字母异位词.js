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
isAnagram("rat", "car")