/**
 * Problem 16: Find Minimum of Two Numbers (use ternary operator)
Write a program to find the minimum of two numbers.
Hint: Use ternary operator.
Sample Input/Output:

Input: 12 5 → Output: 5

 */

function findManimumNumber(num1, num2){
    return num1 < num2 ? num1 : num2;
}
console.log(findManimumNumber(30,20))