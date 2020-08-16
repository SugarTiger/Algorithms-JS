/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var result = '';
    var len = strs.length;
    if (len === 0) return result;
    result = strs[0];
    if (len === 1) return result; // 如果只有一个元素，则第一个元素就是最长的公共前缀
    var i = 1, j = 0, temp = '';
    // 遍历整个数组
    while (i < len) {
        // 当前遍历过的字符得到的公共前缀和下一个字符串计算得到新的公共前缀
        j = 0;
        temp = '';
        while (j < result.length && j < strs[i].length) {
            if (temp.length === j && result[j] === strs[i][j]) { // temp.length === j 是为了防止两个字符串开头不一一致，而中间或者结尾一致了
                temp += result[j];
            }
            j++;
        }
        if (temp === '') {
            result = '';
            break;
        } else {
            result = temp;
        }

        i++;
    }
    return result;
};


longestCommonPrefix(["aca","cba"]) // ''
longestCommonPrefix(["flower","flow","flight"]) // 'fl'
longestCommonPrefix(["dog","racecar","car"]) // ''
longestCommonPrefix(["dog"]) // 'dog'
