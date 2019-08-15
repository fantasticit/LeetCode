/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (39.93%)
 * Likes:    182
 * Dislikes: 0
 * Total Accepted:    21.8K
 * Total Submissions: 54.5K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let ret = [];

  /**
   * 在纸上列一下 竖式相乘 的步骤即可明白
   */
  for (let i = num1.length - 1; i >= 0; i--) {
    let m = +num1[i];

    for (let j = num2.length - 1; j >= 0; j--) {
      ret[i + j] = ret[i + j] || 0;
      let n = +num2[j];
      let s = m * n + ret[i + j];
      let k = ~~(s / 10);
      let t = s % 10;

      ret[i + j] = t;

      if (k > 0) {
        if (i + j >= 1) {
          ret[i + j - 1] = ret[i + j - 1] || 0;
          ret[i + j - 1] += k;
        } else {
          ret.unshift(k);
        }
      }
    }
  }

  return ret.join("");
};
