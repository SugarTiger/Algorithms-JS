/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var arr = [];
  if (!numRows) return arr;
  arr.push([1]);
  if (numRows === 1) return arr;
  arr.push([1, 1]);
  if (numRows === 2) return arr;
  for (var i = 2; i < numRows; i++) {
    var tempArr = [];
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArr.push(1);
        continue;
      }
      tempArr.push(arr[i - 1][j - 1] + arr[i - 1][j])
    }
    arr[i] = tempArr;
  }
  return arr;
};

generate(5)