// Other Solution: Using a for loop (traditional approach)
function reverseStringLoop(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseStringLoop("hello"));

// Other Solution: Using recursion
function reverseStringRecursive(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}
console.log(reverseStringRecursive("hello"));

// Other Solution: Using map with index manipulation
function reverseStringMap(str) {
    return str.split('').map((char, index, arr) => arr[arr.length - 1 - index]).join('');
}