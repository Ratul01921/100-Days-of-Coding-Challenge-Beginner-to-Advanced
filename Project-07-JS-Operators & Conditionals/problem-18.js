/**
 * Problem 18: Check Odd and Positive
Write a program to check if a number is both odd and positive.
Hint: Use % and >.
Sample Input/Output:

Input: 7 → Output: Odd & Positive
Input: -5 → Output: Odd but Not Positive
 */
function findOddAndPossitive(num){
    if(num > 0 && num % 2 !== 0){
        return "Odd & Positive"
    }
    else if(num <= 0 && num % 2 !== 0){
        return "Odd but Not Positive"
    }
    else{
        return("Not Odd")
    }
    
    
}
console.log(findOddAndPossitive(-6))