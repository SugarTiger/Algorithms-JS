/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var newList = new ListNode(0);
  var tempList = newList;
  let tens = 0;
  while (l1 || l2) {
    let l1Nums = l1 ? l1.val : 0;
    let l2Nums = l2 ? l2.val : 0;
    let sum = l1Nums + l2Nums + tens;
    if (sum >= 10) {
      tens = 1;
      sum = sum % 10;
    } else {
      tens = 0;
    }
    tempList.next = new ListNode(sum);
    tempList = tempList.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  if (tens !== 0) {
    tempList.next = new ListNode(tens)
  }
  return newList.next;
};


function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))