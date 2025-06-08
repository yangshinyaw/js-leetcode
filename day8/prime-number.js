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

// Solution 3: Functional approach using array methods
function isPrime3(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    const limit = Math.sqrt(n);
    return !Array.from({length: Math.floor(limit) - 1}, (_, i) => i + 2)
        .some(divisor => n % divisor === 0);
}

// Test all three solutions
const testNumbers = [2, 3, 4, 17, 25, 29, 97, 100, 101];

console.log("Testing prime checking functions:");
console.log("Number\tSol1\tSol2\tSol3");
console.log("-".repeat(30));

testNumbers.forEach(num => {
    const result1 = isPrime1(num);
    const result2 = isPrime2(num);
    const result3 = isPrime3(num);
    console.log(`${num}\t${result1}\t${result2}\t${result3}`);
});