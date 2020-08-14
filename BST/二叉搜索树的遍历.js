function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


// 前序遍历
// 递归版
function preOrderRe(root) {
  if (!root) return;
  console.log(root.val)
  preOrderRe(root.left);
  preOrderRe(root.right);
}
// 非递归版
function preOrder(root) {
  if (!root) return;
  var stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    console.log(root.val)
    if (root.right) {
      stack.push(root.right)
    }
    if (root.left) {
      stack.push(root.left)
    }
  }
}

// 中序遍历
function midOrderRe(root) {
  if (!root) return;
  midOrderRe(root.left);
  console.log(root.val)
  midOrderRe(root.right);
}
function midOrder(root) {
  var stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    console.log(root.val);
    root = root.right;
  }
}


// 后序遍历
function lastOrderRe(root) {
  if (!root) return;
  lastOrderRe(root.left);
  lastOrderRe(root.right);
  console.log(root.val)
}
function lastOrder1(root) {
  var stackA = [root];
  var stackB = [];
  while (stackA.length) {
    root = stackA.pop();
    stackB.push(root);
    if (root.left) stackA.push(root.left)
    if (root.right) stackA.push(root.right)
  }
  while (stackB.length) {
    console.log(stackB.pop().val)
  }
}
var lastOrder2 = function (root) {
  if (!root) return;
  var stack = [root];
  var temp = null;
  while (stack.length) {
    temp = stack[stack.length - 1];
    if (temp.left && temp.left !== root && temp.right !== root) {
      stack.push(temp.left)
    } else if (temp.right && temp.right !== root) {
      stack.push(temp.right)
    } else {
      console.log(stack.pop().val)
      root = temp;
    }
  }
}


var root = new TreeNode(5,
  new TreeNode(1,
    new TreeNode(2), new TreeNode(7)), new TreeNode(4,
      new TreeNode(3), new TreeNode(6)))

preOrderRe(root);
preOrder(root);
midOrderRe(root);
midOrder(root);
lastOrderRe(root);
lastOrder1(root);
lastOrder2(root);

