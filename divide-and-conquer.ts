// Exercise 1: Find the maximum number in an unsorted array using divide and conquer.

const getMax = (firstNumber: number, secondNumber: number): number => {
  if (firstNumber > secondNumber) {
    return firstNumber;
  }

  return secondNumber;
};

const findMax = (nums: number[]): number => {
  // Base case
  if (nums.length <= 1) {
    return nums[0];
  }

  const mid = Math.floor(nums.length / 2);

  // Recursive cases
  const left = findMax(nums.slice(0, mid));
  const right = findMax(nums.slice(mid));

  return getMax(left, right);
};

// console.log(findMax([20, 30, 12, 40]));

// 1st call findMax([20, 30, 12]) = 30
// length > 1
// mid = 1
// left = findMax([20]) = 20
// right = findMax([30, 12]) = 30

// 2nd call findMax([20])
// length == 1 return 20

// 3rd call findMax([30, 12]) = 30
// length > 2
// mid = 1
// left = findMax([30]) = 30
// right = findMax([12]) = 12

// 4th call findMax([30]) = 30
// length == 1 return 30

// 5th call findMax([12]) = 12
// length == 1 return 12

// Exercise 2: Find the sum of elements in an array using divide and conquer.

// Solution

const add = (left: number, right: number): number => left + right;

const sumElements = (nums: number[]): number => {
  // Base cases
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 0) {
    return 0;
  }

  // Get midpoint of the array
  const mid = Math.floor(nums.length / 2);

  // Recursive case
  const left = sumElements(nums.slice(0, mid));
  const right = sumElements(nums.slice(mid));

  return add(left, right);
};

// console.log(sumElements([0]));

// 1st call sumElements([0, 1, 2])
// length > 1
// mid = 1
// left = sumElements([0]) = 0
// right = sumElements([1, 2]) = 3
// return 0 + 3 = 3

// 2nd call sumElements([0]) = 0
// length == 1 return 0

// 3rd call sumElements([1, 2]) = 3
// length > 1
// mid = 1
// left = sumElements([1]) = 1
// right = sumElement([2]) = 2
// return 1 + 2 = 3

// 4th call sumElements([1]) = 1
// length == 1 return 1

// 5th call sumElements([2]) = 2
// length == 1 return 2

// Exercise 3: Counting elements in an array recursively.

// Solution

const getArrayLength = (nums: number[]): number => {
  // Base cases
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  // Get mid point of nums
  const mid = Math.floor(nums.length / 2);

  // Recursive cases
  const left = getArrayLength(nums.slice(0, mid));
  const right = getArrayLength(nums.slice(mid));

  // Finalization
  return left + right;
};

// console.log(getArrayLength([0, 1, 2]));

// 1st call getArrayLength([0, 1, 2]);
// length > 1
// mid = 1
// left = getArrayLength([0]) = 1
// right = getArrayLength([1, 2]) = 2
// return left + right = 1 + 2 = 3

// 2nd call getArrayLength([0]) = 1
// length == 1 return 1

// 3rd call getArrayLength([1, 2]) = 2
// length > 1
// mid = 1
// left = getArrayLength([0]) = 1
// right = getArrayLength([2]) = 1
// return left + right = 1 + 1 = 2

// Exercise 4: Finding the sum of even numbers in an array.

// Solution

const sumEvenNumbers = (nums: number[], start = 0, end = nums.length): number => {
  // Base cases
  if (start >= end) return 0;
  if (start === end - 1) return nums[start] % 2 === 0 ? nums[start] : 0;

  // Get mid point of nums
  const mid = Math.floor((start + end) / 2);

  // Recursive cases
  const leftSum = sumEvenNumbers(nums, start, mid);
  const rightSum = sumEvenNumbers(nums, mid, end);

  // Finalization
  return leftSum + rightSum;
};

// console.log(sumEvenNumbers([0, 1, 2]));

// 1st call sumEvenNumbers([0, 1, 2]) = 2
// length > 1
// mid = (start + end) / 2 = 0 + 3 / 2 = 1
// leftSum = sumEvenNumbers([0, 1, 2], 0, 1) = 0
// rightSum = sumEvenNumbers([0, 1, 2], 1, 3) = 2
// return 0 + 2 = 2

// 2nd call sumEvenNumbers([0, 1, 2], 0, 1) = 0
// start == end - 1
// 0 mod 2 == 0 return 0

// 3rd call sumEvenNumbers([0, 1, 2], 1, 3) = 2
// start < end
// mid = 2
// leftSum = sumEvenNumbers([0, 1, 2], 1, 2) = 0
// rightSum = sumEvenNumbers([0, 1, 2], 2, 3) = 2
// return 0 + 2 = 2

// 4th call sumEvenNumber([0, 1, 2], 1, 2) = 0
// start === end - 1
// 1 mod 2 != 0, return 0

// 5th call sumEvenNumbers([0, 1, 2], 2, 3) = 2
// start === end - 1
// 2 mod 2 == 0 return 2

// Exercise 5: Counting Odd Numbers in an Array (Divide and Conquer)

// Solution

const countOddNumbers = (nums: number[], start = 0, end = nums.length): number => {
  // Base cases
  if (start >= end) return 0;
  if (start === end - 1) return nums[start] % 2 !== 0 ? nums[start] : 0;

  // Get midpoint of nums
  const mid = Math.floor((start + end) / 2);

  // Recursive cases
  const left = countOddNumbers(nums, start, mid);
  const right = countOddNumbers(nums, mid, end);

  // Finalization
  return left + right;
};

console.log(countOddNumbers([0, 1, 2]));

// 1st call countOddNumbers([0, 1, 2], 0, 3) = 1
// start < end
// mid = Math.floor((0 + 3) / 2) = 1
// left = countOddNumbers([0, 1, 2], 0, 1) = 0
// right = countOddNumbers([0, 1, 2], 1, 3) = 1
// return left + right = 0 + 1 = 1

// 2nd all countOddNumber([0, 1, 2], 0, 1) = 0;
// start == end - 1
// 0 mod 2 === 0, return 0

// 3rd call countOddNumbers([0, 1, 2], 1, 3) = 1
// mid = Math.floor((1, 3) / 2) = 2
// left = countOddNumbers([0, 1, 2], 1, 2) = 1
// right = countOddNumbers([0, 1, 2], 2, 3) = 0
// return left + right = 1 + 0 = 1

// 4th call countOddNumbers([0, 1, 2], 1, 2) = 1
// 1 == 2 - 1
// 1 mod 2 !== 0, return 1

// 5th call countOddNumbers([0, 1, 2], 2, 3) = 0
// 2 == 3 - 1
// 2 mod 2 == 0, return 0
