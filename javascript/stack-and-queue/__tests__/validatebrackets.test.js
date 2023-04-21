'use strict';
const validateBrackets = require('../validateBrackets');

describe('Testing if validate brackets function works', () => {
  test('Can validate strings with balanced brackets', () => {
    let br = '{}';
    let br2 = '[{[]}]';
    let br3 = '[Code{}[]]';

    expect(validateBrackets(br)).toBeTruthy();
    expect(validateBrackets(br2)).toBeTruthy();
    expect(validateBrackets(br3)).toBeTruthy();
  });

  test('Can tell that strings have unbalanced brackets', () => {
    let br = '{{{{{';
    let br2 = '[{[}]';
    let br3 = '[Jack}';

    expect(validateBrackets(br)).toBeFalsy();
    expect(validateBrackets(br2)).toBeFalsy();
    expect(validateBrackets(br3)).toBeFalsy();
  });
});
