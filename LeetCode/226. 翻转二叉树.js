/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归版
var invertTree = function (root) {
  const invertTreeHelper = function (root) {
    if (root) {
      const temp = root.left;
      root.left = root.right;
      root.right = temp;
      invertTreeHelper(root.left)
      invertTreeHelper(root.right)
    }
  }
  invertTreeHelper(root);
  return root;
};

// 非递归版
var invertTree = function (root) {
  if(!root)return root;
  const stack = [root];
  while(stack.length > 0){
    const node = stack.pop();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if(node.left)stack.push(node.left)
    if(node.right)stack.push(node.right)
  }
  return root;
}


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


invertTree(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9))))