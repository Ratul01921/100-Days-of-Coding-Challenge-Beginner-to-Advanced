/**
 * Generate a random number between 10 to 20.
 */
function generateRandomNumber(){
    return Math.floor(Math.random()* 11) + 10
}
console.log(generateRandomNumber())