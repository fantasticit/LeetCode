/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  // if (!root) return null

  // let ret = null
  // let stack = [root]

  // while (stack.length) {
  //   let node = stack.pop()

  //   if (node.val === val) {
  //     ret = node
  //   } else {
  //     if (node.left) stack.push(node.left)
  //     if (node.right) stack.push(node.right)
  //   }
  // }

  // return ret

  while (root) {
    if (root.val === val) return root
    if (root.val > val) {
      root = root.left
    } else {
      root = root.right
    }
  }

  return null
};
// @lc code=end

