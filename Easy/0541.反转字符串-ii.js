/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (!s) return s;

  if (s.length < k) return reverse(s);
  if (s.length >= k && s.length < 2 * k)
    return reverse(s.substr(0, k)) + s.substring(k);

  let str = "";

  for (let i = 0; i < s.length; i += k) {
    str += reverseStr(s.substr(i, k), k) + s.substr(i + k, k);
    i += k;
  }

  return str;
};

function reverse(str) {
  return str.split("").reverse().join("");
}
// @lc code=end
