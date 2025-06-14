// Solution 1: Using Math.max with spread operator
function findLargest1(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}