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
var oddEvenList = function (head) {
  if (!head) return head;
  var oddNode = head;
  var evenNode = head.next;
  var firstEvenNode = head.next;
  while (oddNode || evenNode) {
    if (oddNode) {
      if (oddNode.next && oddNode.next.next) {
        oddNode.next = oddNode.next.next;
        oddNode = oddNode.next;
      } else {
        oddNode.next = firstEvenNode; // 指向第一个 evenNode
        oddNode = null; // 结尾
      }
    }
    if (evenNode) {
      if (evenNode.next) {
        evenNode.next = evenNode.next.next;
        evenNode = evenNode.next;
      } else {
        evenNode = null;
      }
    }
  }
  return head;
};


function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL
// oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
oddEvenList(new ListNode(1, new ListNode(2)))