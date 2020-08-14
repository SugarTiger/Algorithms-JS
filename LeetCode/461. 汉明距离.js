/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var count = 0;
  var mk = 1;
  for (var i = 0; i < 32; i++) {
    if ((x & mk) !== (y & mk)) {
      count++;
    }
    mk <<= 1;
  }
  return count;
};

hammingDistance(1, 2)
hammingDistance(1, 3)
hammingDistance(1, 4)
hammingDistance(1, 5)
hammingDistance(1, 6)
hammingDistance(5, 10)
hammingDistance(5, 11)
hammingDistance(5, 12)
hammingDistance(5, 13)