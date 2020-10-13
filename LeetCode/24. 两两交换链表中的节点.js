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
// 辅助队列 时间复杂度O(n) 空间复杂度O(n)
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  var queueHead = [];
  while (head) {
    let curr = head;
    let last = head.next;
    if (last) {
      head = last.next;
      curr.next = null;
      last.next = curr;
      queueHead.push(last);
    }else{
      queueHead.push(curr);
      head = curr.next;
    }
  }
  let newHead = new ListNode();
  let newHeadTmp = newHead;
  for(let headItem of queueHead){
    newHeadTmp.next = headItem;
    newHeadTmp = headItem.next;
  }
  return newHead.next;
};

// 递归 时间复杂度O(n) 空间复杂度O(n)
var swapPairs = function (head) {
  if(!head || !head.next)return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
}


// 迭代 时间复杂度O(n) 空间复杂度O(1)
var swapPairs = function (head) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let temp = dummyHead;
  while(temp.next && temp.next.next){
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummyHead.next;
}


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

swapPairs(new ListNode(1));
swapPairs(new ListNode(1, new ListNode(2)));
swapPairs(new ListNode(1, new ListNode(2, new ListNode(3))));
swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));