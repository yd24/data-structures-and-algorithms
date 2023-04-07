'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('Can instantiate LinkedList', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
    expect(Object.hasOwn(list, 'head')).toBeTruthy();
  });

  test('Can insert value into end of a LinkedList', () => {
    let list = new LinkedList();
    list.insert(7);
    expect(list.traverse().value).toEqual(7);

    list.insert(5);
    expect(list.traverse().value).toEqual(5);
  });

  test('Head properly points to beginning of LinkedList', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
    list.insert(7);

    expect(list.head.value).toEqual(7);
    list.insert(5);

    expect(list.head.value).toEqual(7);
  });

  test('Can see if value is inside a LinkedList', () => {
    let list = new LinkedList();
    expect(list.includes(5)).toBeFalsy();

    list.insert(7);
    list.insert(1);
    list.insert(5);
    list.insert(55);
    list.insert(6);

    expect(list.includes(5)).toBeTruthy();
    expect(list.includes(7)).toBeTruthy();
    expect(list.includes(6)).toBeTruthy();
    expect(list.includes(77)).toBeFalsy();
  });

  test('Can return LinkedList in string form', () => {
    let list = new LinkedList();
    let string = list.toString();
    expect(string).toEqual('NULL');

    list.insert(1);
    list.insert(5);
    list.insert(55);
    list.insert(6);

    string = list.toString();
    expect(string).toEqual('{ 1 } -> { 5 } -> { 55 } -> { 6 } -> NULL');
  });
});
