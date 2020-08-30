/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = '';
  const n = s.length;
  let letter = '';
  for (let i = n - 1; i >= 0; i--) {
    if (s.charAt(i) === ' ') {
      ans = ' ' + letter + ans;
      letter = '';
    } else {
      letter += s.charAt(i)
    }
  }
  if (letter) {
    ans = letter + ans;
  }
  return ans;
};

reverseWords("Let's take LeetCode contest"); // "s'teL ekat edoCteeL tsetnoc"
reverseWords("contest");
reverseWords("");
reverseWords("cd");
reverseWords("Let's take   LeetCode   contest");