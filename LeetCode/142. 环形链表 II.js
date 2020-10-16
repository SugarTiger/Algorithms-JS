/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 判断第一个入度为2的节点就是入环的第一个节点 时间复杂度 O(n) 空间复杂度 O(n)
var detectCycle = function (head) {
  var temp = new ListNode();
  temp.next = head;
  var map = new Map();
  while (temp) {
    if (!map.has(temp)) {
      map.set(temp, 0);
    }
    map.set(temp, map.get(temp) + 1);
    if (map.get(temp) === 2) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

// 优化空间复杂度，污染原来节点，时间复杂度 O(n) 空间复杂度 O(1)
var detectCycle = function (head) {
  while (head) {
    if (head.isVisited) {
      return head;
    } else {
      head.isVisited = true;
    }
    head = head.next;
  }
  return null;
};

// 优化空间复杂度，根据数学推算,时间复杂度 O(n) 空间复杂度 O(1)
var detectCycle = function (head) {
  if (head === null) return null;
  let slow = head, fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new ListNode(3)
var b = new ListNode(2)
var c = new ListNode(0)
var d = new ListNode(-4)
a.next = b;
b.next = c;
c.next = d;
d.next = b;

detectCycle(a)