// 暴力解法
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.array = nums;
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.array = this.original
    this.original = [...this.original]
    return this.array;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var len = this.array.length;
    // 暴力解法
    var aux = [...this.array];
    for (var i = 0; i < len; i++) {
        var removeIdx = Math.floor(aux.length * Math.random());
        this.array[i] = aux[removeIdx];
        aux.splice(removeIdx, 1)
    }

    return this.array;
};
