'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../trees');

describe('Testing Binary Tree', () => {
  let btree = null;
  let bst = null;

  test('Can create Binary Tree', () => {
    let root = new Node(5);
    btree = new BinaryTree(root);

    let left = new Node(3);
    let right = new Node(7);

    btree.root.left = left;
    btree.root.right = right;

    expect(btree.root.value).toEqual(5);
    expect(btree.root.left.value).toEqual(3);
    expect(btree.root.right.value).toEqual(7);
  });

  test('Can traverse a Binary Tree', () => {
    btree.root.left.left = new Node(1);
    btree.root.left.right = new Node(4);
    btree.root.right.right = new Node(10);
    btree.root.right.left = new Node(6);

    let arr = btree.preOrder(btree.root, []);
    expect(arr).toEqual([5, 3, 1, 4, 7, 6, 10]);

    arr = btree.inOrder(btree.root, []);
    expect(arr).toEqual([1, 3, 4, 5, 6, 7, 10]);

    arr = btree.postOrder(btree.root, []);
    expect(arr).toEqual([1, 4, 3, 6, 10, 7, 5]);
  });

  test('Can add values to a BinarySearchTree', () => {
    let node = new Node(5);
    bst = new BinarySearchTree(node);

    bst.add(3);
    bst.add(7);
    bst.add(10);

    let arr = bst.preOrder(bst.root, []);
    expect(arr).toEqual([5, 3, 7, 10]);

    bst.add(6);
    bst.add(2);
    arr = bst.postOrder(bst.root, []);
    expect(arr).toEqual([2, 3, 6, 10, 7, 5]);
  });

  test('Can see if BST contains a value', () => {
    expect(bst.contains(7)).toBeTruthy();
    expect(bst.contains(2)).toBeTruthy();
    expect(bst.contains(19)).toBeFalsy();
  });

  test('Can get max', () => {
    let max = btree.findMax();
    expect(max).toEqual(10);

    btree.root.left.left.left = new Node(15);
    max = btree.findMax();
    expect(max).toEqual(15);

    btree = new BinaryTree(null);
    max = btree.findMax();
    expect(max).toEqual(-1);
  });
});
