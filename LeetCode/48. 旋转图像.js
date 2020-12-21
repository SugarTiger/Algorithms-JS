/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 辅助函数 时间复杂度O(n^2) 空间复杂度O(n^2)
var rotate = function (matrix) {
    var n = matrix.length;
    var m = matrix[0].length;
    var result = [];
    for (var j = 0; j < m; j++) {
        result[j] = [];
        var k = 0;
        for (var i = n - 1; i >= 0; i--) {
            var l = matrix[i][j];
            result[j][k++] = l
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = result[i][j]
        }
    }
};

// 在原数组的基础上调整
var rotate = function (matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; i < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
        }
    }
    // 主对角线翻转
}

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])