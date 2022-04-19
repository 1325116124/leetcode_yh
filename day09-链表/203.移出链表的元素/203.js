/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let tem = new ListNode(0, head);
  let res = tem;
  while (tem.next) {
    if (tem.next.val === val) {
      tem.next = tem.next.next;
      continue;
    }
    tem = tep.next;
  }
  return res.next;
};
