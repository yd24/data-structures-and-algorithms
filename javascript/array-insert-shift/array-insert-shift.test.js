const arrayInsertShift = require('./array-insert-shift.js');

describe('Checking if function inserts value into middle of array properly', () => {
  test('Value is able to inserted into middle of even-sized array', () => {
    let input = [12, 34, 55, 6];
    let value = 5;
    expect(arrayInsertShift(input, value)).toEqual([12, 34, 5, 55, 6]);
  });

  test('Value is able to inserted into middle of odd-sized array', () => {
    let input = ["chicken", "dog", "cat", "cow"];
    let value = 7;
    expect(arrayInsertShift(input, value)).toEqual(["chicken", "dog", 7, "cat", "cow"]);
  });

  test('Value is able to inserted into middle of empty', () => {
    let input = [];
    let value = 44;
    expect(arrayInsertShift(input, value)).toEqual([44]);
  });
});
