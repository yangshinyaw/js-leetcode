// Solution 1: Two Pointers Approach (Most Efficient)
function isPalindrome1(str) {
  // Clean the string: remove non-alphanumeric chars and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Solution 2: String Reversal and Comparison (Most Readable)
function isPalindrome2(str) {
  // Clean the string: remove non-alphanumeric chars and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string and compare
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Solution 3: Recursive Approach (Functional Style)
function isPalindrome3(str) {
  // Clean the string: remove non-alphanumeric chars and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  function checkPalindrome(s, start = 0, end = s.length - 1) {
    // Base case: if we've checked all characters
    if (start >= end) return true;
    
    // If characters don't match, it's not a palindrome
    if (s[start] !== s[end]) return false;
    
    // Recursively check the next pair of characters
    return checkPalindrome(s, start + 1, end - 1);
  }
  
  return checkPalindrome(cleaned);
}

// Test cases
const testStrings = [
  "racecar",
  "A man a plan a canal Panama",
  "race a car",
  "hello",
  "Madam",
  "Was it a car or a cat I saw?",
  ""
];

console.log("Testing all three solutions:");
console.log("============================");

testStrings.forEach(str => {
  console.log(`\nString: "${str}"`);
  console.log(`Solution 1 (Two Pointers): ${isPalindrome1(str)}`);
  console.log(`Solution 2 (String Reversal): ${isPalindrome2(str)}`);
  console.log(`Solution 3 (Recursive): ${isPalindrome3(str)}`);
});

// Performance comparison for large strings
console.log("\n\nPerformance Comparison:");
console.log("=======================");

const largeString = "A".repeat(10000) + "B".repeat(10000) + "A".repeat(10000);

console.time("Two Pointers");
isPalindrome1(largeString);
console.timeEnd("Two Pointers");

console.time("String Reversal");
isPalindrome2(largeString);
console.timeEnd("String Reversal");

console.time("Recursive");
isPalindrome3(largeString);
console.timeEnd("Recursive");

