'use strict';

const arrayRemoveShift = require('./array-remove-shift.js');

describe('Checking if function removes value from middle of array properly', () => {
  test('Function is able to remove from middle of even-sized array', () => {
    let input = [12, 34, 55, 6];
    expect(arrayRemoveShift(input)).toEqual([12, 34, 6]);
  });

  test('Function is able to remove from middle of odd-sized array', () => {
    let input = ["chicken", "dog", "bird", "cat", "cow"];
    expect(arrayRemoveShift(input)).toEqual(["chicken", "dog", "cat", "cow"]);
  });

  test('Nothing changes when array is empty', () => {
    let input = [];
    expect(arrayRemoveShift(input)).toEqual([]);
  });
});
