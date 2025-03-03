// string manipulation
// 1. Reverse a String
const reverseString = (str) => str.split('').reverse().join('');

// 2. Count Characters
const countCharacters = (str) => str.length;

// 3. Capitalize Words
const capitalizeWords = (sentence) => 
  sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


// array functions
// 4. Find Maximum and Minimum
const findMax = (arr) => Math.max(...arr);
const findMin = (arr) => Math.min(...arr);

// 5. Sum of Array
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

// 6. Filter Array (filters out elements based on a condition)
const filterArray = (arr, conditionFn) => arr.filter(conditionFn);


// mathematical functions
// 7. Factorial
const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

// 8. Prime Number Check
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// 9. Fibonacci Sequence
const fibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
};
