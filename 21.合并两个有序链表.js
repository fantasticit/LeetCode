/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (56.08%)
 * Likes:    549
 * Dislikes: 0
 * Total Accepted:    92K
 * Total Submissions: 163.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let linklist = (tmp = new ListNode(null));

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      tmp.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      tmp.next = new ListNode(l1.val);
      l1 = l1.next;
    }

    tmp = tmp.next;
  }

  // 链表是有序的，剩下的部分一定比之前的都大，直接接上去即可
  tmp.next = l1 || l2;

  return linklist.next;
};
