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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  var stack = [root];
  var queue = [];
  while(stack.length>0){
    let node = stack.pop();
    if(node !== root){
      queue.push(node);
    }
    if(node.right){
      stack.push(node.right)
    }
    if(node.left){
      stack.push(node.left)
    }
  }
  var temp = root;
  for(let node of queue){
    temp.left = null;
    temp.right = node;
    temp = node;
  }
};