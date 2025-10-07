/**
 * Problem 11: Check Multiple of 3 or 7 (use ternary operator)
Write a program to check whether a number is a multiple of 3 or 7.
Hint: Use % operator.
Sample Input/Output:

Input: 21 → Output: Multiple of 7
Input: 9 → Output: Multiple of 3

 */

function getMultipleNum(num){
    // if(num % 7 == 0){
    //     return "Multiple of 7"
    // }
    // else if(num % 3 == 0){
    //     return "Multiple of 3"
    // }
    // else{
    //     return "Not Multiple"
    // }

    return num % 7==0 ? "Multiple of 7" : num % 3==0 ? "Multiple of 3": "Not Multiple"

}
console.log(getMultipleNum(21));