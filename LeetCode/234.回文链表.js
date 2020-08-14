
//Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 两次遍历的方法
var isPalindrome = function (head) {
  var str = [];
  // 先遍历链表获取字符串
  while (head) {
    str.push(head.val)
    head = head.next;
  }
  var len = str.length;
  if (len === 0 || len === 1) return true;
  var left = 0, right = len - 1;
  // 再判断字符串是否是回文
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};


// isPalindrome(new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(2, new ListNode(1))))));
// isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))));
firstHead(new ListNode(1))