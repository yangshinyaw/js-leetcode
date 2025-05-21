// Using while loop
function printNumbersWhile(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}

// Using do-while loop
function printNumbersDoWhile(n) {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= n);
}

// Using Array methods
function printNumbersArray(n) {
    Array.from({ length: n }, (_, index) => {
        console.log(index + 1);
    });
}

// Using Array.forEach with spread operator
function printNumbersSpread(n) {
    [...Array(n)].forEach((_, index) => {
        console.log(index + 1);
    });
}

// Using recursion
function printNumbersRecursive(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbersRecursive(n, current + 1);
}