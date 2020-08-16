/**
 * @param {number[]} nums
 * @return {number}
 */
// 递归法
var maxCoins = function (nums) {
    var n = nums.length;
    var val = Array(n + 2); // 插入首尾的 1，防止越界
    for (var i = 1; i <= n; i++) {
        val[i] = nums[i - 1]
    }
    val[0] = val[n + 1] = 1; // 插入首尾的 1，防止越界
    var rec = []; // 二位数组
    for (var i = 0; i <= n + 1; i++) {
        rec[i] = Array(n + 2).fill(-1);
    }
    return solve(0, n + 1, rec, val);
};

var solve = function (left, right, rec, val) {
    if (left >= right - 1) {
        return 0;
    }
    if (rec[left][right] !== -1) {
        return rec[left][right]
    }
    for (var i = left + 1; i < right; i++) {
        var sum = val[left] * val[i] * val[right];
        sum += solve(left, i, rec, val) + solve(i, right, rec, val);
        rec[left][right] = Math.max(rec[left][right], sum);
    }
    return rec[left][right];
}


// 动态规划法
var maxCoins = function (nums) {
    var n = nums.length;
    var rec = [];
    var val = [];
    val[0] = val[n + 1] = 1;
    for (var i = 1; i <= n; i++) {
        val[i] = nums[i - 1]
    }
    for (var i = 0; i < n + 2; i++) {
        rec[i] = Array(n + 2).fill(0);
    }
    for (var i = n - 1; i >= 0; i--) {
        for (var j = i + 2; j <= n + 1; j++) {
            for (var k = i + 1; k < j; k++) {
                var sum = val[i] * val[k] * val[j];
                sum += rec[i][k] + rec[k][j];
                rec[i][j] = Math.max(rec[i][j], sum);
            }
        }
    }
    return rec[0][n + 1];
}