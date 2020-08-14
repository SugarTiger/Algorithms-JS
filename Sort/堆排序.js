var heapSort = function (nums) {
  // 在原数组上建立大顶堆
  var n = nums.length;
  buildMaxHeap(nums, n);
  var len = n;
  for (var i = 0; i < n; i++) {
    swap(nums, 0, --len); // 把最大数移动到数组后面
    heapCompute(nums, 0, len); // 再调整堆，把最大的数调整到堆顶
  }
}


var buildMaxHeap = function (nums, n) {
  for (var i = n >> 1; i >= 0; i--) { // 从中间往前面（顶部）调整，调整函数里面会继续往下调整，所以i的初始值著需要是n的一半
    heapCompute(nums, i, n); // 调整堆
  }
}

var heapCompute = function (nums, i, n) {
  var left = i * 2 + 1;
  var right = i * 2 + 2;
  var max = i;
  if (left < n && nums[left] > nums[max]) {
    max = left
  }
  if (right < n && nums[right] > nums[max]) {
    max = right
  }
  if (max !== i) {
    swap(nums, max, i)
    heapCompute(nums, max, n);
  }
}

var swap = function (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j]
  nums[j] = temp;
}


heapSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
heapSort([2,1])