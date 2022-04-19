/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let cur = new ListNode(0,head)
  let fast = cur, slow = cur
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if(slow === fast) {
      let newHead = cur
      while(newHead !== fast) {
        fast = fast.next
        newHead = newHead.next
      }
      return newHead
    }
  }
  return null
};
