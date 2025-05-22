// While loop version
function factorialWhile(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

// Recursive approach
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Using Array.from() and reduce()
function factorialReduce(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
                .reduce((acc, num) => acc * num, 1);
}

console.log(factorialWhile(5));
console.log(factorialRecursive(5));
console.log(factorialReduce(5));


