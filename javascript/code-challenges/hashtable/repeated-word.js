'use strict';
const HashTable = require('./hash');

function wordRepeated(input) {
  let words = input.toLowerCase().split(' ');
  let hashmap = new HashTable(input.length);
  let repeated = null;
  for (const word of words) {
    if (hashmap.has(word)) {
      return word;
    } else {
      hashmap.set(word, word);
    }
  }
  return repeated;
}

module.exports = wordRepeated;
