'use strict';

function arrayInsertShift (arr, val) {
  let newArray = [];
  let middle = Math.floor(arr.length / 2);

  for (let i = 0; i <= arr.length; i++) {
    if (i === middle) {
      newArray[i] = val;
    } else if (i > middle) {
      newArray[i] = arr[i-1];
    } else {
      newArray[i] = arr[i];
    }
  }
  return newArray;
}

module.exports = arrayInsertShift;

