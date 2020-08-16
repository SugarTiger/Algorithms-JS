/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  var n = s.length;
  var newS = [];
  for (var i = 0; i < n; i++) {
    newS[indices[i]] = s[i]
  }
  return newS.join('');
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]); // leetcode;
restoreString("abc", [0, 1, 2]); // abc;
restoreString("aiohn", [3, 1, 4, 2, 0]); // nihao;
restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]); // arigatou;
restoreString("art", [1, 0, 2]); // rat;
restoreString("a", [0]); // 'a';
restoreString("", []); // '';
