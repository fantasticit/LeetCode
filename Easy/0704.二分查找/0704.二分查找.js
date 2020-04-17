/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = (right + left) >> 1;
    if (nums[middle] > target) {
      right -= 1;
    } else if (nums[middle] === target) {
      return middle;
    } else {
      left += 1;
    }
  }

  return nums[right] === target ? right : -1;
};
// @lc code=end
