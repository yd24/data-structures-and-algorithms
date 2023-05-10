'use strict';

const insertionSort = require('./insertion');

describe('Testing insertion sort', () => {
  test('Can successfully perform insertion sort on an array of numbers', () => {
    let unsorted = [4, 12, 3, 13, -1, 8];
    let sorted = insertionSort(unsorted);
    expect(sorted).toEqual([-1, 3, 4, 8, 12, 13]);
  });

  test('Empty array returns empty array', () => {
    let unsorted = [];
    let sorted = insertionSort(unsorted);
    expect(sorted).toEqual([]);
  });

  test('Array with one element returns just the element', () => {
    let unsorted = [1];
    let sorted = insertionSort(unsorted);
    expect(sorted).toEqual([1]);
  });

  test('Array with non-unique values', () => {
    let unsorted = [5, 5, 2, 3, 1, 1, 1, 8];
    let sorted = insertionSort(unsorted);
    expect(sorted).toEqual([1, 1, 1, 2, 3, 5, 5, 8]);
  });
});
