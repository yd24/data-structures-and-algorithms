'use strict';

const { KaryTree, KaryNode } = require('../trees');

describe('Testing KaryTree', () => {
  test('FizzBuzz function successfully returns new KaryTree with changed values', () => {
    let kary1 = new KaryNode(1);
    let kary2 = new KaryNode(3);
    let kary3 = new KaryNode(6);
    let kary4 = new KaryNode(20);
    let kary5 = new KaryNode(15);
    let kary6 = new KaryNode(23);

    kary4.children = [kary5, kary6];
    kary1.children = [kary4, kary3, kary2];

    let ktree = new KaryTree(kary1);
    let ktree2 = ktree.fizzBuzzTree(ktree.root);

    expect(ktree2.breadthFirstKary(ktree2.root)).toEqual(['1', 'Buzz', 'Fizz', 'Fizz', 'FizzBuzz', '23']);
  });

  test('FizzBuzz function successfully returns new KaryTree with 1 value', () => {
    let kary1 = new KaryNode(5);
    let ktree = new KaryTree(kary1);
    let ktree2 = ktree.fizzBuzzTree(ktree.root);

    expect(ktree2.breadthFirstKary(ktree2.root)).toEqual(['Buzz']);
  });
});
