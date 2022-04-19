/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  //   if (head === null) return [];
  //   let arr = [];
  //   while (head !== null) {
  //     arr.push(head.val);
  //     head = head.next;
  //   }
  //   return arr.reverse();

  // 第二种反转链表的解法
  //   if (head === null || head.next === null) return head;
  //   let p = head.next;
  //   head.next = null;
  //   let tmp = null;
  //   while (p !== null) {
  //     tmp = p.next; // tmp 指针前进（保存下一个指针信息）
  //     p.next = head; // 指针反转
  //     head = p; // head 指针前进
  //     p = tmp; // p 指针前进
  //   }
  //   return head;

  //第三种是递归的方法
  if (head === null) return [];
  let arr = reversePrint(head.next);
  arr.push(head.val);
  return arr;
};
