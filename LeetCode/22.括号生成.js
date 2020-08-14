/**
 * @param {number} n
 * @return {string[]}
 */
// 自己思路，错误的
var generateParenthesis = function (n) {
  if (n === 0) return [];
  var dp = [];
  dp[0] = ["()"];
  for (var i = 1; i < n; i++) {
    dp[i] = [];
    var len = dp[i - 1].length;
    for (var j = 0; j < len; j++) {
      dp[i].push(dp[i - 1][j] + '()');
      dp[i].push('(' + dp[i - 1][j] + ')');
      if (dp[i - 1][j] + '()' !== '()' + dp[i - 1][j]) {
        dp[i].push('()' + dp[i - 1][j]);
      }
    }
  }
  return dp[n - 1];
};



// 递归
var generateParenthesis = function (n) {
  return generate(n);
}
var cache = [];
function generate(n) {
  if (cache[n]) return cache[n];
  var ans = [];
  if (n === 0) {
    ans.push('')
  } else {
    for (var c = 0; c < n; ++c) {
      for (var left of generate(c)) {
        for (var right of generate(n - 1 - c)) {
          ans.push('(' + left + ')' + right);
        }
      }
    }
  }
  cache[n] = ans;
  return ans;
}

// 回溯法
var generateParenthesis = function (n) {
  var ans = [];
  function backtrack(s, left, right) {
    if (s.length === 2 * n) {
      ans.push(s.join(''));
      return;
    }
    if (left < n) {
      s.push('(')
      backtrack(s, left + 1, right)
      s.pop();
    }
    if (right < left) {
      s.push(')')
      backtrack(s, left, right + 1);
      s.pop();
    }
  }
  backtrack([], 0, 0)
  return ans
};



generateParenthesis(1); // ["()"]
generateParenthesis(2); // ["(())","()()"]

generateParenthesis(3); // ["(())()","()()()","()(())","((()))","(()())"]

generateParenthesis(4); // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
generateParenthesis(5); // ["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()","((()(())))","((()()()))","((()())())","((()()))()","((())(()))","((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))","(()(())())","(()(()))()","(()()(()))","(()()()())","(()()())()","(()())(())","(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()","()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())","()(()())()","()(())(())","()(())()()","()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"]
