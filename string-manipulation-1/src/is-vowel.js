/* exported isVowel */

// Check if char is equal to any of the vowels.
// If it is return true.
// If it is not, return false.

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
  char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}

isVowel('k');
