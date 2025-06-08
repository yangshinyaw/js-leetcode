// Solution 1: Basic approach - check all numbers up to n-1
function isPrime1(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Solution 2: Optimized approach - check only up to square root
function isPrime2(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}