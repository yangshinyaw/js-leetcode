// Solution 1: Using a for loop with includes()
function countVowelsLoop(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}
// Solution 2: Using regular expressions with match()
function countVowelsRegex(str) {
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}

// Solution 3: Using filter() with split()
function countVowelsFilter(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowelsLoop("hello")); // Output: 2
console.log(countVowelsRegex("hello")); // Output: 2