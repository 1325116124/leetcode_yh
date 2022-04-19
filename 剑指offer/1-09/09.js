var CQueue = function () {
  this.arr1 = [];
  this.arr2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.arr1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.arr2.length) {
    return this.arr2.pop();
  } else {
    if (!this.arr1.length) return -1;
    while (this.arr1.length) {
      this.arr2.push(this.arr1.pop());
    }
    return this.arr2.pop();
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
