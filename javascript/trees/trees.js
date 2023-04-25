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
  constructor(node) {
    this.root = node;
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

  findMax() {
    let node = this.root;
    let max = -1;

    let visited = new Queue();
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      if (current !== null) {
        if (current.value > max) {
          max = current.value;
        }
        if (current.left) {
          visited.enqueue(current.left);
        }
        if (current.right) {
          visited.enqueue(current.right);
        }
      }
    }
    return max;
  }

  breadthFirstKary(node) {
    let visited = new Queue();
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      if (current.children) {
        for (let i = 0; i < current.children.length; i++) {
          visited.enqueue(current.children[i]);
        }
      }
    }
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
  }

  add(value) {
    this.root = this.addToTree(this.root, value);
  }

  addToTree(node, value) {
    if (node === null) {
      node = new Node(value);
      return node;
    }
    if (value > node.value) {
      node.right = this.addToTree(node.right, value);
    } else if (value < node.value) {
      node.left = this.addToTree(node.left, value);
    }
    return node;
  }

  contains(value) {
    return this.containsInTree(this.root, value);
  }

  containsInTree(node, value) {
    if (node === null) {
      return false;
    } else {
      if (value > node.value) {
        return this.containsInTree(node.right, value);
      } else if (value < node.value) {
        return this.containsInTree(node.left, value);
      }
      return true;
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
