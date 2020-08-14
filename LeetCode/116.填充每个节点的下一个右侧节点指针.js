/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var connect = function (root) {
  if (!root) return root;
  var soureRoot = root;
  var queue = [root];
  var pre = null;
  var count = 1;
  var nextCount = 0;
  while (queue.length > 0) {
    root = queue.shift();
    if (pre) {
      pre.next = root;
    }
    pre = root;
    count--;
    if (root.left) {
      queue.push(root.left)
      nextCount++;
    }
    if (root.right) {
      queue.push(root.right)
      nextCount++;
    }
    if (count === 0) { // 准备进入下一层，重新记录
      count = nextCount;
      nextCount = 0;
      pre = null;
    }
  }
  return soureRoot;
};

// 优化，利用建立起来的next指针,时间复杂度O(N) 空间复杂度O(1)
var connect = function (root) {
  if (!root) return root;
  var leftmost = root;
  while (leftmost.left !== null) {
    var head = leftmost; // // 先将第一层的左右节点连接
    while (head!== null) { // 从每层的最左边节点开始，横向对下一层的子节点进行连接
      head.left.next = head.right; // 下一层的left的next 指向 下一层的right
      if(head.next){
        head.right.next = head.next.left; // 下一层的 right 指向 下一层的left
      }
      head = head.next;
    }
    leftmost = leftmost.left; // 每一层最左边节点
  }
  return root;
}


function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7))))
// connect(new Node(1, new Node(2), new Node(3)))