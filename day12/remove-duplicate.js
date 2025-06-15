// Solution 1: Using Set (ES6+) - Most concise and efficient
function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)];
}