/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const lenName = name.length;
  const lenTyped = typed.length;
  let i = 0, j = 0, pro = '';
  while (i < lenName || j < lenTyped) {
    if (name.charAt(i) !== typed.charAt(j)) {
      if (typed.charAt(j) === pro) {
        j++;
      } else {
        return false;
      }
    } else {
      pro = name.charAt(i);
      i++;
      j++;
    }
  }
  return true;
};


isLongPressedName("pyplrz", "ppyypllr")
isLongPressedName("alex", "aaleex")
isLongPressedName("saeed", "ssaaedd")