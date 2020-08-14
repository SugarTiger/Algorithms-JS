/**
 * @param {string} digits
 * @return {string[]}
 */
var map = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};
var letterCombinations = function (digits) {
  var len = digits.length;
  var result = [];
  if (len !== 0) {
    backtrack("", digits);
  }
  function backtrack(combination, next_digits) {
    if (next_digits.length === 0) {
      result.push(combination)
    } else {
      var digit = next_digits[0];
      var letters = map[digit];
      for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        backtrack(combination + letter, next_digits.slice(1));
      }
    }
  }
  return result;
};

letterCombinations("23")