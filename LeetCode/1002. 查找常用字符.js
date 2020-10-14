/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const allLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const ACounts = [];
  for (let str of A) {
    let i = 0;
    const map = new Map();
    while (str.charAt(i) !== '') {
      if (!map.has(str.charAt(i))) {
        map.set(str.charAt(i), 0);
      }
      map.set(str.charAt(i), map.get(str.charAt(i)) + 1)
      i++;
    }
    ACounts.push(map);
  }
  const ans = [];
  for (let letter of allLetter) {
    let counts = Infinity;
    ACounts.forEach((item) => {
      counts = Math.min(counts, item.get(letter))
    });
    while (counts > 0) {
      ans.push(letter)
      counts--;
    }
  }
  return ans;
};


commonChars(["bella", "label", "roller"]); // ["e","l","l"]