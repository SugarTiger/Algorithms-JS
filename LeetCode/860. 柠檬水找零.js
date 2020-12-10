/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const len = bills.length;
  let fCount = 0;
  let tCount = 0;
  for (let i = 0; i < len; i++) {
    switch (bills[i]) {
      case 5:
        fCount++;
        break;
      case 10:
        if (fCount <= 0) {
          return false;
        }
        tCount++;
        fCount--;
        break;
      case 20:
        if (fCount > 0 && tCount > 0) {
          tCount--;
          fCount--;
        } else if (fCount > 2) {
          fCount -= 3;
        } else {
          return false;
        }
        break;
    }
  }
  return true;
};

lemonadeChange([])
lemonadeChange([5, 5, 5, 10, 20])
