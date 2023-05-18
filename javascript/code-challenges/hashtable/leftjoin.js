'use strict';

function leftJoin(hash1, hash2) {
  let keys1 = hash1.keys();
  let arr = [];

  for (const key of keys1) {
    let joinArr = [];
    joinArr.push(key);
    joinArr.push(hash1.get(key));
    if (hash2.has(key)) {
      joinArr.push(hash2.get(key));
    } else {
      joinArr.push(null);
    }
    arr.push(joinArr);
  }
  return arr;
}

module.exports = leftJoin;
