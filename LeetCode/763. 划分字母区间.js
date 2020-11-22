/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const len = S.length;
  let lables = [];
  const map = new Map();
  for (let i = 0; i < len; i++) {
    lables = helper(lables, S.charAt(i), map)
  }
  const ans = lables.map(item => item.length)
  return ans;
};
var helper = function (lables, next, map) {
  let lablesTmp = [...lables];
  if (!map.has(next)) {
    lablesTmp.push(next);
    map.set(next, lablesTmp.length - 1)
  } else {
    const includeIndex = map.get(next);
    lables.push(next);
    const lablesLen = lables.length;
    lablesTmp = [];
    for (let i = 0; i < lablesLen; i++) {
      if (i >= includeIndex) {
        if (!lablesTmp[includeIndex]) {
          lablesTmp[includeIndex] = lables[i];
        } else {
          lablesTmp[includeIndex] += lables[i];
        }
        updateLableMap(map, lables[i], includeIndex)
      } else {
        lablesTmp[i] = lables[i];
      }
    }
  }
  return lablesTmp;
}
var updateLableMap = function (map, lable, index) {
  let i = 0;
  while (lable.charAt(i) !== '') {
    map.set(lable.charAt(i), index)
    i++;
  }
}


partitionLabels("ababcbacadefegdehijhklij"); // [9,7,8] "ababcbaca", "defegde", "hijhklij"
partitionLabels("abcd");
partitionLabels("abca");
partitionLabels("aaaa");