/* exported numVowels */

// Prepare a vowel count and set it to 0.
// Check each letter in the string.
// Fore each vowel found, add 1 to the vowel count.
// Return the final vowel count.

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U' || string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
