// TODO: Write your code here

// Create the ProductCatalog interface
interface ProductCatalog { 
    [keys:string]: number
}


// Create the getStockLevel function
function getStockLevel(catalog: ProductCatalog, productName: string): number { 
    if (!(productName in catalog)) { 
        return 0;
    }
    else {
        return catalog[productName];
    }
}


// Create the updateStock function

function updateStock(catalog: ProductCatalog, productName: string, newQuantity: number): void { 
    catalog[productName] = newQuantity;
}

// Create the getTotalStock function
function getTotalStock(catalog:ProductCatalog): number { 
    let total = 0;
    for (let item in catalog) { 
        total += catalog[item];
    }
    return total;
}


// Create test data - inventory object
let inventory = { 
    "laptop": 15,
    "mouse": 50,
    "keyboard": 25,
    "monitor": 8
}


// Test the functions and print results
console.log(getStockLevel(inventory, "laptop"));
console.log(getStockLevel(inventory, "tablet"));
console.log(getTotalStock(inventory));
updateStock(inventory, "mouse", 75);
updateStock(inventory, "webcam", 12);
console.log(getStockLevel(inventory, "mouse"));
console.log(getStockLevel(inventory, "webcam"));
console.log(getTotalStock(inventory));