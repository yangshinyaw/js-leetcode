// Solution 1: Using Math.min with spread operator
function findSmallest1(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// Solution 2: Using a for loop
function findSmallest2(arr) {
    if (arr.length === 0) return undefined;
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Solution 3: Using reduce method
function findSmallest3(arr) {
    if (arr.length === 0) return undefined;
    
    return arr.reduce((min, current) => current < min ? current : min);
}

// Test examples
const numbers = [4, 2, 9, 1, 5, 6];
const negativeNumbers = [-3, -1, -7, -2];
const singleNumber = [42];
const emptyArray = [];

console.log("Testing with [4, 2, 9, 1, 5, 6]:");
console.log("Solution 1:", findSmallest1(numbers)); // 1
console.log("Solution 2:", findSmallest2(numbers)); // 1
console.log("Solution 3:", findSmallest3(numbers)); // 1

console.log("\nTesting with [-3, -1, -7, -2]:");
console.log("Solution 1:", findSmallest1(negativeNumbers)); // -7
console.log("Solution 2:", findSmallest2(negativeNumbers)); // -7
console.log("Solution 3:", findSmallest3(negativeNumbers)); // -7

console.log("\nTesting with [42]:");
console.log("Solution 1:", findSmallest1(singleNumber)); // 42
console.log("Solution 2:", findSmallest2(singleNumber)); // 42
console.log("Solution 3:", findSmallest3(singleNumber)); // 42
