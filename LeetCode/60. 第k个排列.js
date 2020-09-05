/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 官方解法
var getPermutation = function (n, k) {
  const factorial = [];
  factorial[0] = 1;
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  --k;
  let ans = '';
  const valid = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    let order = Math.floor(k / factorial[n - i]) + 1;
    for (let j = 1; j <= n; j++) {
      order -= valid[j];
      if (order === 0) {
        ans += j;
        valid[j] = 0;
        break;
      }
    }
    k %= factorial[n - i];
  }
  return ans;
};

// 回溯
const getPermutation = (n, k) => {
  let count = 0;
  const used = new Set();
  const helper = (temp) => {
    if (temp.length === n) {
      count++;
      if (count === k) {
        return temp.join('')
      }
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (used.has(i)) continue;
      temp.push(i);
      used.add(i)
      const res = helper(temp);
      temp.pop();
      used.delete(i);
      if (res) {
        return res;
      }
    }
  }
  return helper([])
}

// 优化回溯，充分剪枝
const getPermutation = (n, k) => {
  const used = new Set();

  let factorial = 1;    // 阶乘
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  
  const helper = (temp) => {      // temp是当前已选的数字数组
    const progress = temp.length; // progress表示当前已选了几个数字

    if (progress == n) { // 因为是空降到正确的组，选够了n个即可返回
      return temp.join('');
    }

    const groupNum = factorial / (n - progress); // 一个分组有多少个
    factorial = groupNum;                        // 更新一下阶乘

    for (let i = 1; i <= n; i++) {
      if (used.has(i)) continue;

      if (k > groupNum) { // k大于一组的个数
        k = k - groupNum; // 更新k，
        continue;         // 跳过这一组，即跳过当前的数字i
      }
      temp.push(i);       // 选择i
      used.add(i);        // 记录选择
      return helper(temp);// 继续选
    }
  };

  return helper([]);
};

getPermutation(3, 3);
getPermutation(3, 5);
getPermutation(4, 9);