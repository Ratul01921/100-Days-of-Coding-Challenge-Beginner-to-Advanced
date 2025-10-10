/**
 * Problem 19: Check Armstrong Number (3 digit)
Write a program to check if a number is an Armstrong number.
Hint: Armstrong = sum of cubes of digits = number.
Sample Input/Output:

Input: 153 → Output: Armstrong
Input: 123 → Output: Not Armstrong
 */

function findArmstrongNumber(num){
    const d1 = Math.floor(num/100);
    const d2 = Math.floor((num % 100) / 10 )
    const d3 = num % 10;

    const number = d1**3 + d2**3 + d3**3;
    if(number === num){
        return "Armstrong"
    }
    else{
        return "Not Armstrong"
    }
}
console.log(findArmstrongNumber(123))