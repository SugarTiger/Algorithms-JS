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
// 时间复杂度 O(n) 空间复杂度O(n)
var connect = function (root) {
  if (!root) return root;
  const queue = [root];
  const depthQueue = [1];
  const path = [];
  const setNext = () => {
    const len = path.length;
    let next = null;
    for (let i = len - 1; i >= 0; i--) {
      path[i].next = next;
      next = path[i];
    }
    path.length = 0;
  }
  let curDepth = 1;
  while (queue.length > 0) {
    const node = queue.shift();
    const depth = depthQueue.shift();
    if (curDepth !== depth) {
      setNext();
      curDepth = depth;
    }
    path.push(node);
    if (node.left) {
      queue.push(node.left)
      depthQueue.push(depth + 1)
    }
    if (node.right) {
      queue.push(node.right)
      depthQueue.push(depth + 1)
    }
  }
  setNext();
  return root;
};

// 利用已经建立好的 next 指针，空间复杂度O(1)
var connect = function (root) {
  if (!root) return root;
  let cur = root;
  let lNode = null;
  let linkHead = null;
  while (cur) {
    if (!lNode) {
      if (cur.left && cur.right) {
        cur.left.next = cur.right;
        lNode = cur.right;
      } else if (cur.left) {
        lNode = cur.left;
      } else if (cur.right) {
        lNode = cur.right;
      }
      linkHead = cur.left || cur.right;
    } else {
      if (cur.left) {
        lNode.next = cur.left;
        lNode = cur.left;
      }
      if (cur.right) {
        lNode.next = cur.right;
        lNode = cur.right;
      }
    }
    cur = cur.next;
    if (!cur) {
      cur = linkHead;
      lNode = null;
      linkHead = null;
    }
  }
  return root;
}

// 官方解法
var connect = function (root) {
  if (root === null) return null
  let last = null, nextStart = null;
  const handle = (p) => {
    if (last !== null) {
      last.next = p;
    }
    if (nextStart === null) {
      nextStart = p;
    }
    last = p;
  }
  let start = root;
  while (start !== null) {
    last = null;
    nextStart = null;
    for (let p = start; p !== null; p = p.next) {
      if (p.left) {
        handle(p.left)
      }
      if (p.right) {
        handle(p.right)
      }
    }
    start = nextStart;
  }
  return root;
}


function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, null, new Node(7))))