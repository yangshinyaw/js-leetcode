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
