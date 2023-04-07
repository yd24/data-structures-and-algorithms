'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.traverse();
      current.next = node;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let string = '';
    if (this.head) {
      let current = this.head;
      string = `{ ${current.value} } -> `;
      while (current.next) {
        current = current.next;
        string = string.concat(`{ ${current.value} } -> `);
      }
    }
    string = string.concat('NULL');
    return string;
  }

  traverse() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
}

module.exports = LinkedList;
