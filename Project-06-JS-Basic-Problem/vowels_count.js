/**
 * Write a function to count the number of vowels in a string.
 */

function vowelsCount(latters){
    const vowels = "aeiouAEIOU"
    let count = 0;
    for(let latter of latters){
        if(vowels.includes(latter)){
            count++;
        }
    }
    return count;
}
console.log(vowelsCount("Javascript"))
console.log(vowelsCount("Ratul"))