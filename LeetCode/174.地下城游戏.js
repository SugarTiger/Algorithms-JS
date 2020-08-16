// var calculateMinimumHP = function (dungeon) {
//     var n = dungeon.length;
//     var m = dungeon[0].length;
//     var dp = [];
//     // 初始化 dp 状态数组
//     for (var i = 0; i < n; i++) {
//         dp[i] = [];
//         for (var j = 0; j < m; j++) {
//             dp[i][j] = [];
//         }
//     }
//     dp[0][0][0] = dungeon[0][0];
//     for (var j = 1; j < m; j++) {
//         dp[0][j][0] = dungeon[0][j] + dp[0][j - 1][0]; // 初始化第一行的值
//     }
//     for (var i = 1; i < n; i++) {
//         dp[i][0][0] = dungeon[i][0] + dp[i - 1][0][0]; // 初始化第一列的值
//     }
//     for (var i = 1; i < n; i++) {
//         for (var j = 1; j < m; j++) {
//             var item = dungeon[i][j];
//             dp[i][j - 1].forEach((val) => {
//                 dp[i][j].push(val + item);
//             });
//             dp[i - 1][j].forEach((val) => {
//                 dp[i][j].push(val + item);
//             });
//         }
//     }
//     return dp;

// };

var calculateMinimumHP = function (dungeon) {
    var n = dungeon.length;
    var m = dungeon[0].length;
    var max = dungeon[0][0];
    var dp = [];
    for (var i = 0; i <= n; i++) {
        dp[i] = Array(m+1).fill(Infinity);
    }
    dp[n][m - 1] = dp[n - 1][m] = 1;
    for (var i = n - 1; i >= 0; i--) {
        for (var j = m - 1; j >= 0; j--) {
            var minn = Math.min(dp[i + 1][j], dp[i][j + 1])
            dp[i][j] = Math.max(minn - dungeon[i][j], 1);
        }
    }
    return dp[0][0];
};

calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])


calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])