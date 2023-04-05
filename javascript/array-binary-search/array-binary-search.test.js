'use strict';

const arrayBinarySearch = require('./array-binary-search.js');

describe('Testing binary search function', () => {
  test('Given a sorted array and a value, the index where the value is located should be found', () => {
    let sortedArr = [1, 2, 3, 4, 5];
    let index = arrayBinarySearch(sortedArr, 4);
    expect(index).toEqual(3);
  });

  test('Given a sorted array, the index should be returned if the value being searched is at either end of the array', () => {
    let sortedArr = [1, 2, 3, 4, 5];
    let index = arrayBinarySearch(sortedArr, 1);
    let index2 = arrayBinarySearch(sortedArr, 5);
    expect(index).toEqual(0);
    expect(index2).toEqual(4);
  });

  test('Given a sorted array, searching a value should return the index of the first instance of the value', () => {
    let sortedArr = [1, 2, 3, 4, 4, 4, 5];
    let index = arrayBinarySearch(sortedArr, 4);
    expect(index).toEqual(3);
  });

  test('Given an empty array, -1 should be returned when searching for a value', () => {
    let sortedArr = [];
    let index = arrayBinarySearch(sortedArr, 4);

    expect(index).toEqual(-1);
  });

  test('If value does not exist in array, should return -1', () => {
    let sortedArr = [1, 2, 3, 6, 7, 10, 12];
    let index = arrayBinarySearch(sortedArr, 55);
    let index2 = arrayBinarySearch(sortedArr, -12);

    expect(index).toEqual(-1);
    expect(index2).toEqual(-1);
  });
});
