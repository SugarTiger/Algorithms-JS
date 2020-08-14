/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 双指针 时间复杂度O(n+m) 空间复杂度O(1)
var mergeTwoLists = function (l1, l2) {
  var tempLink = new ListNode();
  var newLink = tempLink;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      tempLink.next = l2;
      l2 = l2.next;
    } else {
      tempLink.next = l1;
      l1 = l1.next;
    }
    tempLink = tempLink.next;
  }
  if (l1) {
    tempLink.next = l1;
  }
  if (l2) {
    tempLink.next = l2;
  }
  return newLink.next;
};

// 递归，时间复杂度O(n+m) 空间复杂度O(n+m) 调用栈
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  var node = null;
  if (l1.val > l2.val) {
    node = new ListNode(l2.val, mergeTwoLists(l1, l2.next))
  } else {
    node = new ListNode(l1.val, mergeTwoLists(l1.next, l2))
  }
  return node;
}