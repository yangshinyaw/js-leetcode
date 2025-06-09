// Solution 1: Using a for loop (traditional approach)
function sumArrayLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Solution 2: Using the reduce method (functional approach)
function sumArrayReduce(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Alternative one-liner using reduce
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log("Array:", numbers);
console.log("Sum using loop:", sumArrayLoop(numbers));
console.log("Sum using reduce:", sumArrayReduce(numbers));
console.log("Sum using arrow function:", sumArray(numbers));

// Test with different arrays
const decimals = [1.5, 2.3, 3.7, 4.1];
const mixed = [10, -5, 3, -2, 8];
const empty = [];
const single = [42];

console.log("\nTesting with different arrays:");
console.log("Decimals [1.5, 2.3, 3.7, 4.1]:", sumArrayReduce(decimals));
console.log("Mixed [10, -5, 3, -2, 8]:", sumArrayLoop(mixed));
console.log("Empty []:", sumArray(empty));
console.log("Single [42]:", sumArrayReduce(single));