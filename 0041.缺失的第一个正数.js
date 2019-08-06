/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (36.00%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    18.1K
 * Total Submissions: 50.4K
 * Testcase Example:  '[1,2,0]'
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 *
 * 输入: [1,2,0]
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 *
 * 示例 3:
 *
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 *
 * 说明:
 *
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = -1;
  let min = null;
  let max = null;
  let sum = 0;
  let hash = {};

  while (i++ < nums.length) {
    let current = nums[i];

    if (current > 0) {
      min = min ? Math.min(current, min) : current;
      max = max ? Math.max(current, max) : current;

      if (!hash[current]) {
        // 去重
        sum += current;
        hash[current] = true;
      }
    }
  }

  if (min > 1) {
    // 最小值大于 1，直接返回 1
    return 1;
  } else {
    // 因为第一步已经去重，等差数列之和只能 大于等于 第一步所得和
    let shouldSum = ((min + max) * max) / 2; // 连续等差数列之和

    if (shouldSum === sum) {
      return max + 1;
    } else {
      // 假设 min 和 max 之间的项都缺失了
      // 缺失项也是等差数列，缺失项的和即为 diff
      let diff = shouldSum - (min + max);
      let n = max - min - 1; // 缺失项的数目

      if (diff <= n) {
        return diff;
      } else {
        // 缺失项第一项为 min + 1
        let start = min + 1;
        while (hash[start]) {
          start++;
        }
        return start;
      }
    }
  }
};
