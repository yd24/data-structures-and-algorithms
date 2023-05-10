# Merge Sort

## Description

Implement Merge Sort for an unsorted array of numbers.
[Solution link](https://github.com/yd24/data-structures-and-algorithms/pull/35)

## Whiteboard Process

![image](Whiteboard.png)

## Approach and Efficiency

When we are given an array of unsorted numbers:
* We split the array into two halves, left and right.
* We call the function recursively to split each half again.
* When a half cannot be split anymore, we merge the two halves:
  * We compare values from each half and set the values in the source array

In terms of time-complexity, the worst-case scenario is that we have to iterate through the entire array N number of times for all values (N). This means that our time-complexity is O(N)^2.

In terms of space-complexity, we have arrays that total to the input size N, so our space-complexity is O(N).
