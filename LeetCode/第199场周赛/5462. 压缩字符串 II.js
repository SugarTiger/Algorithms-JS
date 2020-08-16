/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  var compressStr = getCompressStr(s);
  if(k === 0){
    return compressStr.length;
  }
};


// 行程长度编码
var getCompressStr = function (s) {
  if(!s)return s;
  var len = s.length;
  var pre = s[0];
  var count = 1;
  var res = s[0];
  for (var i = 1; i < len; i++) {
    if (pre === s[i]) {
      count++;
    } else {
      if (count > 1) {
        res += count + s[i];
        count = 1;
      } else {
        res += s[i];
      }
      pre = s[i];
    }
  }
  if(count>1){
    res+=count;
  }
  return res;
}

getCompressStr("aaabcccd"); // 'a3bc3d'
getCompressStr("aabbaa"); // 'a2b2a2'
getCompressStr("aaaaaaaaaaa"); // 'a11'