function calculateDiscount(price, discountPercent){
 return price*discountPercent/100;
};

function calculateTax(priceAfterDiscount,taxPercent){
  return priceAfterDiscount*taxPercent/100;
};

function calculateFinalPrice(price,discountPercent,taxPercent){
 discount = calculateDiscount(price, discountPercent)

 priceAfterDiscount = price - discount

 tax = calculateTax(priceAfterDiscount, taxPercent)

 finalPrice = priceAfterDiscount + tax

 return finalPrice;
};
function createPriceSummary(price,discountPercent,taxPercent){
    const discount = calculateDiscount(price, discountPercent);

    const priceAfterDiscount = price - discount;

    const tax = calculateTax(priceAfterDiscount, taxPercent);

    const finalPrice = calculateFinalPrice(
        price,
        discountPercent,
        taxPercent
    );

   return {
    price,
    discount,
    tax,
    finalPrice
};
}
console.log(createPriceSummary(1000, 20, 10));