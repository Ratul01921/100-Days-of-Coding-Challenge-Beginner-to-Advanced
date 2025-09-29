/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function findLongestWord(str){
    const words =str.split(" ");
    let longest = "";
    for(let word of words){
        if(longest.length < word.length){
            longest = word;
        }
    }
    return longest;
}
const result = findLongestWord("I am learning Programming to become a programmer")
console.log(result)