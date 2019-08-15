/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.73%)
 * Likes:    227
 * Dislikes: 0
 * Total Accepted:    33.7K
 * Total Submissions: 67.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let al = a.length;
  let bl = b.length;

  // 高位补 0
  if (al > bl) {
    b = `0`.repeat(al - bl) + b;
  } else if (al < bl) {
    a = `0`.repeat(bl - al) + a;
  }

  let ret = "";
  let k = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let n = +a[i];
    let m = +(b[i] || 0);
    let s = m + n + k;
    let c = s % 2;
    k = ~~(s / 2);
    ret = c + ret;
  }

  if (k > 0) {
    ret = k + ret;
  }

  return ret;
};
