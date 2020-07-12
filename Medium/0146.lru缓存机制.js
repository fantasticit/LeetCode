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

// // ES6 中 Map 可以记住键值的插入顺序。利用这个特性，可以使用 Map 实现 LRUCache。
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {
//   this.cache = new Map();
//   this.capacity = capacity;
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (!this.cache.has(key)) {
//     return -1;
//   }

//   const value = this.cache.get(key);
//   this.cache.delete(key);
//   this.cache.set(key, value);
//   return value;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.cache.has(key)) {
//     this.cache.delete(key);
//   } else if (this.cache.size === this.capacity) {
//     this.cache.delete(this.cache.keys().next().value);
//   }

//   this.cache.set(key, value);
// };
