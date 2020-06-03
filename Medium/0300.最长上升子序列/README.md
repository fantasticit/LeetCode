# 最长上升子序列

给定一个无序的整数数组，找到其中最长上升子序列的长度。

## 示例

```
输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

## 说明

- 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
- 你算法的时间复杂度应该为 O(n2) 。

## 思路

1. 根据输入长度生成备忘录数组并初始化长度 1。
2. 遍历数组，然后和之前的数字循环比对，每遇到一次大于之前的数字时，dp[j] + 1，dp[i] 取最大值。
3. 返回备忘录最大值。
4. 完善边界。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || !nums.length) return 0; // 空数组直接 0
  const dp = nums.map(() => 1); // 子序列长度至少是 1（自身）

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(dp, dp);
};
```

```
Accepted
24/24 cases passed (88 ms)
Your runtime beats 59.91 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (35.8 MB)
```
