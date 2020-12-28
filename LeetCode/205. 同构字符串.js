/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sl = s.length;
  const tl = t.length;
  if (sl !== tl) return false;
  const sm = new Map();
  const tm = new Map();
  for (let i = 0; i < sl; i++) {
    if (!sm.has(s.charAt(i))) {
      sm.set(s.charAt(i), t.charAt(i))
    } else if (sm.get(s.charAt(i)) !== t.charAt(i)) {
      return false;
    }
    if (!tm.has(t.charAt(i))) {
      tm.set(t.charAt(i), s.charAt(i))
    } else if (tm.get(t.charAt(i)) !== s.charAt(i)) {
      return false;
    }
  }
  return true;
};


isIsomorphic("egg", "add")
isIsomorphic("foo", "bar")
isIsomorphic("paper", "title")