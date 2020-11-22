/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 运用数组索引，时间复杂度O(N) 空间复杂度O(N)
var reorderList = function (head) {
  const list = [];
  let len = 0;
  while (head) {
    list.push(head)
    len++;
    head = head.next;
  }
  if (len === 0) return head;
  let i = 0, j = len - 1;
  let isS = true;
  while (i <= j) {
    if (i === j) {
      list[i].next = null;
      i++;
      j--;
    } else {
      if (isS) {
        list[i].next = list[j]
        i++;
      } else {
        list[j].next = list[i];
        j--;
      }
      isS = !isS;
    }
  }

  return list[0] || head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

reorderList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
reorderList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))