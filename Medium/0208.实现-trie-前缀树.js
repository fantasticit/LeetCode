/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
var Node = function (data) {
  this.data = data;
  this.children = [];
  this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new Node("");
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let char of word) {
    let idx = node.children.findIndex((n) => n.data === char);
    if (idx < 0) {
      node.children.push(new Node(char));
      idx = node.children.length - 1;
    }
    node = node.children[idx];
  }

  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (let char of word) {
    const idx = node.children.findIndex((n) => n.data === char);
    if (idx < 0) {
      return false;
    } else {
      node = node.children[idx];
    }
  }

  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (let char of prefix) {
    const idx = node.children.findIndex((n) => n.data === char);
    if (idx < 0) {
      return false;
    } else {
      node = node.children[idx];
    }
  }

  return !!node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
