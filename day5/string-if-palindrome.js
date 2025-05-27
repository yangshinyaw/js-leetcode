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