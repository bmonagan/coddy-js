function calculateGroceryTotal(items) {
    // Write code here
    const originalTotal = items.reduce((acc,item) => {
        return acc + item.price;
    },0);
    let discount = 0;
    if (originalTotal > 100){
        discount = originalTotal * .1;
    } else if (originalTotal > 50){
        discount = originalTotal * .05;
    } else{
        discount = 0;
    }
    const finalTotal = originalTotal - discount;
    


    return {
        originalTotal,
        discount,
        finalTotal
    };
}