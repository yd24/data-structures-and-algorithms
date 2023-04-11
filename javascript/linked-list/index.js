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

  prepend(value) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.traverse();
      current.next = node;
    }
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let prev = this.head;
    if (this.head) {
      if (this.head.value === value) {
        node.next = this.head;
        this.head = node;
      } else {
        while (current) {
          if (current.value === value) {
            node.next = current;
            current = prev;
            current.next = node;
            break;
          }
          prev = current;
          current = current.next;
        }
      }
    }
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    if (this.head) {
      while (current) {
        if (current.value === value) {
          node.next = current.next;
          current.next = node;
          break;
        } else {
          current = current.next;
        }
      }
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
