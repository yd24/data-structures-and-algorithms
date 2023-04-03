function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
    //newArray[(arr.length - 1) - i] = arr[i]; for directly setting the array value.
  }
  return newArray;

  /*** STRETCH GOAL SOLUTION

  let x, y, z;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    x = i;
    y = (arr.length - 1) - i;
    z = arr[i];
    arr[x] = arr[y];
    arr[y] = z;
  }
  return arr;

  ***/
}

module.exports = reverseArray;
