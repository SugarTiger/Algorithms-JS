/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var lenN = needle.length;
  if (lenN === 0) return 0;
  var lenH = haystack.length;
  var i = 0;
  while (i + lenN <= lenH) {
    if (needle === haystack.substring(i, i + lenN)) return i;
    i++;
  }
  return -1;
};