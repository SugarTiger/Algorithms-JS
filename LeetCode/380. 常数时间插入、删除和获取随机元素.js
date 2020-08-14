// 所有操作需要满足时间复杂度为O(1)
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.m = new Map();
  this.l = [];
  this.len = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.m.has(val)) {
    return false;
  } else {
    this.m.set(val, this.len);
    this.l.push(val);
    this.len++;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.m.has(val)) {
    var i = this.m.get(val);
    var last = this.l[this.len - 1];
    this.m.delete(val);
    if (this.m.has(last)) {
      this.m.set(last, i);
    }
    var temp = this.l[i];
    this.l[i] = last;
    this.l[this.len - 1] = temp;
    this.l.pop();
    this.len--;
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  var index = ((Math.random() * this.len) << 1) >> 1;
  return this.l[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(51)
var param_1 = obj.insert(2)
var param_1 = obj.insert(10)
var param_1 = obj.insert(63)
var param_1 = obj.insert(57)
var param_2 = obj.remove(10)
var param_3 = obj.getRandom()


["RandomizedSet", "remove", "remove", "insert", "getRandom", "remove", "insert"]
[[], [0], [0], [0], [], [0], [0]]