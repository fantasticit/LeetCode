/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num < 9) return num;
  let v = num % 9;
  return v === 0 ? 9 : v;
};
// @lc code=end
