/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.75%)
 * Likes:    467
 * Dislikes: 0
 * Total Accepted:    59K
 * Total Submissions: 169.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let node1 = head;
  let node2 = head;
  let pre = null;
  let i = 0;

  while (i++ < n) {
    node1 = node1.next;
  }

  while (node1) {
    if (!node1.next) {
      // node2 即将找到
      pre = node2;
    }

    node1 = node1.next;
    node2 = node2.next;
  }

  if (!pre) {
    // 删除头节点
    head = head.next;
  } else {
    pre.next = node2.next;
  }

  return head;
};
