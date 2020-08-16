// Morris 中序遍历
// 空间复杂度O(1)
var midOrder = function (root) {
  let predecessor = null;
  while (root !== null) {
    if (root.left !== null) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right !== null && predecessor.right !== root)
        predecessor = predecessor.right;

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (predecessor.right === null) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        console.log(root.val)
        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      console.log(root.val)
      root = root.right;
    }
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
midOrder(new TreeNode(2, new TreeNode(1), new TreeNode(4, new TreeNode(3))));