/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.elements = [];
  this.length = 0;
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.elements.push(x);
  this.length += 1;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let element = this.elements.pop();
  this.length -= 1;
  return element;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.elements[this.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
