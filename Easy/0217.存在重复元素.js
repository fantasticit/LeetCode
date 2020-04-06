/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums || nums.length === 0 || nums.length == 1) return false;
  if (nums.length === 2) return nums[0] === nums[1];

  let map = {};

  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = !map[num] ? 1 : map[num] + 1;
    }
  }

  return false;
};
// @lc code=end
