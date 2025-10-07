/**
 * Problem 1: Check Even or Odd (use ternary operator)
Write a program to check whether a given number is even or odd.
Hint: Use modulus operator %.
Sample Input/Output:

Input: 7 → Output: Odd
Input: 10 → Output: Even
 */

function evenOrOdd(num){
    const result = num % 2 == 0 ? "Even" : "Odd";
    return result;
}
console.log(evenOrOdd(-23))