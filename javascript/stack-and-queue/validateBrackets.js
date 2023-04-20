'use strict';

const { Stack } = require('./stack-and-queue');

function validateBrackets(str) {
  let regex = /[\{\}\[\]]/;
  let input = str.split("");

  let stack1 = new Stack();
  let newstr = '';
  let newstr2 = '';

  while (input.length > 0) {
    let item = input.pop();
    if (item.match(regex)) {
      newstr += item;
      stack1.push(item);
    }
  }

  while (!stack1.isEmpty()) {
    let item = stack1.pop();
    input.push(item);
  }

  newstr2 = input.join('');
  console.log('dog', newstr);
  console.log('cat', newstr2);

  return newstr === newstr2;
}

module.exports = validateBrackets;
