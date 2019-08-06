/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.23%)
 * Likes:    459
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 45.7K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];

  function bt(str, l, r) {
    if (l === n && r === n) {
      res.push(str);
    }

    if (l < n) {
      bt(str + "(", l + 1, r);
    }

    if (l > r) {
      bt(str + ")", l, r + 1);
    }
  }

  bt("", 0, 0);

  return res;
};
