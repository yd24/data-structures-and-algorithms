'use strict';
const { Node, BinaryTree } = require('../trees/trees');
const treeIntersection = require('./treeIntersection');

describe('Testing function to find common values between trees', () => {
  test('When given two trees, can find common values between them', () => {
    let btree = new BinaryTree(new Node(3));
    btree.root.left = new Node(1);
    btree.root.right = new Node(5);
    btree.root.right.left = new Node(6);
    btree.root.right.right = new Node(10);
    btree.root.left.right = new Node(7);

    let btree2 = new BinaryTree(new Node(1));
    btree2.root.left = new Node(3);
    btree2.root.right = new Node(2);
    btree2.root.right.left = new Node(2);
    btree2.root.right.right = new Node(8);
    btree2.root.left.right = new Node(7);

    let values = treeIntersection(btree, btree2);
    console.log(values);
    expect(values).toEqual([1, 3, 7]);
  });

  test('When given two trees of unequal size, can find common values between them', () => {
    let btree = new BinaryTree(new Node(3));
    btree.root.left = new Node(1);
    btree.root.right = new Node(5);
    btree.root.right.left = new Node(6);

    let btree2 = new BinaryTree(new Node(1));
    btree2.root.left = new Node(3);
    btree2.root.right = new Node(2);
    btree2.root.right.left = new Node(2);
    btree2.root.right.right = new Node(8);
    btree2.root.left.right = new Node(7);

    let values = treeIntersection(btree, btree2);
    console.log(values);
    expect(values).toEqual([1, 3]);
  });

  test('When two trees have no common values, return empty array', () => {
    let btree = new BinaryTree(new Node(3));
    btree.root.left = new Node(1);
    btree.root.right = new Node(5);
    btree.root.right.left = new Node(6);

    let btree2 = new BinaryTree(new Node(0));
    btree2.root.left = new Node(12);
    btree2.root.right = new Node(2);
    btree2.root.right.left = new Node(2);
    btree2.root.right.right = new Node(2);
    btree2.root.left.right = new Node(15);

    let values = treeIntersection(btree, btree2);
    console.log(values);
    expect(values).toEqual([]);
  });
});
