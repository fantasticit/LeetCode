/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.89%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    25.2K
 * Total Submissions: 70.1K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;

    while (j < len) {
      let t = nums[i] + nums[j];
      let c = target - t;
      let left = j + 1;
      let right = len - 1;

      while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum > c) {
          right--;
        } else if (sum < c) {
          left++;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right - 1] === nums[right]) right--;
          left++;
          right--;
        }
      }

      while (j < len && nums[j] === nums[j + 1]) j++;
      j++;
    }
  }

  return res;
};
