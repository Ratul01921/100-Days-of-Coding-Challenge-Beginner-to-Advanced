/**
 * Problem 13: Absolute Value (use ternary operator)
Write a program to find the absolute value of a number.
Hint: If number is negative, multiply by -1.
Sample Input/Output:

Input: -8 → Output: 8
Input: 12 → Output: 12
 */
function absoluteValue(num){
    if(num < 1){
        return num * -1;
    }
    return num;
}
console.log(absoluteValue(-13))