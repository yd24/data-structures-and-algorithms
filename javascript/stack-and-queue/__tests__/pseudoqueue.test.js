'use strict';

const { PseudoQueue } = require('../stack-and-queue');

describe('Testing PseudoQueue', () => {
  test('Can successfully enqueue value into PseudoQueue', () => {
    let pq = new PseudoQueue();

    pq.enqueue(7);
    expect(pq.front.peek()).toEqual(7);

    pq.enqueue(6);
    expect(pq.front.peek()).toEqual(6);
    pq.enqueue(5);
    expect(pq.front.peek()).toEqual(5);
  });

  test('Can successfully dequeue value from PseudoQueue', () => {
    let pq = new PseudoQueue();
    pq.enqueue(7);
    pq.enqueue(6);

    let dq = pq.dequeue();
    expect(dq).toEqual(7);
    expect(pq.front.peek()).toEqual(6);
  });
});
