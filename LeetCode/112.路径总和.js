
//  Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;
    root.preSum = 0;
    var stack = [root];
    while (stack.length > 0) {
        root = stack.pop();
        if (root.right) {
            root.right.preSum = root.val + root.preSum;
            stack.push(root.right)
        }
        if (root.left) {
            root.left.preSum = root.val + root.preSum;
            stack.push(root.left)
        }

        if (!root.right && !root.left && root.preSum + root.val === sum) {
            return true;
        }
    }
    return false;
};

var root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));

hasPathSum(root, 22)