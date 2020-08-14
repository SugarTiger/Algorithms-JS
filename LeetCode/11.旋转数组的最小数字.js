/**
 * @param {number[]} numbers
 * @return {number}
 */
// 正向遍历
var minArray = function (numbers) {
  var len = numbers.length;
  if (len === 0) return;
  var min = numbers[0];
  for (var i = 1; i < len; i++) {
    if (numbers[i] < numbers[i - 1]) {
      min = numbers[i];
      break;
    }
  }
  return min;
};

// 二分查找
var minArray = function (numbers) {
  var len = numbers.length;
  if (len === 0) return;
  var left = 0;
  var right = len - 1;
  while (left < right) {
    var mid = left + ((right - left) >> 1)
    if (numbers[mid] < numbers[right]) {
      right = mid;
    }else if(numbers[mid] > numbers[right]){
      left = mid + 1;
    }else{
      right--;
    }
  }
  return numbers[left];
};

minArray([3, 4, 5, 1, 2]); // 1
minArray([5, 1, 2, 3, 4]); // 1
minArray([4, 5, 1, 2, 3]); // 1
minArray([2, 1]); // 1
minArray([1]); // 1
minArray([]); // 1