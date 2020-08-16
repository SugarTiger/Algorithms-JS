/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const segments = [];
  const ans = [];
  var n = s.length;
  const dfs = function (s, segId, segStart) {
    if (segId === SEG_COUNT) {
      if (segStart === n) {
        ans.push(segments.join('.'));
      }
    }
    if (segStart === n) {
      return;
    }

    if (s[segStart] === '0') {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
    }

    let addr = 0;
    for (let segEnd = segStart; segEnd < n; segEnd++) {
      addr = addr * 10 + (+s[segEnd]);
      if(addr > 0 && addr <= 0xFF){
        segments[segId] = addr;
        dfs(s,segId+1,segEnd+1);
      }
    }
  }
  dfs(s, 0, 0);
  return ans;
};


restoreIpAddresses("25525511135"); // ["255.255.11.135", "255.255.111.35"]