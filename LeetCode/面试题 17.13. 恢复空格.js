/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const len = sentence.length;
  const dp = new Array(len + 1);
  const wordDict = new Set();
  for (const word of dictionary) {
    wordDict.add(word);
  }
  dp[0] = 0; // 前0个字符 没有字符 更没有未识别的字符
  for (let i = 1; i <= len; i++) {
    dp[i] = dp[i - 1] + 1; // i个字符的最少未识别的字符 保底的情况（可能还可以更少）
    for (let j = i - 1; j >= 0; j--) { // j 从 i-1 开始，word 的长度从 0 开始
      const word = sentence.substring(j, i);
      if (wordDict.has(word)) {
        dp[i] = Math.min(dp[i], dp[j]);
      } else {
        dp[i] = Math.min(dp[i], dp[j] + i - j);
      }
    }
  }
  return dp[len]
};



respace(["vprkj", "sqvuzjz", "ptkrqrkussszzprkqrjrtzzvrkrrrskkrrursqdqpp", "spqzqtrqs", "rkktkruzsjkrzqq", "rk", "k", "zkvdzqrzpkrukdqrqjzkrqrzzkkrr", "pzpstvqzrzprqkkkd", "jvutvjtktqvvdkzujkq", "r", "pspkr", "tdkkktdsrkzpzpuzvszzzzdjj", "zk", "pqkjkzpvdpktzskdkvzjkkj", "sr", "zqjkzksvkvvrsjrjkkjkztrpuzrqrqvvpkutqkrrqpzu"], "rkktkruzsjkrzqqzkvdzqrzpkrukdqrqjzkrqrzzkkrr");