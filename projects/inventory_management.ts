// Create the generic InventoryItem interface
interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

function addItem<T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] {
    // You also had a typo inside the function body: new_item should be newItem
    inventory.push(newItem);
    return inventory;
}
function findItemByID<T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined { 
    for (let item of inventory) { 
        if (item.id === id){
            return item;
        }
    }
    return undefined;
}

// Create the required objects
const bookItem: InventoryItem<{ title: string; author: string }> = {
  id: 1,
  quantity: 5,
  details: { title: "TypeScript Guide", author: "John Doe" }
};

const electronicItem: InventoryItem<{ brand: string; model: string }> = {
  id: 2,
  quantity: 3,
  details: { brand: "TechCorp", model: "X200" }
};

const clothingItem: InventoryItem<{ size: string; color: string }> = {
  id: 3,
  quantity: 10,
  details: { size: "M", color: "Blue" }
};

let bookInventory = [bookItem];
let newBook: InventoryItem<{title: string, author:string}> = {
    id: 4,
    quantity: 2,
    details: { title: "Advanced TypeScript", author: "Jane Smith" }
}
let electronicInventory = [electronicItem];
let newElectronic: InventoryItem<{brand:string, model: string}> = {
    id: 5,
    quantity: 1,
    details: { brand: "GadgetCorp", model: "Z500" }
}

const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [
  {
    id: 10,
    quantity: 3,
    details: {
      title: "JavaScript Basics",
      author: "Alice Brown",
    },
  },
  {
    id: 11,
    quantity: 7,
    details: {
      title: "React Fundamentals",
      author: "Bob Wilson",
    },
  },
  {
    id: 12,
    quantity: 2,
    details: {
      title: "Node.js Guide",
      author: "Carol Davis",
    },
  },
];
const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [
  {
    id: 20,
    quantity: 5,
    details: {
      brand: "Samsung",
      model: "Galaxy S23",
    },
  },
  {
    id: 21,
    quantity: 1,
    details: {
      brand: "Apple",
      model: "iPhone 15",
    },
  },
];

let updatedBookInventory = addItem(bookInventory,newBook);
let updatedElectronicInventory = addItem(electronicInventory, newElectronic);