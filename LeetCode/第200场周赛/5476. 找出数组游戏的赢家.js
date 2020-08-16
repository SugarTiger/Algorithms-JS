/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 暴力法，超出时间限制
var getWinner = function (arr, k) {
  var n = arr.length;
  if (n === 0) return -1;
  if (k >= n) { // k 大于
    k = n;
  }
  var winner = arr[0];
  var minIndex = 0;
  var winnerCount = 0;
  while (k !== winnerCount) {
    if (winner > arr[1]) {
      winnerCount++;
      minIndex = 1;
    } else {
      minIndex = 0;
      winnerCount = 1;
      winner = arr[1];
    }
    arr.push(arr[minIndex])
    arr.splice(minIndex, 1);
  }
  return winner;
};

// 哈希表
var getWinner = function (arr, k) {
  var n = arr.length;
  if (n === 0) return -1;
  if (k >= n) { // k 大于
    k = n;
  }
  var tempArr = [...arr];
  tempArr.sort((a, b) => (a - b));
  var map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(tempArr[i], i);
  }
  var winner = arr.find(item => (map.get(item) >= k));
  return winner;
}

getWinner([2, 1, 3, 5, 4, 6, 7], 2); // 5
getWinner([3, 2, 1], 10); // 3
getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7); // 9
getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000); //99