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