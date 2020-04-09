/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head && !head.next) return true;

  let a = "";

  while (head) {
    a += "" + head.val;
    b = "" + head.val + b;
    head = head.next;
  }

  return a === b;
};
// @lc code=end
