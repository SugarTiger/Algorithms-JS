/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var left = 1;
    var right = n;
    while (left <= right) {
      var mid = left + ((right - left) >> 1);
      var isBad = isBadVersion(mid);
      if ((mid === 1 || mid === n || !isBadVersion(mid - 1)) && isBad) {
        return mid;
      } else if (isBad) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  };
};

var ss = solution((n => (n >= 1)));

ss(7);

