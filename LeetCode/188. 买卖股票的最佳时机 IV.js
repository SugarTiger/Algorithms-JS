/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// 用 buy[i][j] 表示对于数组 prices[0..i] 中的价格而言，进行恰好 j 笔交易，并且当前手上持有一支股票，这种情况下的最大利润
// 用 sell[i][j] 表示恰好进行 j 笔交易，并且当前手上不持有股票，这种情况下的最大利润
// 状态转移方程 buy[i][j]=max{buy[i−1][j], sell[i−1][j] − price[i]}
// 状态转移方程 sell[i][j]=max{sell[i−1][j], buy[i−1][j−1] + price[i]}
var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }

  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

  buy[0][0] = -prices[0];
  sell[0][0] = 0;
  for (let i = 1; i <= k; ++i) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }

  for (let i = 1; i < n; ++i) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
    for (let j = 1; j <= k; ++j) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
    }
  }

  return Math.max(...sell[n - 1]);
};

maxProfit(2, [2, 4, 1]); // 2
maxProfit(2, [3, 2, 6, 5, 0, 3]); // 7