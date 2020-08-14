
// 利用快速排序
function findKthLargest(nums, k) {
  var len = nums.length;
  if (k > len || k < 1) return -1;
  findKHelp(nums, k - 1, 0, len - 1);
  var target = nums[k - 1]
  return target;
}

function findKHelp(nums, k, lo, hi) {
  if (k > hi || k < lo || lo >= hi) return;
  var povie = partition(nums, lo, hi);
  // 不需要完全排序号数组，只需要找出对应的k
  if (povie > k) {
    findKHelp(nums, k, lo, povie - 1);
  } else if (povie < k) {
    findKHelp(nums, k, povie + 1, hi)
  }
}

// 快速排序
function qSort(nums, lo, hi) {
  if (lo > hi) return;
  var povie = partition(nums, lo, hi);
  qSort(nums, povie + 1, hi)
  qSort(nums, lo, povie - 1);
}
// 利用快速排序的找出基准值的函数
function partition(nums, left, right) {
  var i = left + Math.floor(Math.random() * (right - left + 1)); // 随机数
  swap(nums, i, right);
  for (var j = left, i = left - 1; j < right; j++) {
    if (nums[j] > nums[right]) { // 大的在前面
      swap(nums, j, i++);
    }
  }
  swap(nums, i++, right);
  return i;
}


function swap(nums, left, right) {
  var temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 利用大顶堆求解
var findKthLargest = function (nums, k) {
  // 建立大顶堆
  buildMaxHeap(nums);
  var len = nums.length;
  for (var i = len - 1; i >= 0; i--) {
    if (k === 1) {
      return nums[0];
    }
    swap(nums, 0, i);
    len--;
    k--;
    heapipf(nums, 0, len); // 调整大顶堆，使得 0 是最大的
  }
};

// 建立大顶堆
function buildMaxHeap(nums) {
  var len = nums.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapipf(nums, i, len);
  }
}

// 调整大顶堆
function heapipf(nums, i, len) {
  var left = i * 2 + 1;
  var right = i * 2 + 2;
  var largest = i;
  if (left < len && nums[left] > nums[largest]) {
    largest = left;
  }
  if (right < len && nums[right] > nums[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(nums, largest, i);
    // 递归处理新的largest
    heapipf(nums, largest, len);
  }
}

findKthLargest([-1, -1], 2); // -1
findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
findKthLargest([3, 3, 3, 3, 3, 3, 3, 3, 3], 8); // 3
findKthLargest([0, 1, 2, 3, 4], 3); // 2
findKthLargest([0, 1, 2, 3, 4], 4); // 1
findKthLargest([0, 1, 2, 3, 4], 5); // 0