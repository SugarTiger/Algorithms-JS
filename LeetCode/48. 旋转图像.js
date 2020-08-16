/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    var m = matrix[0].length;
    var result = [];
    for(var j=0;j<m;j++){
        result[j] = [];
        var k = 0;
        for(var i=n-1;i>=0;i--){
            var l = matrix[i][j];
            result[j][k++] = l
        }  
    }
    return result;
};

rotate([[1,2,3],[4,5,6],[7,8,9]])