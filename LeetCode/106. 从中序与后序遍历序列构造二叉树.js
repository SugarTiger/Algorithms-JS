/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 递归求解 因为 findIndex 的时间复杂度是O(n) 所以总得时间复杂度是 O(n^2) 空间复杂度是O(n)
var buildTree = function (inorder, postorder) {
  const res = buildTreeHelper(inorder, postorder);
  return res;
};
var buildTreeHelper = function (inorder, postorder) {
  const n = inorder.length;
  const m = postorder.length;
  if (n === 0 || m === 0 || n !== m) return null;
  const val = postorder.pop();
  const root = new TreeNode(val);
  const rootIndex = inorder.findIndex(item => (item === val));
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const leftPostorder = postorder.slice(0, rootIndex);
  const rightPostorder = postorder.slice(rootIndex);
  root.left = buildTreeHelper(leftInorder, leftPostorder);
  root.right = buildTreeHelper(rightInorder, rightPostorder);
  return root;
}

// 优化时间复杂度，建立一个哈希表来查找中序遍历中的根节点索引
var buildTree = function (inorder, postorder) {
  let post_idx;
  const idx_map = new Map();
  const helper = (in_left, in_right) => {
    // 如果这里没有节点构造二叉树就结束
    if (in_left > in_right) {
      return null;
    }

    // 选择 post_idx 位置的元素作为当前子树根节点
    const root_val = postorder[post_idx];
    const root = new TreeNode(root_val);

    // 根据 root 所在位置分成左右两颗子树
    const index = idx_map.get(root_val);

    // 下标减一
    post_idx--;
    // 构建右子树
    root.right = helper(index + 1, in_right);
    // 构建左子树
    root.left = helper(in_left, index - 1);
    return root;
  }

  // 从后序遍历的最后一个元素开始
  post_idx = postorder.length - 1;

  // 建立（元素，下标）键值对的哈希表
  inorder.forEach((val, idx) => {
    idx_map.set(val, idx);
  })
  return helper(0, inorder.length - 1);
}

// 迭代方法
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;
  const root = new TreeNode(postorder[postorder.length - 1]);
  const stack = [root];
  let inorderIndex = inorder.length - 1;
  for (let i = postorder.length - 2; i >= 0; i--) {
    let postorderVal = postorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIndex]) {
      node.right = new TreeNode(postorderVal)
      stack.push(node.right)
    } else {
      while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
        node = stack.pop();
        inorderIndex--;
      }
      node.left = new TreeNode(postorderVal);
      stack.push(node.left)
    }
  }
  return root;
}



function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);