/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let temp = null
  let cur = head
  let pre = null
  while(cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};
