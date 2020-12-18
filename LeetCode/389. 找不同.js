/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 哈希表  时间复杂度O(n) 空间复杂度O(n)
var findTheDifference = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  const sM = new Map();
  for (let i = 0; i < sLen; i++) {
    const letter = s.charAt(i);
    if (!sM.has(letter)) {
      sM.set(letter, 0)
    }
    sM.set(letter, sM.get(letter) + 1)
  }
  for (let i = 0; i < tLen; i++) {
    const letter = t.charAt(i);
    if (!sM.has(letter)) {
      return letter;
    }
    sM.set(letter, sM.get(letter) - 1)
    if (sM.get(letter) === 0) {
      sM.delete(letter)
    }
  }
};

// charCodeAt 求插值 时间复杂度O(n) 空间复杂度O(1)
var findTheDifference = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let sSum = 0;
  let tSum = 0;
  for (let i = 0; i < sLen; i++) {
    sSum += s.charCodeAt(i)
  }
  for (let i = 0; i < tLen; i++) {
    tSum += t.charCodeAt(i)
  }
  const diffLetter = String.fromCharCode(tSum - sSum);
  return diffLetter;
}

// 官方解法 位运算
// 如果将两个字符串拼接成一个字符串，则问题转换成求字符串中出现奇数次的字符
var findTheDifference = function (s, t) {
  let ret = 0;
  for (let ch of s) {
    ret ^= ch.charCodeAt();
  }
  for (let ch of t) {
    ret ^= ch.charCodeAt();
  }
  return String.fromCharCode(ret);
}

findTheDifference("aba", "bbaa")
findTheDifference("abcd", "abcde")
findTheDifference("", "y")
findTheDifference("a", "aa")