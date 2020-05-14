/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {};
  let window = {};
  for (let c of t) {
    need[c] = need[c] || 0;
    need[c]++;
  }
  let valid = 0;
  let left = 0;
  let right = 0;
  let start = 0;
  let len = Infinity;

  while (right < s.length) {
    let n = s[right];
    right++;

    if (need[n]) {
      window[n] = window[n] || 0;
      window[n]++;

      if (window[n] === need[n]) {
        valid += need[n];
      }
    }

    while (valid >= t.length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      let m = s[left];
      left++;

      if (need[m]) {
        if (window[m] === need[m]) {
          valid -= need[m];
        }
        window[m]--;
      }
    }
  }

  return len === Infinity ? "" : s.substr(start, len);
};

// @lc code=end
