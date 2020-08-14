/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 方法1 暴力法，假设每个链表的长度都是n的话,时间复杂度O(nk^2)
// 第一次合并后的长度是n,第二次合并后的长度是2n 第k次合并后的长度是kn，第k次合并后的时间代价是 O(n+(k-1)n) => O(kn)，一共有k次，所以就是O(nk^2)
var mergeKLists = function (lists) {
  var k = lists.length;
  if (k === 0) return null;
  var newLink = lists[0];
  for (var i = 1; i < k; i++) {
    newLink = mergeTwoLists(newLink, lists[i]);
  }
  return newLink;
};

// 方法2 归并 时间复杂度O(nklgk) 递归会使用到 O(\log k)O(logk) 空间代价的栈空间
var mergeKLists = function (lists) {
  var k = lists.length;
  if (k === 0) return null;
  return mergeKListsHelper(lists, 0, k - 1)
};

// 递归
var mergeKListsHelper = function (lists, lo, hi) {
  if (lo >= hi) return lists[lo];
  const mid = lo + ((hi - lo) >> 1);
  const loNode = mergeKListsHelper(lists, lo, mid);
  const hiNode = mergeKListsHelper(lists, mid + 1, hi);
  return mergeTwoLists(loNode, hiNode)
}

// 方法3 堆/优先队列
// 维护当前每个链表没有被合并的元素的最前面一个
var mergeKLists = function (lists) {
  var k = lists.length;
  if (k === 0) return null;
  // 根据每个链表的第一个元素建立最小堆
  buildMixHeap(lists, k);
  var newNode = new ListNode();
  tempNode = newNode;
  while(lists[0]){
    tempNode.next = lists[0]
    tempNode = tempNode.next;
    lists[0] = lists[0].next;
    heapCompute(lists, 0)
  }
  return newNode.next;
}

var buildMixHeap = function (lists, k) {
  for (let i = k >> 1; i >= 0; i--) {
    heapCompute(lists, i, k); // 调整堆，使得最小值在堆顶
  }
}

var heapCompute = function (lists, i, k) {
  var minIndex = i;
  var leftIndex = i * 2 + 1;
  var rightIndex = i * 2 + 2;
  if (!!lists[minIndex]) {
    if (lists[leftIndex] && lists[leftIndex].val < lists[minIndex].val) {
      minIndex = leftIndex;
    }
    if (lists[rightIndex] && lists[rightIndex].val < lists[minIndex].val) {
      minIndex = rightIndex;
    }
  } else {
    if (lists[leftIndex] && lists[rightIndex]) {
      minIndex = leftIndex;
      if (lists[rightIndex].val < lists[minIndex].val) {
        minIndex = rightIndex;
      }
    } else if (lists[leftIndex]) {
      minIndex = leftIndex;
    } else if (lists[rightIndex]) {
      minIndex = rightIndex;
    }
  }
  if (minIndex !== i) {
    swap(lists, i, minIndex);
    heapCompute(lists, minIndex, k)
  }
}

var swap = function (lists, i, j) {
  var temp = lists[i];
  lists[i] = lists[j];
  lists[j] = temp;
}



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

function ListNode(val,next=null) {
  this.val = val;
  this.next = next;
}
mergeKLists([new ListNode(1, new ListNode(4, new ListNode(5))), new ListNode(1, new ListNode(3, new ListNode(4))), new ListNode(2, new ListNode(6)), null, new ListNode(9)])