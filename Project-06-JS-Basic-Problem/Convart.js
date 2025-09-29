/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

function calsiusToFahrenheit(celsius){
    const farhenheit = (celsius *9/5 ) +32;
    return farhenheit;
}
const total = calsiusToFahrenheit(5);
console.log(total)


/**
 *  Write a function to convert temperature from Fahrenheit to Celsius.
 */

function farhenheitToCelsius(farhenheit){
    return (farhenheit -32)* 5/9;
}
console.log(farhenheitToCelsius(100))