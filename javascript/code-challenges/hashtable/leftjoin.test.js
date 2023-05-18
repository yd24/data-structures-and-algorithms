'use strict';
const HashTable = require('./hash');
const leftJoin = require('./leftjoin');

describe('Testing left join function', () => {
  test('Is able to return values from a left join with two hashtables', () => {
    let hash1 = new HashTable(100);
    let hash2 = new HashTable(200);

    hash1.set('meow', 'dog');
    hash2.set('meow', 'wow');

    hash1.set('indo', 'cheese');
    hash2.set('indo', 'cherry');

    hash1.set('check', 'outside');
    hash2.set('check', 'inside');

    hash1.set('hello', 'everywhere');
    hash2.set('goodbye', 'at once');

    hash1.set('tank', 'yo');
    hash2.set('tank', 'wee');

    let values = leftJoin(hash1, hash2);
    expect(values).toEqual([['meow', 'dog', 'wow'], ['hello', 'everywhere', null], ['tank', 'yo', 'wee'], ['indo', 'cheese', 'cherry'], ['check', 'outside', 'inside']]);
  });

  test('Is able to return values from a left join with two hashtables of unequal length', () => {
    let hash1 = new HashTable(100);
    let hash2 = new HashTable(200);

    hash1.set('meow', 'dog');
    hash2.set('meow', 'wow');

    hash1.set('indo', 'cheese');
    hash2.set('indo', 'cherry');

    hash1.set('check', 'outside');

    hash1.set('hello', 'everywhere');
    hash2.set('goodbye', 'at once');

    hash1.set('tank', 'yo');

    let values = leftJoin(hash1, hash2);
    expect(values).toEqual([['meow', 'dog', 'wow'], ['hello', 'everywhere', null], ['tank', 'yo', null], ['indo', 'cheese', 'cherry'], ['check', 'outside', null]]);
  });

  test('Is able to return values from a left join with two hashtables that have no matching keys', () => {
    let hash1 = new HashTable(100);
    let hash2 = new HashTable(200);

    hash1.set('meow', 'dog');
    hash2.set('hulk', 'wow');
    hash1.set('indo', 'cheese');
    hash2.set('bing', 'cherry');
    hash1.set('hello', 'everywhere');
    hash2.set('goodbye', 'at once');
    hash1.set('tank', 'yo');

    let values = leftJoin(hash1, hash2);
    expect(values).toEqual([['meow', 'dog', null], ['hello', 'everywhere', null], ['tank', 'yo', null], ['indo', 'cheese', null]]);
  });

  test('Is able to return values from a left join with empty hashtables', () => {
    let hash1 = new HashTable(100);
    let hash2 = new HashTable(200);

    let values = leftJoin(hash1, hash2);
    expect(values).toEqual([]);
  });
});
