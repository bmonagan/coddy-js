function updateBikeInventory(inventoryStr) {
    let inventory = JSON.parse(inventoryStr);
    
    for (let i = 0; i < inventory.bikes.length; i++) {
        if (inventory.bikes[i].quantity < 3) {
            inventory.bikes[i].note = "Restock needed";
        }
    }
    
    return JSON.stringify(inventory);
}