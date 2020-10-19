/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 时间复杂度O(N+M) 控价复杂度O(N+M)
var backspaceCompare = function (S, T) {
  const strA = [];
  const strB = [];
  let i = 0;
  while (S.charAt(i) !== '') {
    if (S.charAt(i) === '#') {
      strA.pop();
    } else {
      strA.push(S.charAt(i))
    }
    i++;
  }
  i = 0;
  while (T.charAt(i) !== '') {
    if (T.charAt(i) === '#') {
      strB.pop();
    } else {
      strB.push(T.charAt(i))
    }
    i++;
  }
  return strA.toString() === strB.toString();
};

// 双指针，时间复杂度O(N+M) 控价复杂度O(1)
var backspaceCompare = function (S, T) {
  const lenS = S.length;
  const lenT = T.length;
  let i = lenS - 1;
  let j = lenT - 1;
  while (i >= 0 || j >= 0) {
    if (S[i] === '#') {
      let SharpCount = 1;
      i--;
      while (i >= 0 && SharpCount > 0) {
        if (S[i] === '#') {
          SharpCount++;
        } else {
          SharpCount--;
        }
        i--;
      }
    } else if (T[j] === '#') {
      let SharpCount = 1;
      j--;
      while (j >= 0 && SharpCount > 0) {
        if (T[j] === '#') {
          SharpCount++;
        } else {
          SharpCount--;
        }
        j--;
      }
    } else if (S[i] !== T[j]) {
      return false;
    } else {
      i--;
      j--;
    }
  }
  return true;
}

backspaceCompare("abc##c", "ad#c")
backspaceCompare("ab#c#c", "ad#c")
backspaceCompare("ab#c", "ad#c")