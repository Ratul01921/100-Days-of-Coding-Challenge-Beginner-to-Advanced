/**
 * Problem 7: Check Divisibility by 5 and 11
Write a program to check if a number is divisible by both 5 and 11.
Hint: Use % operator and &&.
Sample Input/Output:

Input: 55 → Output: Divisible
Input: 25 → Output: Not Divisible
 */

function divisibilityNumber(num){
    if(num % 5 == 0 && num % 11 == 0){
        return "Divisible"
    }
    return "Not Divisible"
}
console.log(divisibilityNumber(55))