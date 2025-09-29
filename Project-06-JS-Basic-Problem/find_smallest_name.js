/**
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const names = ['rahim', 'robin', 'rafik',  'ron', 'rashed'];
function findLowestName(names){
    let  lowest = names[0];
    for(let name of names){
        if(name.length < lowest.length){
            lowest = name;
        }
    }
    return lowest;
}

console.log(findLowestName(names))