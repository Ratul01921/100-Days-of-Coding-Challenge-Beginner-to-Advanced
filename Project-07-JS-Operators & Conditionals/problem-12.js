/**
 * Problem 12: Simple Calculator (+, -, *, /)
Write a program to perform +, -, *, / between two numbers.
Hint: Use if...else if to check operator.
Sample Input/Output:

Input: 10 5 + → Output: 15
Input: 10 5 * → Output: 50
 */

function simpleCalculator(num1, num2){

let operator = "+";
if(operator === "+"){

    return num1 + num2;
}
else if( operator === "-"){
    return num1 - num2;
}
else if( operator === "*"){
    return num1 * num2;
}
else if( operator === "/"){
    return num1 / num2;
}
else{
    return "Not a Number"
}

}
console.log(simpleCalculator(10, 20));