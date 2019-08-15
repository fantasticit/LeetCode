/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.07%)
 * Likes:    325
 * Dislikes: 0
 * Total Accepted:    67.4K
 * Total Submissions: 167.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 溢出就 GG
  // const num = +digits.join("");
  // return ("" + (num + 1)).split("");

  // 所以老老实实，按位加法
  const ret = [];
  let s = digits.length - 1;
  let k = 0;

  for (let i = s; i >= 0; i--) {
    let t = k + digits[i] + (i === s ? 1 : 0);
    let c = t % 10;
    k = ~~(t / 10);
    ret.unshift(c);
  }

  if (k > 0) {
    ret.unshift(k);
  }

  return ret;
};
