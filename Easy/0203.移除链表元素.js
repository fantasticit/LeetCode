/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  if (!head.next) return head.val === val ? null : head;

  while (head && head.val === val) {
    // 移除头部节点
    head = head.next;
  }

  let prev = head;

  while (prev && prev.next) {
    while (prev.next && prev.next.val !== val) {
      prev = prev.next;
    }

    if (prev && prev.next) {
      if (prev.next.next) {
        prev.next = prev.next.next;
      } else {
        prev.next = null;
      }
    }
  }

  return head;
};
// @lc code=end
