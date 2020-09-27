/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 时间复杂度 O(n) 空间复杂度O(n)
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  const queue = [root];
  const map = new Map();
  let pNode = null, qNode = null;
  while (queue.length > 0) {
    root = queue.shift();
    if (root.val === p.val) {
      pNode = root;
    }
    if (root.val === q.val) {
      qNode = root;
    }
    if (root.left) {
      queue.push(root.left)
      map.set(root.left, root)
    }
    if (root.right) {
      queue.push(root.right)
      map.set(root.right, root)
    }
  }
  // 找出两个节点的公共节点
  let pTmpNode = pNode, qTmpNode = qNode;
  while (pNode || qNode) {
    if (pNode === qNode) {
      return qNode;
    }
    qNode = map.get(qNode)
    pNode = map.get(pNode)
    if (qNode === pTmpNode) {
      return pTmpNode;
    }
    if (pNode === qTmpNode) {
      return qTmpNode;
    }

    if (!qNode) {
      qNode = pTmpNode
    }
    if (!pNode) {
      pNode = qTmpNode
    }
  }
  return null;
};

// 利用二叉搜索树的特点
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    root = queue.shift();
    if(root.val === p.val || root.val === q.val || root.val > p.val && root.val < q.val || root.val < p.val && root.val > q.val){
      return root;
    }
    if(root.val > p.val && root.val > q.val && root.left){
      queue.push(root.left)
    }else if(root.val < p.val && root.val < q.val && root.right){
      queue.push(root.right)
    }
  }
  return null;
}

// 优化空间复杂度 
var lowestCommonAncestor = function (root, p, q) {
  while(true){
    if(root.val > p.val && root.val > q.val){
      root = root.left;
    }else if(root.val < p.val && root.val < q.val){
      root = root.right;
    }else{
      break;
    }
  }
  return root;
}


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


lowestCommonAncestor(new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9))), new TreeNode(2), new TreeNode(5))
lowestCommonAncestor(new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9))), new TreeNode(2), new TreeNode(7))
lowestCommonAncestor(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), new TreeNode(2), new TreeNode(3))