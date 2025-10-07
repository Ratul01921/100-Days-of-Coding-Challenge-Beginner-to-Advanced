/**
 * 
Problem 4: Find Maximum of Three Numbers
Write a program to find the largest among three numbers using if...else if.
Hint: Compare numbers using &&.
Sample Input/Output:

Input: 5 12 8 → Output: 12
 */

function maximumNumber(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2 > num1 && num2 >num3){
        return num2
    }
    else{
        return num3;
    }
}
console.log(maximumNumber(40,60,50))