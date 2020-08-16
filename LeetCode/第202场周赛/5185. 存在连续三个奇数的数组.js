/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  const n = arr.length;
  if (n < 3) return false;
  var count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    } else {
      count = 0;
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
};

threeConsecutiveOdds([2, 6, 4, 1])
threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])