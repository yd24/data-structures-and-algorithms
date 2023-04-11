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
    list.append(7);
    expect(list.traverse().value).toEqual(7);

    list.append(5);
    expect(list.traverse().value).toEqual(5);
  });

  test('Head properly points to beginning of LinkedList', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
    list.append(7);

    expect(list.head.value).toEqual(7);
    list.append(5);

    expect(list.head.value).toEqual(7);
  });

  test('Can see if value is inside a LinkedList', () => {
    let list = new LinkedList();
    expect(list.includes(5)).toBeFalsy();

    list.append(7);
    list.append(1);
    list.append(5);
    list.append(55);
    list.append(6);

    expect(list.includes(5)).toBeTruthy();
    expect(list.includes(7)).toBeTruthy();
    expect(list.includes(6)).toBeTruthy();
    expect(list.includes(77)).toBeFalsy();
  });

  test('Can return LinkedList in string form', () => {
    let list = new LinkedList();
    let string = list.toString();
    expect(string).toEqual('NULL');

    list.append(1);
    list.append(5);
    list.append(55);
    list.append(6);

    string = list.toString();
    expect(string).toEqual('{ 1 } -> { 5 } -> { 55 } -> { 6 } -> NULL');
  });

  test('Can insert before a value in Linked List', () => {
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(12);
    list.insertBefore(6, 18);

    let string = list.toString();
    expect(string).toEqual('{ 5 } -> { 18 } -> { 6 } -> { 12 } -> NULL');

    list.insertBefore(12, 55);
    expect(string).toEqual('{ 5 } -> { 18 } -> { 6 } -> { 55 } -> { 12 } -> NULL');

    list.insertBefore(5, 25);
    expect(string).toEqual('{ 25 } -> { 5 } -> { 18 } -> { 6 } -> { 55 } -> { 12 } -> NULL');

    let list2 = new LinkedList();
    list2.insertBefore(6, 7);
    let string2 = list2.toString();

    expect(string2).toEqual('NULL');
  });

  test('Can insert after a value in Linked List', () => {
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(12);
    list.insertAfter(6, 18);

    let string = list.toString();
    expect(string).toEqual('{ 5 } -> { 6 } -> { 18 } -> { 12 } -> NULL');

    list.insertAfter(12, 55);
    expect(string).toEqual('{ 5 } -> { 6 } -> { 18 } -> { 12 } -> { 55 } -> NULL');

    list.insertAfter(5, 25);
    expect(string).toEqual('{ 5 } -> { 25 } -> { 6 } -> { 18 } -> { 12 } -> { 55 } -> NULL');


    let list2 = new LinkedList();
    list2.insertAfter(6, 7);
    let string2 = list2.toString();

    expect(string2).toEqual('NULL');
  });
});
