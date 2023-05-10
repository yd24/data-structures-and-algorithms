'use strict';

function insert(arr, value) {
  let i = 0;
  let temp;
  while (value > arr[i]) {
    i++;
  }
  while (i < arr.length) {
    temp = arr[i];
    arr[i] = value;
    value = temp;
    i++;
  }
  arr.push(value);
}

function insertionSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let sorted = new Array();
    sorted[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      insert(sorted, arr[i]);
    }
    return sorted;
  }
}

module.exports = insertionSort;
