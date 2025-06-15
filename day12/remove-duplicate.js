// Solution 1: Using Set (ES6+) - Most concise and efficient
function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)];
}

// Solution 2: Using filter() with indexOf() - Good for understanding logic
function removeDuplicatesWithFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Solution 3: Using reduce() - Most flexible, allows custom logic
function removeDuplicatesWithReduce(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}

// Test examples
const testArray = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const stringArray = ['apple', 'banana', 'apple', 'orange', 'banana'];
const mixedArray = [1, '1', 2, '2', 1, 2];

console.log('Original array:', testArray);
console.log('Set method:', removeDuplicatesWithSet(testArray));
console.log('Filter method:', removeDuplicatesWithFilter(testArray));
console.log('Reduce method:', removeDuplicatesWithReduce(testArray));

console.log('\nString array:', stringArray);
console.log('Set method:', removeDuplicatesWithSet(stringArray));

console.log('\nMixed array (note: 1 ≠ "1"):', mixedArray);
console.log('Set method:', removeDuplicatesWithSet(mixedArray));