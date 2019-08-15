/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (37.21%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    26.8K
 * Total Submissions: 72K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums[0] > target || nums[nums.length - 1] < target) {
    return [-1, -1];
  }

  let l = 0;
  let r = nums.length - 1;
  let m = (l + r) >> 1;
  let min = -1;
  let max = -1;

  if (nums[m] > target) {
    r = m;
  }

  if (nums[m] < target) {
    l = m;
  }

  while (l <= r) {
    if (nums[l] < target) {
      l++;
    }

    if (nums[l] === target) {
      min = min > -1 ? Math.min(min, l) : l;
      l++;
    }

    if (nums[r] > target) {
      r--;
    }

    if (nums[r] === target) {
      max = max > -1 ? Math.max(max, r) : r;
      r--;
    }
  }

  return [min, max];
};
