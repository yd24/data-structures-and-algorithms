'use strict';

const repeat = require('./repeated-word');

describe('Testing if function can detect repeated words', () => {
  test('Can find the first repeated word', () => {
    let string = "Once upon a time, there was a brave princess who...";
    let word = repeat(string);
    expect(word).toEqual('a');
  });

  test('Returns null if there are no repeated words', () => {
    let string = "Once upon a time";
    let word = repeat(string);
    expect(word).toBeFalsy();
  });

  test('Can find the first repeated word, even if the case is different', () => {
    let string = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    let word = repeat(string);
    expect(word).toEqual('it');
  });
});
