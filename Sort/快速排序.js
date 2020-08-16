// 快速排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    var len = nums.length;
    if (len > 1) {
        quickSort(nums, 0, len - 1);
    }
    return nums;
};

// 快速排序
var quickSort = function (nums, lo, hi) {
    if (lo >= hi) return;
    let p = partition(nums, lo, hi); // 获取基准值
    quickSort(nums, lo, p - 1);
    quickSort(nums, p + 1, hi);
}

// 获取范围的随机数
var getRangeRandom = function (lo, hi) {
    return lo + Math.floor((Math.random() * (hi - lo + 1)))
}

// 获取基准值
var partition = function (nums, lo, hi) {
    swap(nums, getRangeRandom(lo, hi), hi); // 把从lo到hi区间随机得到一个基准值转换到高位
    for (var i = lo, j = lo; j < hi; j++) {
        if (nums[j] <= nums[hi]) { // 如果当前检索的值小于基准值，则把j换到i的前面，然后i++
            swap(nums, i++, j);
        }
    }
    // 最后在把基准值和i位置交换，这样子基准值后面的数字都是比基准值大
    swap(nums, i, hi);
    return i; // i 就是基准值
}

// 交换方法
var swap = function (nums, left, right) {
    if (left === right) return
    var temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}

sortArray([3,-1])