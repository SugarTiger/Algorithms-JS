/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  if (!root) return 0;
  root.route = 0; // 节点距离跟节点的路径的和
  root.parent = null;
  var queue = [root];
  var leafList = []; // 叶子节点列表
  var count = 0;
  // 收集叶子节点
  var node = null;
  while (queue.length > 0) {
    node = queue.shift();
    if (node.left) {
      node.left.route = node.route + 1; // 增加当前节点到根节点的路径和
      node.left.parent = node; // 增加指针
      queue.push(node.left)
    }
    if (node.right) {
      node.right.route = node.route + 1;
      node.right.parent = node; // 增加指针
      queue.push(node.right)
    }
    // 叶子节点
    if (!node.left && !node.right) {
      leafList.push(node)
    }
  }
  // 两两对比叶子节点之间的路径
  var len = leafList.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (getMinRouteSum(leafList[i], leafList[j]) <= distance) {
        count++;
      }
    }
  }
  return count;
};

// 获取两个叶子节点的最小路径和
var getMinRouteSum = function (leafA, leafB) {
  var tempA = leafA;
  var tempB = leafB;
  while (tempA !== tempB) {
    if (tempA === null) {
      tempA = leafB;
    } else {
      tempA = tempA.parent
    }
    if (tempB === null) {
      tempB = leafA;
    } else {
      tempB = tempB.parent
    }
  }
  var res = leafA.route + leafB.route - tempA.route * 2;
  return res;
}



function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}



countPairs(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7))), 3);
countPairs(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3)), 3);
countPairs(new TreeNode(100), 1);
countPairs(new TreeNode(1, new TreeNode(1), new TreeNode(1)), 2);
countPairs(new TreeNode(1, new TreeNode(1), new TreeNode(1)), 3);

[7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3