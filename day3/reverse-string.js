// Write a function to reverse a given string.

// Date Solved: 2025-05-23

function reverseString(str) {
  // Convert the string to an array
  const strArray = str.split('');

  // Reverse the array
  const reversedArray = strArray.reverse();

  // Convert the array back to a string
  const reversedString = reversedArray.join('');

  return reversedString;
}

console.log(reverseString("hello")); // Output: "olleh"