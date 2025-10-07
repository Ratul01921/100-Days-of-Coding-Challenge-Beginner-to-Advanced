/**
 * Problem 2: Check Positive, Negative or Zero
Write a program to check if a number is positive, negative, or zero.
Hint: Use if...else if...else.
Sample Input/Output:

Input: -5 → Output: Negative
Input: 0 → Output: Zero
Input: 12 → Output: Positive
 */

function positiveOrNegativeOrZero(num){
    if(num >= 1){
        return "Possitive";
    }
    else if(num == 0){
        return "Zero";
    }
    else{
        return "Negetive"
    }
}
console.log(positiveOrNegativeOrZero(-111))