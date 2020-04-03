/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  const vals = [];
  let node = head;

  while (node) {
    vals.push(node.val);
    node = node.next;
  }

  let len = vals.length;
  let newNode = null;
  let newHead = null;

  for (let i = len - 1; i >= 0; i--) {
    if (!newNode) {
      newNode = new ListNode(vals[i]);
      newHead = newNode;
    } else {
      newNode.next = new ListNode(vals[i]);
      newNode = newNode.next;
    }
  }

  return newHead;
};
// @lc code=end
