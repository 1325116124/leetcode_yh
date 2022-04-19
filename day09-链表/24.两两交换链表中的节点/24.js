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
var swapPairs = function(head) {
  // const cur = head;
  // while(head && head.next) {
  //   let temp = head.val
  //   head.val = head.next.val
  //   head.next.val = temp
  //   head = head.next.next
  // }
  // return cur

  // let cur = new ListNode(0,head)
  // let newHead = cur
  // while(cur.next && cur.next.next) {
  //   let temp = cur.next
  //   let res = temp.next
  //   let ret = temp.next.next
  //   cur.next = cur.next.next
  //   res.next = temp
  //   temp.next = ret
  //   cur = cur.next.next
  // }
  // return newHead.next

  if(!head || !head.next) return head
  let newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};
