'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let node = null;
    if (this.top !== null) {
      node = this.top;
      this.top = this.top.next;
    } else {
      throw new ReferenceError('Empty stack error');
    }
    return node.value;
  }

  peek() {
    if (this.top !== null) {
      return this.top.value;
    } else {
      throw new ReferenceError('Empty stack error');
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = this.front;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.rear = this.front;
    } else {
      this.rear.next = node;
      this.rear = this.rear.next;
    }
  }

  dequeue() {
    if (this.front === null) {
      throw new ReferenceError('Empty queue error');
    }
    let node = this.front;
    this.front = this.front.next;
    return node.value;
  }

  peek() {
    if (this.front === null) {
      throw new ReferenceError('Empty queue error');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Stack,
  Queue
};
