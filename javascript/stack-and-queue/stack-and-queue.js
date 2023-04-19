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

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(value) {
    this.front.push(value);
  }

  dequeue() {
    while (!this.front.isEmpty()) {
      this.rear.push(this.front.pop());
    }
    let val = this.rear.pop();
    while (!this.rear.isEmpty()) {
      this.front.push(this.rear.pop());
    }
    return val;
  }
}

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter extends Queue {
  constructor() {
    super();
  }

  enqueue(animal) {
    super.enqueue(animal);
  }

  dequeue(pref) {
    let animal = '';
    let firstAnimal = super.peek();
    while (animal !== firstAnimal) {
      animal = super.dequeue();
      if (animal.species === pref) {
        break;
      } else {
        this.enqueue(animal);
      }
    }
    return animal.species === pref ? animal : null;
  }
}

module.exports = {
  Stack,
  Queue,
  PseudoQueue,
  Animal,
  AnimalShelter,
};
