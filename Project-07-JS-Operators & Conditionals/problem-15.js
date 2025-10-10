/**
 * Problem 15: Check Profit or Loss
Write a program to check whether a business deal resulted in profit or loss.
Hint: Compare Selling Price and Cost Price.
Sample Input/Output:

Input: CP=100 SP=150 → Output: Profit
Input: CP=200 SP=150 → Output: Loss
 */

function findProfitOrLoss(cp,sp){
    return cp<sp?"Profit": "Loss"
}
console.log(findProfitOrLoss(300,300));