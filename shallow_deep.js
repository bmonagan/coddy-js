function processCart(jsonString) {
    // Write code here
    const backToObject = JSON.parse(jsonString);
    let deepcopy = JSON.parse(JSON.stringify(backToObject));
    for (const itemkey in deepcopy){
        if (deepcopy[itemkey]['price'] > 50){
            deepcopy[itemkey]['discounted'] = true;
            deepcopy[itemkey]['price'] *= .9; 
        } else{
            deepcopy[itemkey]['discounted'] = false;

        }

    }
    return [backToObject, deepcopy];
}
// Don't write anything outside the function