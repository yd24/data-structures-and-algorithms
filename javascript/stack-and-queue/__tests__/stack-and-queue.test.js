'use strict';

const { Stack, Queue } = require('../stack-and-queue');

describe('Testing Stack', () => {
  test('Can push values into a stack', () => {
    let stack = new Stack();

    //test single push
    stack.push(7);
    expect(stack.top.value).toEqual(7);

    //test multiple pushes
    stack.push(8);
    expect(stack.top.value).toEqual(8);

    stack.push(9);
    expect(stack.top.value).toEqual(9);

    stack.push(5);
    expect(stack.top.value).toEqual(5);
  });

  test('Can pop values from a stack', () => {
    let stack = new Stack();
    stack.push(6);

    //test single pop
    let popped = stack.pop();
    expect(popped).toEqual(6);
    expect(stack.top).toEqual(null);

    stack.push(5);
    stack.push(3);
    stack.push(4);

    //test multiple pops
    popped = stack.pop();
    expect(popped).toEqual(4);

    popped = stack.pop();
    expect(popped).toEqual(3);

    popped = stack.pop();
    expect(popped).toEqual(5);

    expect(stack.top).toEqual(null);
  });

  test('Can peek into a stack', () => {
    let stack = new Stack();

    stack.push(1);
    expect(stack.peek()).toEqual(1);

    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });

  test('Exceptions when popping/peeking empty stack', () => {
    let stack = new Stack();

    //we use anonymous function here to capture the error.
    expect(() => stack.pop()).toThrow(ReferenceError);
    expect(() => stack.peek()).toThrow(ReferenceError);
  });

  test('Can tell if stack is empty', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();

    stack.push(7);
    expect(stack.isEmpty()).toBeFalsy();

    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });


});

describe('Testing Queue', () => {
  test('Can enqueue values into a queue', () => {
    let queue = new Queue();

    //test single enqueue
    queue.enqueue(7);
    expect(queue.rear.value).toEqual(7);


    //test multiple enqueue
    queue.enqueue(8);
    expect(queue.rear.value).toEqual(8);

    queue.enqueue(9);
    expect(queue.rear.value).toEqual(9);
  });

  test('Can dequeue values from a queue', () => {
    let queue = new Queue();
    queue.enqueue(7);
    queue.enqueue(9);
    queue.enqueue(10);

    let dequeued = queue.dequeue();
    expect(dequeued).toEqual(7);
    expect(queue.front.value).toEqual(9);

    dequeued = queue.dequeue();
    expect(dequeued).toEqual(9);
    expect(queue.front.value).toEqual(10);
  });

  test('Can peek into a queue', () => {
    let queue = new Queue();

    queue.enqueue(5);
    expect(queue.peek()).toEqual(5);

    queue.enqueue(22);
    expect(queue.peek()).toEqual(5);

    queue.enqueue(23);
    expect(queue.peek()).toEqual(5);
  });

  test('Can see if queue is empty', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();

    queue.enqueue(7);
    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('Has exceptions if dequeuing/peeking empty queue', () => {
    let queue = new Queue();
    expect(() => queue.dequeue()).toThrow(ReferenceError);
    expect(() => queue.peek()).toThrow(ReferenceError);
  });
});
