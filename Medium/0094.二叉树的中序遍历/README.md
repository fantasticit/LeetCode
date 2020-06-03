# 二叉树的中序遍历

给定一个二叉树，返回它的中序 遍历。

## 示例

```

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

## 思路

中序遍历顺序：左 -> 根 -> 右。

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  let stack = [];
  let ret = [];
  let current = root;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      ret.push(current.val);
      current = current.right;
    }
  }

  return ret;
};
```

```
Accepted
68/68 cases passed (68 ms)
Your runtime beats 56.68 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (32.2 MB)
```
