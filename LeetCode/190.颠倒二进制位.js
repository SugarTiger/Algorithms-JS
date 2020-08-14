/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var mk = 1;
  var num = ''
  for (var i = 0; i < 32; i++) {
    if ((n & mk) !== 0) {
      num += '1';
    } else {
      num += '0';
    }
    mk <<= 1;
  }
  return parseInt(num, 2);
};

reverseBits(2)