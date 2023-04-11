'use strict';

const { next } = require("cheerio/lib/api/traversing");

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
    if (this.head) {
      while (current.next) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          current = current.next.next;
        } else {
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
          current = current.next.next;
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
