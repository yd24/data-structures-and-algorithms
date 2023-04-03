const reverseArray = require('./array-reverse.js');

describe('Testing if arrays are being properly reversed.', () => {
  test('If given an array of numbers, should return an array of numbers in reversed order.', () => {
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = reverseArray(arr);

    let expectedOutput = [5, 4, 3, 2, 1];
    expect(reversedArr).toEqual(expectedOutput);
  });

  test('If given an array of strings, should return an array of strings in reversed order.', () => {
    let arr = ['dog', 'cat', 'bird', 'meat'];
    let reversedArr = reverseArray(arr);

    let expectedOutput = ['meat', 'bird', 'cat', 'dog'];
    expect(reversedArr).toEqual(expectedOutput);
  });

  test('If given an empty array, should return an empty array.', () => {
    let arr = [];
    let reversedArr = reverseArray(arr);

    let expectedOutput = [];
    expect(reversedArr).toEqual(expectedOutput);
  });

  test('If given an array with 1 element, should return an array with 1 element.', () => {
    let arr = [3];
    let reversedArr = reverseArray(arr);

    let expectedOutput = [3];
    expect(reversedArr).toEqual(expectedOutput);
  });

  test('If given an array that is the same when reversed, should return the same array.', () => {
    let arr = [3, 2, 3, 2, 3];
    let reversedArr = reverseArray(arr);

    let expectedOutput = [3, 2, 3, 2, 3];
    expect(reversedArr).toEqual(expectedOutput);
  });
});
