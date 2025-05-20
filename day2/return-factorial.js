// Write a function that returns the factorial of a number using a loop.

// Date Solved: 2025-05-20

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
