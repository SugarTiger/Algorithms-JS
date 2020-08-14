/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 先序遍历序列化
var serialize = function (root) {
  if (!root) return "[]";
  var stack = [root];
  var result = [];
  while (stack.length > 0) {
    root = stack.pop();
    if (root) {
      result.push(root.val);
      stack.push(root.right)
      stack.push(root.left)
    } else {
      result.push('null');
    }
  }
  result = '[' + result.join(',') + ']';
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  var n = data.length;
  data = data.slice(1, n - 1);
  if (!data) return null;
  data = data.split(',');
  var root = rdeserialize(data)
  return root;
};

// 先序遍历复原
var rdeserialize = function (list) {
  if (list.length === 0) return null;
  var val = list.shift();
  if (val === 'null') {
    return null;
  }
  var root = new TreeNode(+val);
  root.left = rdeserialize(list);
  root.right = rdeserialize(list);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


var root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))
var root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4, null, new TreeNode(7)), new TreeNode(5, null, new TreeNode(8))))

serialize(root)
deserialize('[1,2,null,null,3,4,null,null,5,null,null]')
serialize(root2)
deserialize('[1,2,null,null,3,4,null,7,null,null,5,null,8,null,null]')