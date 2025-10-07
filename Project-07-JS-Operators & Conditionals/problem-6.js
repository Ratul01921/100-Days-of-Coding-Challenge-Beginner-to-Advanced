/**
 * Problem 6: Check Voting Eligibility (use ternary operator)
Write a program to check whether a person is eligible to vote or not.
Hint: A person is eligible if age >= 18.
Sample Input/Output:

Input: 16 → Output: Not Eligible
Input: 20 → Output: Eligible
 */

function votingEligibility(age){
    return age >= 18 ? "Eligible" : "Not Eligible"
}
console.log(votingEligibility(40))