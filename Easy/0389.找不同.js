/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let m = {};
  let n = {};

  for (let i = 0; i < s.length; i++) {
    m[s[i]] = m[s[i]] ? m[s[i]] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!m[t[j]]) {
      return t[j];
    }

    n[t[j]] = n[t[j]] ? n[t[j]] + 1 : 1;
  }

  for (let char in n) {
    if (n[char] !== m[char]) {
      return char;
    }
  }

  return;
};
// @lc code=end
