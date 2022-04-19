/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lengthA = 0
  let lengthB = 0
  let tempA = new ListNode(0,headA)
  let tempB = new ListNode(0,headB)
  while(tempA.next) {
    lengthA++
    tempA = tempA.next
  }
  while(tempB.next) {
    lengthB++
    tempB = tempB.next
  }
  if(tempB !== tempA) {
    return null
  }
  let gap = lengthA - lengthB
  if(gap > 0) {
    while(gap--) {
      headA = headA.next
    }
    while(headA !== headB) {
      headA = headA.next
      headB = headB.next
    }
  } else {
    gap = -gap
    while(gap--) {
      headB = headB.next
    }
    while(headA !== headB) {
      headA = headA.next
      headB = headB.next
    }
  }
  return headA
};
