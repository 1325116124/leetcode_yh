var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(!this.stackOut.length) {
    let size = this.stackIn.length
    if(size) {
      while(size--) {
        this.stackOut.push(this.stackIn.pop())
      }
    }
  }
  return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let res = this.pop()
  this.stackOut.push(res)
  return res
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackOut.length + this.stackIn.length !== 0 ? false:true
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
