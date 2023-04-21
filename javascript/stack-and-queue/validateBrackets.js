'use strict';

const { Stack, Queue } = require('./stack-and-queue');

function validateBrackets(str) {
  let startingBracket = ['(', '{', '['];
  let endingBracket = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let regex = /[\(\)\{\}\[\]]/;
  let input = str.split('');
  let stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    if (item.match(regex)) {
      if (startingBracket.includes(item)) {
        stack.push(input[i]);
      } else {
        let prevBracket = stack.pop();
        if (endingBracket[prevBracket] !== item) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = validateBrackets;
