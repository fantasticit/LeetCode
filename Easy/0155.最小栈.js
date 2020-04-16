/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.min = this.min !== null ? (this.min < x ? this.min : x) : x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let v = this.stack.pop();
  if (v === this.min) {
    this.min = Math.min.apply(null, this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// Accepted
// 18/18 cases passed (176 ms)
// Your runtime beats 39.88 % of javascript submissions
// Your memory usage beats 71.43 % of javascript submissions (44.4 MB)
