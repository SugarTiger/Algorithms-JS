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

var letterCombinations = function (digits) {
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
  const len = digits.length;
  const result = [];
  if (len !== 0) {
    backtrack("", map, digits, result, 0, len)
  }
  return result;
}

var backtrack = function (combination, map, digits, result, start, len) {
  if (start === len) {
    return result.push(combination);
  }
  const num = digits[start];
  const letter = map[num];
  for (let i = 0; i < letter.length; i++) {
    backtrack(combination + letter.charAt(i), map, digits, result, start + 1, len);
  }
}

letterCombinations("23")