# 二叉树的后序遍历

给定一个二叉树，返回它的 后序 遍历。

## 示例:

```
输入: [1,null,2,3]
 1
\
 2
/
3
```

输出: [3,2,1]

## 递归

```js
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let ret = [];

  const traverse = (node, ret) => {
    if (!node) {
      return;
    }
    traverse(node.left, ret);
    traverse(node.right, ret);
    ret.push(node.val);
  };

  traverse(root, ret);

  return ret;
};
```

## 循环

```js
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let ret = [];

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }

    ret.unshift(node.val);
  }

  return ret;
};
```
