// Solution 1: Using a for loop (traditional approach)
function countCharLoop(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Solution 2: Using split() method (elegant one-liner)
function countCharSplit(str, char) {
    return str.split(char).length - 1;
}

// Solution 3: Using filter() with spread operator (functional approach)
function countCharFilter(str, char) {
    return [...str].filter(c => c === char).length;
}

// Test all three solutions
const testString = "hello world";
const targetChar = "l";

console.log("Testing string:", testString);
console.log("Counting character:", targetChar);
console.log("\nResults:");
console.log("Loop method:", countCharLoop(testString, targetChar));
console.log("Split method:", countCharSplit(testString, targetChar));
console.log("Filter method:", countCharFilter(testString, targetChar));

// Additional test cases
console.log("\n--- Additional Tests ---");
console.log('countCharLoop("javascript", "a"):', countCharLoop("javascript", "a"));
console.log('countCharSplit("programming", "m"):', countCharSplit("programming", "m"));
console.log('countCharFilter("banana", "n"):', countCharFilter("banana", "n"));