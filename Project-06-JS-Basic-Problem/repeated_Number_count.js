/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

function repeatedNumberCount(numbers, find){
    let repeated = 0;
    for(const number of numbers){
        if(find === number){
            repeated++;
        }
    }
    return repeated;
    
}
const number = repeatedNumberCount([5,6,11,12,98,11, 5, 5 ,5], 12);
console.log(number);