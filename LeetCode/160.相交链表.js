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
// 增加两个辅助栈，从后面开始对比，时间复杂度O(n) 空间复杂度O(n);
var getIntersectionNode = function (headA, headB) {
  var stackA = [];
  var stackB = [];
  while (headA || headB) {
    if (headA) {
      stackA.push(headA)
      headA = headA.next;
    }
    if (headB) {
      stackB.push(headB)
      headB = headB.next;
    }
  }
  var sameNode = null
  while (stackA.length && stackB.length) {
    headA = stackA.pop();
    headB = stackB.pop();
    if (headA !== headB) {
      break;
    } else {
      sameNode = headA;
    }
  }
  return sameNode;
};

// 双指针，两次遍历对比，如果有相交的节点，必然相遇，时间复杂度O(n) 空间复杂度O(1);
var getIntersectionNode = function (headA, headB) {
  var n1 = headA;
  var n2 = headB;
  while (n1 !== n2) { // 最后大家都会是 null,所以循环会结束
    if (n1 === null) {
      n1 = headB
    } else {
      n1 = n1.next;
    }
    if (n2 === null) {
      n2 = headA
    } else {
      n2 = n2.next;
    }
  }
  return n1;
}
