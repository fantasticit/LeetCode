# 最小覆盖子串

给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

## 示例

```
输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
```

## 说明

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

## 思路

滑动窗口。首先扩大右区间，当满足条件时，收敛左区间。

```js
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
```

```
Accepted
268/268 cases passed (104 ms)
Your runtime beats 60.08 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (36.1 MB)
```
