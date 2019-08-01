/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.33%)
 * Likes:    1192
 * Dislikes: 0
 * Total Accepted:    75.1K
 * Total Submissions: 321.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  let res = [];
  let left = 0,
    right = 0,
    len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i - 1] === nums[i]) continue;

    let target = 0 - nums[i];
    left = i + 1;
    right = len - 1;

    while (left < right) {
      let tmp = nums[left] + nums[right];

      if (tmp < target) {
        left++;
      } else if (tmp > target) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return res;
};
