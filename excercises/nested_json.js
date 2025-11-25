function calculateRestaurantBill(order) {
    // Write code here
    let totalBeforeDiscount = 0;
    let totaldiscount = 0;
    for (const itemDetails of Object.values(order)) {
        let cost = itemDetails.price * itemDetails.quantity;

        if (itemDetails.isSpecialOffer === true) {
            let discount = cost * 0.2;
            totaldiscount += discount;
        }

        totalBeforeDiscount += cost;
    }
    finalTotal = (totalBeforeDiscount - totaldiscount)
    const output = { 'totalBeforeDiscount': totalBeforeDiscount, 'totalDiscount': totaldiscount, 'finalTotal': finalTotal};
    return output
}
// Do not write anything outside function