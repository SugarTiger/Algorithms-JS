/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

//  动态规划 时间复杂度O(n) 空间复杂度O(n)
// 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润
// dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润（i 从 0 开始）
// dp[i][0] = Max(dp[i-1][0],dp[i-1][1]+prices[i]-fee); // 第i-1天就已经没有股票了 或者 第i-1天的时候有股票，然后第i天卖出，扣除手续费
// dp[i][1] = Max(dp[i-1][1],dp[i-1][0]-prices[i]); // 第i-1天就持有股票  或者 第 i-1天的时候没有骨片，然后买入股票
// 初始值 dp[0][0] 就是 0
// 初始值 dp[0][1] 就是 -prices[0]
var maxProfit = function (prices, fee) {
  const len = prices.length;
  if (len < 2) return 0;
  const dp = [[0, -prices[0]]];
  for (let i = 1; i < len; i++) {
    dp[i] = [];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[len - 1][0]
};

// 动态规划  优化空间复杂度为O(1)
var maxProfit = function(prices,fee){
  const len = prices.length;
  if (len < 2) return 0;
  let dp0 = 0;
  let dp1 = -prices[0];
  for(let i = 1;i<len;i++){
    let dpTemp0 = Math.max(dp0, dp1 + prices[i] - fee);
    let dpTemp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = dpTemp0;
    dp1 = dpTemp1;
  }
  return dp0;
}

// 贪心
var maxProfit = function(prices,fee){
  const n = prices.length;
  let buy = prices[0] + fee;
  let profit = 0;
  for(let i=1;i<n;i++){
    if(prices[i] + fee < buy){
      buy = prices[i]+fee; // 价格更低
    }else if(prices[i] > buy){ // 上涨了，可以卖出了
      profit += prices[i] - buy; // 利润
      buy = prices[i]; // 作为可以后悔的操作，如果下一个prices[i]更高则继续减去buy
    }
  }
  return profit;
}


maxProfit([1, 3, 2, 8, 4, 9], 2); // (8 - 1 - 2) + (9 - 4 - 2) = 8