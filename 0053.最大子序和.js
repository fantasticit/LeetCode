/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.59%)
 * Likes:    1087
 * Dislikes: 0
 * Total Accepted:    77.1K
 * Total Submissions: 165.4K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let answer = nums[0];
  let sum = 0;

  for (let num of nums) {
    if (sum > 0) {
      // sum 大于 0，对结果是增益的，加上继续
      sum += num;
    } else {
      // 反之，目前的 num 对结果无增益，重置 sum
      sum = num;
    }

    answer = Math.max(answer, sum);
  }

  return answer;
};
