/**
 * Find the lowest number in the array below.
 * const heights2 = [167, 190, 120, 165, 137];
 */

const numbers = [111, 167, 190, 120, 165, 137, 100];
// console.log(Math.min(...numbers))
function findLowestNumber(numbers){
    let lowest = numbers[0];
    for(let number of numbers){
        if(lowest > number){
            lowest = number;
        }
    }
    return lowest;
}
console.log(findLowestNumber(numbers))