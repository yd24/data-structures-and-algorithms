'use strict';

const mergeSort = require('./merge');

describe('Testing merge sort', () => {
  test('Performs a successful merge sort on unsorted array of numbers', () => {
    let unsorted = [3, 21, 1, 5, 2, 12];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual([1, 2, 3, 5, 12, 21]);
  });

  test('Performs a successful merge sort with odd array length', () => {
    let unsorted = [12, 13, 5, 2, 1];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual([1, 2, 5, 12, 13]);
  });

  test('Performs a successful merge sort with non-unique values', () => {
    let unsorted = [2, 2, 6, 3, 3, 3, 12, 11];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual([2, 2, 3, 3, 3, 6, 11, 12]);
  });

  test('If given empty array or array with length of 1, should return the input back', () => {
    let unsorted = [];
    let sorted = mergeSort(unsorted);
    expect(sorted).toEqual([]);

    unsorted = [1];
    sorted = mergeSort(unsorted);
    expect(sorted).toEqual([1]);
  });
});
