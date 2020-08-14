/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//   if (!root) return true;
//   var isTrue = isSymmetricHelp(root.left, root.right); // 左右子树是相同的
//   return isTrue;
// };

// // 两颗树是否为对称，如果是对称的话，rootA和rootB的镜像二叉树应该是相同等的
// var isSymmetricHelp = function (rootA, rootB) {
//   if (rootA === rootB) return true;
//   if (!rootA || !rootB) return false;
//   // 获取rootB的镜像二叉树
//   var stackB = [rootB];
//   var node = null, temp = null;
//   while (stackB.length > 0) {
//     node = stackB.pop();
//     temp = node.left;
//     node.left = node.right;
//     node.right = temp;
//     node.right && stackB.push(node.right)
//     node.left && stackB.push(node.left)
//   }
//   // 对比 rootA 和 rootB
//   var stackA = [rootA];
//   stackB = [rootB];
//   while (stackA.length && stackB.length) {
//     rootA = stackA.pop();
//     rootB = stackB.pop();
//     if (rootA.val !== rootB.val) return false;
//     if (rootA.left) {
//       if (!rootB.left || rootA.left.val !== rootB.left.val) return false;
//       stackA.push(rootA.left)
//       stackB.push(rootB.left)
//     }
//     if (rootA.right) {
//       if (!rootB.right || rootA.right.val !== rootB.right.val) return false;
//       stackA.push(rootA.right)
//       stackB.push(rootB.right)
//     }
//     if (rootB.left) {
//       if (!rootA.left || rootA.left.val !== rootB.left.val) return false;
//       stackA.push(rootA.left)
//       stackB.push(rootB.left)
//     }
//     if (rootB.right) {
//       if (!rootA.right || rootA.right.val !== rootB.right.val) return false;
//       stackA.push(rootA.right)
//       stackB.push(rootB.right)
//     }
//   }
//   return true;
// }


var isSymmetric = function (root) {
  return check(root, root);
}

var check = function (pRoot, qRoot) {
  if (!pRoot && !qRoot) return true; // 如果两个都是null，则返回true
  if (!pRoot || !qRoot) return false; // 如果其中一个是null，则返回false
  return pRoot.val === qRoot.val && check(pRoot.left, qRoot.right) && check(pRoot.right, qRoot.left)
}


// 非递归版
const check = (u = null, v = null) => {
  const q = [];
  q.push(u), q.push(v);

  while (q.length) {
    u = q.shift();
    v = q.shift();
    if (!u && !v) continue;
    if ((!u || !v) || (u.val !== v.val)) return false;
    q.push(u.left);
    q.push(v.right);

    q.push(u.right);
    q.push(v.left);
  }
  return true;
}
var isSymmetric = function (root = null) {
  return check(root, root);
};


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))));
isSymmetric(new TreeNode(5,
  new TreeNode(4, new TreeNode(6), new TreeNode(3)), new TreeNode(4,
    new TreeNode(3), new TreeNode(6))))