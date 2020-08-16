/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var len = nums.length;
    if (len === 0) return new TreeNode(null);
    if (len === 1) return new TreeNode(nums[0]);
    var stack = [[0, len - 1]];
    let root = null;
    while (stack.length !== 0) {
        const [left, right] = stack.pop();
        var mid = left + ((right - left) >> 1);
        if (left === mid && left !== right) {
            stack.push([right, right]);
        }
        else if (right === mid && left !== right) {
            stack.push([left, left]);
        } else {
            mid > left && stack.push([left, mid - 1]);
            mid < right && stack.push([mid + 1, right]);
        }
        if (!root) {
            root = new TreeNode(nums[mid]);
        } else {
            insetNodeToBST(root, nums[mid]);
        }

    }
    return root;

};

var insetNodeToBST = function (root, num) {
    var stack = [root];
    while (stack.length !== 0) {
        root = stack.pop();
        if (root.val > num) {
            if (root.left) {
                stack.push(root.left)
            } else {
                root.left = new TreeNode(num)
            }
        } else if (root.val < num) {
            if (root.right) {
                stack.push(root.right)
            } else {
                root.right = new TreeNode(num)
            }
        }
    }
}


// 官方解法
var sortedArrayToBST = function (nums) {
    return helper(nums, 0, nums.length - 1);
}
var helper = function (nums, left, right) {
    if (left > right) return null;
    // 总是选择中间位置右边的数字作为根节点
    var mid = (left + right + 1) >> 2;
    var root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);
    return root;

}



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

sortedArrayToBST([1])
sortedArrayToBST([1, 2])
sortedArrayToBST([1, 2, 3])
sortedArrayToBST([1, 2, 3, 4])
sortedArrayToBST([1, 2, 3, 4, 5])
sortedArrayToBST([1, 2, 3, 4, 5, 6])