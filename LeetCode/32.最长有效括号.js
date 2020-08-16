/**
 * @param {string} s
 * @return {number}
 */

// 暴力解法 时间复杂度 n3  空间复杂度 n
var longestValidParentheses = function (s) {
    var len = s.length;
    if (len < 2) return 0;
    var end = len - (len % 2);
    for (let i = end; i >= 2; i = i - 2) {
        for (let j = 0; j + i <= len; j++) {
            var t = s.slice(j, j + i)
            if (Valid(t)) {
                return i;
            }
        }
    }
    return 0;
};
function Valid(str) {
    var len = str.length;
    if (len < 2) return false;
    var stack = [];
    for (var i = 0; i < len; i++) {
        if (str[i] === '(') {
            stack.push('(')
        } else if (stack.length !== 0) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}


// 动态规划法 时间复杂度 n 空间复杂度 n
var longestValidParentheses = function (s) {
    var len = s.length;
    if (len < 2) return 0;
    var dp = Array(len).fill(0);
    var max = 0;
    for (let i = 0; i < len; i++) {
        var dp_i_1 = dp[i - 1] || 0;
        if (s[i] === ')' && i - dp_i_1 - 1 >= 0 && s[i - dp_i_1 - 1] === '(') {
            dp[i] = dp_i_1 + (dp[i - dp_i_1 - 2] || 0) + 2;
            max = Math.max(dp[i], max)
        }
    }
    return max;
};

// 栈
function longestValidParentheses(s) {
    var stack = [-1];
    var length = 0;
    var maxLength = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i)
            } else {
                length = i - stack[stack.length - 1]
                maxLength = Math.max(maxLength, length)
            }
        }
    }
    return maxLength;
}

// 正向逆向结合
function longestValidParentheses(s) {
    var lCount = 0, rCount = 0, maxLen = 0, len = s.length;
    if (len < 2) return 0;
    // 正向
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            lCount++;
        } else {
            rCount++;
            if (lCount === rCount) {
                maxLen = Math.max(maxLen, lCount + rCount);;
            } else if (lCount < rCount) {
                lCount = 0;
                rCount = 0;
            }
        }
    }
    // 逆向
    lCount = 0, rCount = 0;
    for (let i = len - 1; i > -1; i--) {
        if (s[i] === ')') {
            rCount++;
        } else {
            lCount++;
            if (lCount === rCount) {
                maxLen = Math.max(maxLen, lCount + rCount);
            } else if (rCount < lCount) {
                lCount = 0;
                rCount = 0;
            }
        }
    }
    return maxLen;
}

longestValidParentheses("()(()"); // 2
longestValidParentheses("()((())"); // 4
longestValidParentheses("())()"); // 2
longestValidParentheses("())(())"); // 4
longestValidParentheses("))(()))"); // 4
longestValidParentheses("))))())()()(()"); // 4