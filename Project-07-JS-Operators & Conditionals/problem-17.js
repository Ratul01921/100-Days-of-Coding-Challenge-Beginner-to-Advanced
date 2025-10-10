/**
 * Problem 17: Check Pass or Fail (use ternary operator)
Write a program to check if a student has passed or failed.
Hint: Pass if marks >= 40.
Sample Input/Output:

Input: 35 → Output: Fail
Input: 60 → Output: Pass

 */
function findPassOrFail(res){
    return res >=40 ? "Pass": "Fail"
}
console.log(findPassOrFail(40))