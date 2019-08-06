/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.21%)
 * Likes:    221
 * Dislikes: 0
 * Total Accepted:    34.1K
 * Total Submissions: 82.6K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 *
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let answer = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];

      if (Math.abs(target - sum) <= Math.abs(target - answer)) {
        answer = sum;
      }

      if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      } else {
        return answer;
      }
    }
  }

  return answer;
};
