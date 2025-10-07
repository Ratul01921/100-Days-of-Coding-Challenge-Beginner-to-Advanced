/**
 * Problem 9: Check Uppercase or Lowercase (use ternary operator)
Write a program to check whether a character is uppercase or lowercase.
Hint: Use character ranges 'A'–'Z' and 'a'–'z'.
Sample Input/Output:

Input: A → Output: Uppercase
Input: g → Output: Lowercase
 */

function uppercaseOrLowercase(char) {
  return (char >= 'A' && char <= 'Z')? 'Uppercase': (char >= 'a' && char <= 'z')? 'Lowercase': 'Not a letter';
}

console.log(uppercaseOrLowercase('A'));
