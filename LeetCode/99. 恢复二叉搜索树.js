/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 利用中序遍历，找出遍历中出现的排序错误节点 空间复杂度O(n) 时间复杂度O(n)
// 正常的二叉搜索树的中序遍历应该是递增的，所以两个节点调换了位置，有以下性质
// 如果某个节点比相邻的下一个节点要大，则这个节点就是出错的节点之一 firstErrNode
// 接下来在出错的节点 firstErrNode 后面 寻找第二个出错的节点，最后交换位置，第二个出现的节点有三种情况
// 第一种：第二个错误节点直接出现在 firstErrNode 的下一个相邻的节点，这时候 firstErrNode 之后的所有节点都是递增顺序
// 第二种：第二个错误节点出现在 firstErrNode 的下一个相邻的节点，到最后一个几点之间，不包括两头两个几点
// 第三种：第二个错误节点出现在 firstErrNode 后面序列的最后一个节点
var recoverTree = function (root) {
  var stack = [];
  var firstErrNode = null; // 第一个错误节点
  var secondErrNode = null; // 第二个错误节点
  var preNode = null;
  var node = root;
  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (!firstErrNode) {
      firstErrNode = node; // 假设中序遍历的第一个节点就是错误节点
    } else {
      if (!preNode) {
        // 找第一个错误节点
        if (firstErrNode.val < node.val) {
          firstErrNode = node;  // 第一个错误节点继续往后移动
        } else {
          // 如果当前节点val小于firstErrNode.val，说明已经找到第一个错误节点，接下来就找第二个错误节点
          preNode = node; // 用来遍历后半段的指针
          secondErrNode = node; // 假设第二个错误节点就是 firstErrNode 的下一个节点
        }
      } else {
        // 找第二个错误节点
        if (preNode.val < node.val) {
          preNode = node; // 继续往后移动
        } else {
          // 上述的第二种情况
          swap(node, firstErrNode)
          preNode = null;
          break;
        }
      }
    }
    node = node.right;
  }
  // 如果是第一和第三种情况，preNode 会一直遍历到最后一个节点
  if (preNode) {
    // 如果是第一种情况，secondErrNode 比 preNode 小
    if (preNode.val > secondErrNode.val) {
      swap(firstErrNode, secondErrNode); // firstErrNode 直接和 firstErrNode 的下一个节点交换
    } else {
      // 如果是第三中情况，secondErrNode 比 preNode 大
      swap(preNode, firstErrNode); // firstErrNode 和最后一个几点交换
    }
  }
};

var swap = function (nodeA, nodeB) {
  var temp = nodeA.val;
  nodeA.val = nodeB.val;
  nodeB.val = temp;
}

// 官方优化后的方法

var recoverTree = function(root) {
  const stack = [];
  let x = null, y = null, pred = null;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pred !== null && root.val < pred.val) {
      y = root;
      if (x === null) {
          x = pred;
      }
      else break;
    }
    pred = root;
    root = root.right;
  }
  swap(x, y);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
recoverTree(new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2))));

recoverTree(new TreeNode(146, new TreeNode(71, new TreeNode(55, new TreeNode(321, new TreeNode(-33)))), new TreeNode(-13, new TreeNode(231), new TreeNode(399))));

recoverTree(new TreeNode(1, new TreeNode(3, null, new TreeNode(2))));

recoverTree(new TreeNode(7, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(8, new TreeNode(5)))));