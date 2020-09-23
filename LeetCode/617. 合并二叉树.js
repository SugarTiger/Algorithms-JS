/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// 递归 深度优先
var mergeTrees = function (t1, t2) {
  const res = mergeTreesHelper(t1, t2)
  return res;
};
var mergeTreesHelper = function (t1, t2) {
  let node = new TreeNode();
  if (t1 && t2) {
    node.val = t1.val + t2.val;
    node.left = mergeTreesHelper(t1.left, t2.left)
    node.right = mergeTreesHelper(t1.right, t2.right)
  } else if (t1) {
    node.val = t1.val;
    node.left = mergeTreesHelper(t1.left, null)
    node.right = mergeTreesHelper(t1.right, null)
  } else if (t2) {
    node.val = t2.val;
    node.left = mergeTreesHelper(t2.left, null)
    node.right = mergeTreesHelper(t2.right, null)
  } else {
    return t1;
  }
  return node;
}

// 广度优先
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  let res = new TreeNode();
  const queue = [res];
  const queue1 = [t1];
  const queue2 = [t2];
  while (queue1.length > 0 || queue2.length > 0) {
    const node = queue.shift();
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    if (node1 && node2) {
      node.val = node1.val + node2.val;
      if (node1.left || node2.left) {
        node.left = new TreeNode();
      }
      if (node1.right || node2.right) {
        node.right = new TreeNode();
      }
      queue.push(node.left, node.right)
      queue1.push(node1.left, node1.right)
      queue2.push(node2.left, node2.right)
    } else if (node1) {
      node.val = node1.val
      if (node1.left) {
        node.left = new TreeNode();
      }
      if (node1.right) {
        node.right = new TreeNode();
      }
      queue.push(node.left, node.right)
      queue1.push(node1.left, node1.right)
      queue2.push(null, null)
    } else if (node2) {
      node.val = node2.val;
      if (node2.left) {
        node.left = new TreeNode();
      }
      if (node2.right) {
        node.right = new TreeNode();
      }
      queue.push(node.left, node.right)
      queue1.push(null, null)
      queue2.push(node2.left, node2.right)
    }
  }
  return res;
};


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


mergeTrees(new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)), new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7))))