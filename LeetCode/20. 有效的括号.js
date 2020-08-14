/**
 * @param {string} s
 * @return {boolean}
 */
// 空间复杂度O(n) 时间复杂度O(n)
var isValid = function (s) {
  var n = s.length;
  var map = new Map();
  map.set('{', '}')
  map.set('(', ')')
  map.set('[', ']')
  var stack = [];
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]); // 收集左括号
    } else {
      let left = stack.pop(); // 弹出最新的左括号，如果和现在的s[i]是不匹配的话，就失败
      if (s[i] !== map.get(left)) return false;
    }
  }
  return stack.length === 0;
};


isValid("()")
isValid("()[]{}")
isValid("((())){{[]}}")