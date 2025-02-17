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

// console.log(reverseArray([1, 2, 3]));

// reverseArray([3]), length == 1, return [3]
// reverseArray([2, 3]), length != 1, return reverseArray([3]).concat(arr[0]) = [3, 2]
// reverseArray([, 2, 3]), length != 1, return reverseArray([2, 3]).concat(arr[0]) = [3, 2, 1]

// Exercise 2: Split an Array into Two Equal Parts

// Write a function that splits an array into two halves. If the array has an odd number of elements, the extra element should go to the right half.

// Examples:
// splitArray([1, 2, 3, 4, 5, 6]) // Output: [[1, 2, 3], [4, 5, 6]]
// splitArray([1, 2, 3, 4, 5]); // Output: [[1, 2], [3, 4, 5]]

// Solution

// 1. [1, 2, 3]
const getSplittedArray = (nums: number[]): [number[], number[]] => {
  // Base cases
  if (nums.length === 0) { 
    return [[], []];
  }

  if (nums.length === 1) {
    return [[], nums];
  }

  const mid = Math.floor(nums.length / 2); // 3 / 2 = floor(1.5) = 1

  const left = nums.slice(0, mid); // nums.slice(0, 1) = [1]
  const right = nums.slice(mid); // nums.slice(1) = [2, 3]

  // Recursive case
  return [left, right]; // [left, right] = [[1], [2, 3]]
};

// console.log(getSplittedArray([1, 2, 3]));

// splitArray([]), length == 0, left = [], right = [], return [[], []]
// splitArray([1]), length == 1, left = [], right = [1], return [[], [1]];
// splitArray([1, 2]), length != 0, left = [1], right = [2], return [[1], [2]]
// splitArray([1, 2, 3]), length != 0, left = [1], right = [2, 3], return [[1], [2, 3]]

// Exercise 2: fibonacci

// Solution

const fibonacci = (num: number, sequence: number[] = [0, 1]): number[] => {
  // Base cases
  if (num <= 0) {
    return [];
  }

  if (num <= sequence.length) {
    return sequence.slice(0, num);
  }

  // Recursive case
  return fibonacci(num, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]);
};

// console.log(fibonacci(3));

// fibonacci(3), return fibonacci(3, [0, 1, 1])

const merge = (left: number[], right: number[]): number[] => {
  // Initialization
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Systematic iteration
  while (leftIndex < left.length && rightIndex < right.length) {
    // Logical comparison
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  // Finalization
  // Append remaining element
  return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
};

const mergeSort = (nums: number[]): number[] => {
  // Base case
  if (nums.length <= 1) {
    return nums;
  }

  // Get midpoint of nums
  const mid = Math.floor(nums.length / 2);

  // Recursive cases
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  // Finalization
  return merge(left, right);
};

// console.log(mergeSort([2, 15, 6, 14]));