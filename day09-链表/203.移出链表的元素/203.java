/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode res = new ListNode(0, head);
        ListNode res2 = res;
        while (res.next != null) {
            if (res.next.val == val) {
                res.next = res.next.next;
                continue;
            }
            res = res.next;
        }
        return res2.next;
    }
}