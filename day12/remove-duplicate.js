// Solution 1: Using Set (ES6+) - Most concise and efficient
function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)];
}

// Solution 2: Using filter() with indexOf() - Good for understanding logic
function removeDuplicatesWithFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}