'use strict';

const { Animal, AnimalShelter } = require('../stack-and-queue');

describe('Testing Animal Shelter', () => {
  test('Can successfully enqueue into Animal Shelter', () => {
    let animal = new Animal('cat', 'Arnold');
    let animal2 = new Animal('dog', 'Bob');
    let shelter = new AnimalShelter();

    shelter.enqueue(animal);
    expect(shelter.rear.value.name).toEqual('Arnold');

    shelter.enqueue(animal2);
    expect(shelter.rear.value.name).toEqual('Bob');
  });

  test('Can successfully dequeue from Animal Shelter', () => {
    let animal = new Animal('cat', 'Arnold');
    let animal2 = new Animal('dog', 'Bob');
    let animal3 = new Animal('dog', 'Ham');
    let animal4 = new Animal('lion', 'Cheese');
    let shelter = new AnimalShelter();

    shelter.enqueue(animal);
    shelter.enqueue(animal2);
    shelter.enqueue(animal3);
    shelter.enqueue(animal4);

    //can dequeue by preference
    let dq = shelter.dequeue('cat');
    expect(dq.name).toEqual('Arnold');

    //check if animal is not found
    expect(shelter.dequeue('cat')).toBeFalsy();
  });
});
