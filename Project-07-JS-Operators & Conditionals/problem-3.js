/**
 * Problem 3: Find Maximum of Two Numbers (use ternary operator)
Write a program to find the maximum number between two given numbers.
Hint: Use ternary condition ? value1 : value2.
Sample Input/Output:

Input: 10 20 → Output: 20
 */

function maximumNumber(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log(maximumNumber(40,20))