/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var counts = 0;
  var mk = 1;
  for (var i = 0; i < 32; i++) {
    if ((n & mk) !== 0) {
      counts++;
    }
    mk <<= 1;
  }
  return counts;
};

hammingWeight(11)