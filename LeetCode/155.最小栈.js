// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。


/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.min = 0;
  this.stack = [];
  this.minStack = [];
  this.len = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.len++;
  this.stack.push(x); // 从头部插入
  if (this.len === 1 || this.min >= x) {
    this.min = x;
    this.minStack.push(this.min)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.len--;
  var val = this.stack.pop(); // 从头部弹出
  if (val <= this.min) {
    this.minStack.pop();
    var n = this.minStack.length - 1;
    if (n < 0) {
      this.min = 0;
    } else {
      this.min = this.minStack[n]
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
var param_4 = obj.getMin()
obj.pop()
var param_4 = obj.getMin()