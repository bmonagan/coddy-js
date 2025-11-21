function analyzeShoppingCart(cart) {
    const items = Object.values(cart);
    let total = 0;
    for (let item of items){
        total += item;
    }
    let totalItems = items.length;
    let totalQuantity = total;
    
    
    return {
        totalItems: totalItems,
        totalQuantity: totalQuantity,
    };
}
// Do not write anything outside function