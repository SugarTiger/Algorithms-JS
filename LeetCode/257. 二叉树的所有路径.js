/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 回溯
var binaryTreePaths = function (root) {
  const res = [];
  const set = new Set();
  dfs(root, [], res, set)
  return res;
};
var dfs = function (root, list, res, set) {
  if (!root) return;
  list.push(root.val);
  set.add(root);
  if (!root.left && !root.right) {
    res.push(list.join('->'));
  } else {
    if (!set.has(root.left)) {
      dfs(root.left, list, res, set);
      set.delete(root.left)
    }
    if (!set.has(root.right)) {
      dfs(root.right, list, res, set);
    }
  }
  list.pop();
  set.delete(root)
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// 官方方法一 深度优先遍历
var binaryTreePaths = function (root) {
  const paths = [];
  construct_paths(root, "", paths);
  return paths;
}
const construct_paths = (root, path, paths) => {
  if (!root) return;
  path += root.val;
  if (!root.left && !root.right) { // 当前节点是叶子节点
    paths.push(path);
  } else {
    path += '->';
    construct_paths(root.left, path, paths);
    construct_paths(root.right, path, paths);
  }
}

// 官方方法二 广度优先遍历
var binaryTreePaths = function (root) {
  const paths = [];
  if (!root) {
    return paths;
  }
  const node_queue = [root];
  const path_queue = [root.val.toString()];

  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();
    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      if (node.left) {
        node_queue.push(node.left);
        path_queue.push(path + '->' + node.left.val.toString());
      }
      if (node.right) {
        node_queue.push(node.right);
        path_queue.push(path + '->' + node.right.val.toString());
      }
    }
  }
  return paths;
}


binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)))
binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(6))))
binaryTreePaths();
binaryTreePaths(new TreeNode(1))
binaryTreePaths(new TreeNode(1, new TreeNode(2)))
binaryTreePaths(new TreeNode(1, new TreeNode(2), new TreeNode(3)))
binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(4))))
binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)))
