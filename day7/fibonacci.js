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