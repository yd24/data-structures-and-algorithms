'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('Can instantiate LinkedList', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
    expect(Object.hasOwn(list, 'head')).toBeTruthy();
  });

  test('Can insert value into start of a LinkedList', () => {
    //prepend value to start of empty list.
    let list = new LinkedList();
    list.prepend(7);
    let string = list.toString();
    expect(string).toEqual('{ 7 } -> NULL');

    //prepend value to list.
    list.prepend(5);
    string = list.toString();
    expect(string).toEqual('{ 5 } -> { 7 } -> NULL');
  });


  test('Can insert value into end of a LinkedList', () => {
    //append value to empty list
    let list = new LinkedList();
    list.append(7);
    let string = list.toString();
    expect(string).toEqual('{ 7 } -> NULL');

    //append value to list
    list.append(5);
    string = list.toString();
    expect(string).toEqual('{ 7 } -> { 5 } -> NULL');
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
    //insert before a value in the list
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(12);
    list.insertBefore(6, 18);
    let string = list.toString();
    expect(string).toEqual('{ 5 } -> { 18 } -> { 6 } -> { 12 } -> NULL');

    //insert before a value at the end of the list
    list.insertBefore(12, 55);
    string = list.toString();
    expect(string).toEqual('{ 5 } -> { 18 } -> { 6 } -> { 55 } -> { 12 } -> NULL');

    //insert before a value at the start of the list
    list.insertBefore(5, 25);
    string = list.toString();
    expect(string).toEqual('{ 25 } -> { 5 } -> { 18 } -> { 6 } -> { 55 } -> { 12 } -> NULL');

    //if the value is not present
    let list2 = new LinkedList();
    list2.insertBefore(6, 7);
    let string2 = list2.toString();
    expect(string2).toEqual('NULL');

    //insert before a value when the list only has one element
    list2.append(1);
    list2.insertBefore(1, 8);
    string2 = list2.toString();
    expect(string2).toEqual('{ 8 } -> { 1 } -> NULL');
  });

  test('Can insert after a value in Linked List', () => {
    //insert after a value in the list
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(12);
    list.insertAfter(6, 18);
    let string = list.toString();
    expect(string).toEqual('{ 5 } -> { 6 } -> { 18 } -> { 12 } -> NULL');


    //insert after a value at the end of the list
    list.insertAfter(12, 55);
    string = list.toString();
    expect(string).toEqual('{ 5 } -> { 6 } -> { 18 } -> { 12 } -> { 55 } -> NULL');

    //insert after a value at the start of the list
    list.insertAfter(5, 25);
    string = list.toString();
    expect(string).toEqual('{ 5 } -> { 25 } -> { 6 } -> { 18 } -> { 12 } -> { 55 } -> NULL');

    //if value is not present in list
    let list2 = new LinkedList();
    list2.insertAfter(6, 7);
    let string2 = list2.toString();
    expect(string2).toEqual('NULL');

    //insert after a value if there is only one element in the list
    list2.append(1);
    list2.insertAfter(1, 8);
    string2 = list2.toString();
    expect(string2).toEqual('{ 1 } -> { 8 } -> NULL');
  });

  test('Can get Kth value from end of list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    //kth from end
    expect(list.kthFromEnd(3)).toEqual(2);
    //0th from end
    expect(list.kthFromEnd(0)).toEqual(5);
    //invalid k
    expect(list.kthFromEnd(5)).toEqual(undefined);
  });
});
