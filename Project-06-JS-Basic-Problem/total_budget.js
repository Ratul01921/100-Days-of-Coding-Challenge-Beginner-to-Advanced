/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobailQuantity){
    const laptop = 35000;
    const tablet = 15000;
    const mobaile = 20000;
     const total =( laptop * laptopQuantity) + (tablet * tabletQuantity) + (mobaile * mobailQuantity);
     return total;
}
console.log(calculateElectronicsBudget(1,1,1))