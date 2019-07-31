/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums || !nums.length) {
    return [];
  }

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let other = target - num;

    if (map[other] && map[other] !== i) {
      return [i, map[other]];
    }
  }

  return [];
};
