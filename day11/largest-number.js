// Solution 1: Using Math.max with spread operator
function findLargest1(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Solution 2: Using a for loop
function findLargest2(arr) {
  if (arr.length === 0) return undefined;
  
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Test examples
const numbers = [3, 7, 2, 9, 1, 5];
const negativeNumbers = [-10, -3, -7, -1];
const singleNumber = [42];
const emptyArray = [];

console.log("Test array:", numbers);
console.log("Solution 1 result:", findLargest1(numbers)); // 9
console.log("Solution 2 result:", findLargest2(numbers)); // 9

console.log("\nNegative numbers:", negativeNumbers);
console.log("Solution 1 result:", findLargest1(negativeNumbers)); // -1
console.log("Solution 2 result:", findLargest2(negativeNumbers)); // -1

console.log("\nSingle number:", singleNumber);
console.log("Solution 1 result:", findLargest1(singleNumber)); // 42
console.log("Solution 2 result:", findLargest2(singleNumber)); // 42

console.log("\nEmpty array:", emptyArray);
console.log("Solution 1 result:", findLargest1(emptyArray)); // undefined
console.log("Solution 2 result:", findLargest2(emptyArray)); // undefined