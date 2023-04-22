'use strict';
const { Queue } = require('../stack-and-queue/stack-and-queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  preOrder(node, arr) {
    arr.push(node.value);
    if (node.left) {
      this.preOrder(node.left, arr);
    }
    if (node.right) {
      this.preOrder(node.right, arr);
    }
    return arr;
  }

  inOrder(node, arr) {
    if (node.left) {
      this.inOrder(node.left, arr);
    }
    arr.push(node.value);
    if (node.right) {
      this.inOrder(node.right, arr);
    }
    return arr;
  }

  postOrder(node, arr) {
    if (node.left) {
      this.postOrder(node.left, arr);
    }
    if (node.right) {
      this.postOrder(node.right, arr);
    }
    arr.push(node.value);
    return arr;
  }

  breadthFirst(node) {
    let visited = new Queue();
    let arr = [];
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      arr.push(current.value);
      if (current.left) {
        visited.enqueue(current.left);
      }
      if (current.right) {
        visited.enqueue(current.right);
      }
    }
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add() {

  }

  contains() {

  }
}

module.exports = BinarySearchTree;
