'use strict';

function arrayRemoveShift(arr) {
  let newArray = [];
  let middle = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (i > middle) {
      newArray[i-1] = arr[i];
    } else if (i !== middle) {
      newArray[i] = arr[i];
    }
  }
  return newArray;
}

module.exports = arrayRemoveShift;
