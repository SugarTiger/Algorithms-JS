/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  var preState0 = -prices[0];
  var preState1 = 0;
  var preState2 = 0;
  var state0 = preState0, state1 = preState1, state2 = preState2;
  var len = prices.length;
  for (var i = 1; i < len; i++) {
    state0 = Math.max(preState0, preState2 - prices[i]);
    state1 = preState0 + prices[i];
    state2 = Math.max(preState1, preState2)
    preState0 = state0;
    preState1 = state1;
    preState2 = state2;
  }
  return Math.max(state1, state2);
};
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  var len = prices.length;
  var dp = [[-prices[0], 0, 0]];
  for (var i = 1; i < len; i++) {
    dp[i] = [];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]); // 手上持有股票的最大收益
    dp[i][1] = dp[i - 1][0] + prices[i]; // 手上不持有股票，并且处于冷冻期中的累计最大收益 = 前一天持有股票的最大收益 + 当前股价 （因为处于持有股票状态的最大收益是包含减去了当时的股价，现在加上相当于现在的股价减去当时的股价）
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]); // 不持有股票，不是冷冻期的最大收益
  }
  return Math.max(dp[len - 1][1], dp[len - 1][2]);
};

maxProfit([1, 2, 3, 0, 2]);