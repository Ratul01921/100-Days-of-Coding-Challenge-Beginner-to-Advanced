/**
 * Write a program to check if a given alphabet is a vowel or a consonant.
Hint: Vowels are a, e, i, o, u.
Sample Input/Output:

Input: a → Output: Vowel
Input: b → Output: Consonant
 */

function vowelOrConsonant(char) {
  if (
    char === 'a' || char === 'A' ||
    char === 'e' || char === 'E' ||
    char === 'i' || char === 'I' ||
    char === 'o' || char === 'O' ||
    char === 'u' || char === 'U'
  ) {
    return 'Vowel';
  } else {
    return 'Consonant';
  }
}

console.log(vowelOrConsonant('s'));
