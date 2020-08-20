/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。 AVL
// 把链表转换为有序数组，就可以分割成子问题，将一个有序数组转换成平衡二叉搜索树
// 二叉搜索树的中序遍历是有序序列，每次去有序序列的中点中根节点，则可以得到平衡二叉搜索树

// 时间复杂度O(n) 空间复杂度O(n)
// 需要 O(n) 的数组来转换链表
var sortedListToBST = function (head) {
  if (!head) return null;
  var list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  var len = list.length;
  var root = getTreeBySortList(list, 0, len - 1);
  return root;
};

var getTreeBySortList = function (list, l, r) {
  if (l > r) return null;
  if (l === r) return new TreeNode(list[l]);
  var mid = l + ((r - l) >> 1);
  var root = new TreeNode(list[mid]);
  root.left = getTreeBySortList(list, l, mid - 1);
  root.right = getTreeBySortList(list, mid + 1, r);
  return root;
}

// 优化1，不需要把链表转换为数组 分治
// 时间复杂度O(nlog n) 空间复杂度O(log n)
// 因为  getMedian 是时间复杂度瓶颈
var sortedListToBST = function (head) {
  return buildTree(head, null);
}
var buildTree = function (left, right) {
  if (left === right) {
    return null;
  }
  var mid = getMedian(left, right);
  var root = new TreeNode(mid.val);
  root.left = buildTree(left, mid);
  root.right = buildTree(mid.next, right);
  return root;
}
// 获取链表两个节点间的中间节点
var getMedian = function (left, right) {
  var fast = left; // 快节点
  var slow = left; // 慢节点
  while (fast !== right && fast.next !== right) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

// 优化2 优化获取中间节点的逻辑
// 分治 + 中序遍历优化
// 时间复杂度 O(n) 空间复杂度O(log n)
var sortedListToBST = function (head) {
  var globalHead = head;
  var length = getLength(head);
  var buildTree = function (left, right) {
    if (left > right) {
      return null;
    }
    var mid = left + ((right - left) >> 1);
    var root = new TreeNode();
    root.left = buildTree(left, mid - 1);
    root.val = globalHead.val;
    globalHead = globalHead.next;
    root.right = buildTree(mid + 1, right);
    return root;
  }
  return buildTree(0, length - 1);
}
var getLength = function (head) {
  var ret = 0;
  while (head) {
    ret++;
    head = head.next;
  }
  return ret;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

sortedListToBST(null)
sortedListToBST(new ListNode(1))
sortedListToBST(new ListNode(1, new ListNode(2)))
sortedListToBST(new ListNode(1, new ListNode(2, new ListNode(3))))
sortedListToBST(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
sortedListToBST(new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9))))))
sortedListToBST(new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9, new ListNode(10)))))))