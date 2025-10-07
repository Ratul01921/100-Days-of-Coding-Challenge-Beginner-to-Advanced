/**
 * Write a program to assign a grade (A, B, C, F) based on marks.
Hint: Use if...else if...else.
Sample Input/Output:

Input: 85 → Output: Grade A
Input: 50 → Output: Grade C
 */

function getGrade(marks) {
    if (marks >= 80) {
        return "Grade A";
    } 
    else if (marks >= 60) {
        return "Grade B";
    } 
    else if (marks >= 40) {
        return "Grade C";
    } 
    else {
        return "Grade F";
    }
}
console.log(getGrade(85)); 