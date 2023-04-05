'use strict';

function arrayBinarySearch(arr, value) {
  let index = -1;
  let low = 0;
  let high = arr.length - 1;
  let middle = 0;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if (value === arr[middle]) {
      index = middle;
      high = -1;
    } else if (value > arr[middle]) {
      low = middle + 1;
    } else if (value < arr[middle]) {
      high = middle - 1;
    }
  }
  return index;
}

module.exports = arrayBinarySearch;
