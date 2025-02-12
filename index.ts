// Basic array manipulation exercises (recursion)

// Exercise 1: Reverse an Array
// Task: Write a function that takes an array of numbers as input and returns a new array with the numbers in reverse order. You cannot use built-in reverse functions.

// Example:
// reverseArray([1, 2, 3, 4]);
// Output: [4, 3, 2, 1]

// Solution

type ReverseArray = (arr: number[]) => number[];
const reverseArray: ReverseArray = (arr) => {
  // Base case
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  // Recursive case
  return reverseArray(arr.slice(1)).concat(arr[0]);
};

console.log(reverseArray([1, 2, 3]));

// reverseArray([3]), length == 1, return [3]
// reverseArray([2, 3]), length != 1, return reverseArray([3]).concat(arr[0]) = [3, 2]
// reverseArray([, 2, 3]), length != 1, return reverseArray([2, 3]).concat(arr[0]) = [3, 2, 1]
