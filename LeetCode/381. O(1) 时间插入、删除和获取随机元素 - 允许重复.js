/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.list = [];
  this.map = new Map();
  this.length = 0;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.list.push(val);
  const set = this.map.has(val) ? this.map.get(val) : new Set();
  set.add(this.length)
  this.map.set(val, set)
  this.length++;
  return set.size === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  let i = undefined;
  for (const it of this.map.get(val)) {
    if (!i) {
      i = it;
      break;
    }
  }
  const lastNum = this.list[this.length - 1];
  this.list[i] = lastNum;
  this.map.get(val).delete(i);
  this.map.get(lastNum).delete(this.length - 1);
  if (i < this.length - 1) {
    this.map.get(lastNum).add(i)
  }
  if (this.map.get(val).size === 0) {
    this.map.delete(val);
  }
  this.list.pop();
  this.length--;
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  var index = ((Math.random() * this.length) << 1) >> 1;
  return this.list[index];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


var collection = new RandomizedCollection();
// 向集合中插入 1 。返回 true 表示集合不包含 1 。
collection.insert(1);

// 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
collection.insert(1);

// 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
collection.insert(2);

// getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
collection.getRandom();

// 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
collection.remove(1);

// getRandom 应有相同概率返回 1 和 2 。
collection.getRandom();