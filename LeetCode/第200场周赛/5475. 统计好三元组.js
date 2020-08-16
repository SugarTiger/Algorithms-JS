/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 暴力法
var countGoodTriplets = function (arr, a, b, c) {
  var n = arr.length;
  var result = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if(Math.abs(arr[i] - arr[j]) <= a){
        for (var k = j + 1; k < n; k++) {
          if(Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
            result++;
          }
        }
      }
    }
  }
  return result;
};


countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)
countGoodTriplets([1,1,2,2,3], 0, 0, 1)