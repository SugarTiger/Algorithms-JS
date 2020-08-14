/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 递归求解
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  var min = coinChangeHelper(coins, amount, []);
  return min;
};
var coinChangeHelper = function (coins, amount, cache) {
  if (typeof cache[amount] === 'number') return cache[amount];
  if (coins.includes(amount)) {
    cache[amount] = 1;
    return cache[amount];
  }
  var len = coins.length;
  var min = Infinity;
  for (var i = 0; i < len; i++) {
    if (coins[i] < amount) {// 
      var sum = coinChangeHelper(coins, amount - coins[i], cache);
      if (sum !== -1) {
        min = Math.min(min, sum + 1)
      }
    }
  }
  if (min === Infinity) min = -1;
  cache[amount] = min;
  return min;
}


// 动态规划，迭代求解
var coinChange = function (coins, amount) {
  var dp = Array(amount + 1).fill(Infinity);
  for (let coin of coins) {
    dp[coin] = 1;
  }
  dp[0] = 0;
  for (var i = 1; i <= amount; i++) {
    if (dp[i] !== Infinity) continue;
    for (let coin of coins) {
      if (coin < i && dp[i - coin] !== -1) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
    if (dp[i] === Infinity) dp[i] = -1;
  }
  return dp[amount];
}


coinChange([1, 2, 5], 11)
coinChange([1, 2, 5], 0)
coinChange([2], 3)