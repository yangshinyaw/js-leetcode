// Solution 1: Iterative approach (most efficient)
function fibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}


// Solution 2: Recursive approach (simple but less efficient for large n)
function fibonacciRecursive(n) {
    if (n <= 0) return [];
    
    function fib(num) {
        if (num <= 1) return num;
        return fib(num - 1) + fib(num - 2);
    }
    
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}


// Solution 3: Memoized recursive approach (efficient with caching)
function fibonacciMemoized(n) {
    if (n <= 0) return [];
    
    const memo = {};
    
    function fib(num) {
        if (num in memo) return memo[num];
        if (num <= 1) return memo[num] = num;
        return memo[num] = fib(num - 1) + fib(num - 2);
    }
    
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

// Test all three solutions
console.log("Testing with n = 10:");
console.log("Iterative:", fibonacciIterative(10));
console.log("Recursive:", fibonacciRecursive(10));
console.log("Memoized:", fibonacciMemoized(10));

console.log("\nTesting edge cases:");
console.log("n = 0:", fibonacciIterative(0));
console.log("n = 1:", fibonacciIterative(1));
console.log("n = 2:", fibonacciIterative(2));