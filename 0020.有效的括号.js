/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (38.99%)
 * Likes:    945
 * Dislikes: 0
 * Total Accepted:    100.4K
 * Total Submissions: 257.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const matched = (p, n) =>
    (p === "(" && n == ")") ||
    (p === "[" && n === "]") ||
    (p === "{" && n === "}");
  const stack = [];
  let i = 0;

  while (i < s.length) {
    let c = s[i++];

    if (c === "(" || c === "[" || c === "{") {
      // 左括号进栈
      stack.push(c);
    } else {
      // 右括号
      if (!stack.length) {
        // 栈中无元素
        return false;
      } else {
        let p = stack.pop();

        if (matched(p, c)) {
          // 栈头元素匹配，出栈
          continue;
        } else {
          // 不匹配，直接 return false
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};
