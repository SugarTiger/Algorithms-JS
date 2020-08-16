/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 动态规划，遍历可能的状态，然后进行状态记录
    var sLen = s.length,pLen = p.length;
    var dp = Array(sLen+1); // 初始化状态全部是 false，减少状态转换
    for(var i=0;i<dp.length;i++){
        dp[i] = Array(pLen+1).fill(false);
    }
    dp[0][0] = true;
    // 如果 s 的长度是0，那么 p一定是要所有都是 * 号才是 true，否则都是 false
    for(i=1;i<=pLen;i++){
        if(p[i-1] === '*'){
            dp[0][i] = true;
        }else{
            break;
        }
    }
    for(i=1;i<=sLen;i++){
        for(var j=1;j<=pLen;j++){
            if(p[j-1] === '*'){
                dp[i][j] = dp[i][j-1] || dp[i-1][j];
            }else if(p[j-1] === '?' || p[j-1] === s[i - 1]){
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    return dp[sLen][pLen];
};