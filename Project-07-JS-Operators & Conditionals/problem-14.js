/**
 * Problem 14: Check Triangle Validity
Write a program to check whether three sides can form a triangle.
Hint: For a triangle, sum of any two sides must be greater than the third.
Sample Input/Output:

Input: 3 4 5 → Output: Valid
Input: 1 2 3 → Output: Not Valid
 */
function tringleValidity (num1, num2, num3){
    if(num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2){
        return " Valid"
    }
    return "Not Valid"
}
console.log(tringleValidity(3,10,7));