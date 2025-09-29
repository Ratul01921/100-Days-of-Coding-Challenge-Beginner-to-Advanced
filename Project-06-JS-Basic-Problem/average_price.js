/**
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
    
 */
const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(phones){
        let phonePrice= [];
        let totalPrice = 0;
        for(const phone of phones){
            phonePrice.push(phone.price);
        }
        for(let i = 0; i<phonePrice.length; i++ ){
            totalPrice+=phonePrice[i];
        }
        const average =totalPrice/phonePrice.length;
        return parseFloat(average.toFixed(3));
        
    }
    const phoneDetails = findAveragePhonePrice(phones);
    console.log(phoneDetails)
    // console.log(typeof(phoneDetails));


//     function findAveragePhonePrice(phones) {
//     let totalPrice = 0;

//     for (const phone of phones) {
//         totalPrice += phone.price; 
//     }

//     return totalPrice / phones.length;
// }