# 二分查找

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

## 示例 1

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

## 示例 2

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

## 提示

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

## 思路

数组为升序数组，同时从数组左端和右端同时向中间部分查找，比较左右两端中间索引所在位置的值进行右端或左端位置调整。

```js
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
```

```
Accepted
46/46 cases passed (68 ms)
Your runtime beats 83.61 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.7 MB)
```
