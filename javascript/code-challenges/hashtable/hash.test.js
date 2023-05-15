const HashTable = require('./hash');

describe('Testing Hash table', () => {
  let ht = new HashTable(2);
  test('Can add items to Hash table', () => {
    ht.set('meow', 'woof');
    ht.set('dawg', 1);
    expect(ht.buckets[0]).toBeTruthy();
  });

  test('Can check if item exists in Hash table', () => {
    expect(ht.has('meow')).toBeTruthy();
  });

  test('Can get item from Hash table', () => {
    let meow = ht.get('meow');
    expect(meow).toEqual('woof');
  });

  test('Can get keys from Hash table', () => {
    let keys = ht.keys();
    expect(keys).toEqual(['meow', 'dawg']);
  });
});
