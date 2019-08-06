/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.71%)
 * Likes:    1192
 * Dislikes: 0
 * Total Accepted:    155.6K
 * Total Submissions: 475.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;
  let isNegative = x < 0;

  if (isNegative) {
    x = ("" + x).slice(1);
  } else {
    x = "" + x;
  }

  x = +x
    .split("")
    .reverse()
    .join("");

  if (isNegative) {
    x = 0 - x;
  }

  return x >= MIN && x <= MAX ? x : 0;
};
