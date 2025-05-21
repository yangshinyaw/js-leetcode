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

