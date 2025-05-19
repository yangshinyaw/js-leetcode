// Question: Write a function that returns the maximum of three numbers.

// Date Solved: 2025-05-19

function maxThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    } else if (c> max){
        max = c;
    }
    return max;
}

console.log(maxThree(9, 12, 5));