/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
  this.MinArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x);
  const min = this.MinArr[this.MinArr.length - 1] ?? Infinity;
  if (x <= min) {
    this.MinArr.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const x = this.arr.pop();
  if (x === this.MinArr[this.MinArr.length - 1]) {
    this.MinArr.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.MinArr[this.MinArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
