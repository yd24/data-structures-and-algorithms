'use strict';
const HashTable = require('../code-challenges/hashtable/hash');

function treeIntersection(tree1, tree2) {
  let treeVal = tree1.breadthFirst(tree1.root);
  let treeVal2 = tree2.breadthFirst(tree2.root);
  let values = [];

  let hash = new HashTable(100);
  for (let i = 0; i < treeVal.length; i++) {
    let key = treeVal[i].toString();
    if (!hash.has(key)) {
      hash.set(key, false);
    }
  }

  for (let j = 0; j < treeVal2.length; j++) {
    let key = treeVal2[j].toString();
    if (hash.has(key)) {
      values.push(parseInt(key));
    }
  }

  return values;
}

module.exports = treeIntersection;
