/**
 * 买卖股票的最佳时机 II https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/22/
 * @param {number[]} prices
 * @return {number}
 */
// 输入: [7,1,5,3,6,4]
// 输出: 7

// 输入: [1,2,3,4,5]
// 输出: 4
var maxProfit = function(prices) {
    // 第一种方法
    return prices.reduce(function(sum,num,index,src){
        var next = src[index+1];
        if(next&&num<next)return sum+(next-num);
        return sum;

    },0)
    // 第二种方法
    // var i = 0,len = prices.length,sum=0;
    // for(;i<len-1;i++){
    //     if(i+1>=len)break;
    //     if(prices[i]<prices[i+1])sum+=prices[i+1]-prices[i];
    // }
    // return sum;
};
