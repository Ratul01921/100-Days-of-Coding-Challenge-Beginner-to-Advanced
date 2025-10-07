/**
 * 
Problem 5: Check Leap Year
Write a program to check whether a given year is a leap year or not.
Hint: Leap year if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0).
Sample Input/Output:

Input: 2020 → Output: Leap Year
Input: 2021 → Output: Not Leap Year
 */

function leapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return "Leap Year"
    }
    else{
        return "Not Leap Year"
    }
}
console.log(leapYear(2021))