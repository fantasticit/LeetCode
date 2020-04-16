/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.usedCapacity = 0;
  this.store = Object.create(null);
  this.toDeleteKeys = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.store[key]) {
    this.moveKeyToEnd(key);
  }

  return this.store[key] || -1;
};

LRUCache.prototype.moveKeyToEnd = function (key) {
  let arr = this.toDeleteKeys;
  let idx = this.toDeleteKeys.indexOf(key);

  if (idx < 0) {
    return;
  }

  if (idx === arr.length - 1) {
    return;
  }

  arr.splice(idx, 1);
  arr.push(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.store[key]) {
    this.moveKeyToEnd(key);
    this.store[key] = value;
    return;
  }

  this.toDeleteKeys.push(key);

  if (this.usedCapacity < this.capacity) {
    this.store[key] = value;
    this.usedCapacity += 1;
  } else {
    let deleteKey = this.toDeleteKeys.shift();
    delete this.store[deleteKey];
    this.store[key] = value;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
