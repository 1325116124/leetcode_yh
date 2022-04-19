class myLinkNode {
  constructor(val,next) {
    this.val = val
    this.next = next
  }
}

var MyLinkedList = function() {
  this._size = 0
  this._head = null
  this._tail = null
};

MyLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this._size) return null;
  let cur = new myLinkNode(0,this._head);
  while(index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};


/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this._size) return -1;
  return this.getNode(index).val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const temp = new myLinkNode(val,this._head)
  this._head = temp
  this._size++
  if(!this._tail) {
    this._tail = temp
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const temp = new myLinkNode(val,null)
  this._size++
  if(!this._tail) {
    this._tail = this._head = temp
  } else {
    this._tail.next = temp
    this._tail = temp
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this._size) return;
  if(index <= 0) {
    this.addAtHead(val);
    return;
  }
  if(index === this._size) {
    this.addAtTail(val);
    return;
  }
  const cur = this.getNode(index-1)
  cur.next = new myLinkNode(val,cur.next)
  this._size++
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return;
  if(index === 0) {
    this._head = this._head.next
    if(this._size === 1) {
      this._tail = null
    }
    this._size--
    return
  }
  const temp = this.getNode(index-1)
  temp.next = temp.next.next
  if(index === this._size - 1) {
    this._tail = temp
  }
  this._size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
