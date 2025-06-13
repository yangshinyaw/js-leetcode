// Solution 1: Using Math.min with spread operator
function findSmallest1(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// Solution 2: Using a for loop
function findSmallest2(arr) {
    if (arr.length === 0) return undefined;
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}