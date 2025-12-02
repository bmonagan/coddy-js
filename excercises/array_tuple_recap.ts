// TODO: Write your code here
// Create the addToShoppingList function that takes a tuple and array as parameters

// Test data
const groceryItem: [string, number] = ["apples", 5];
const currentList: string[] = ["bread", "milk", "eggs"];

// TODO: Call your function and store the result in updatedList
function addToShoppingList(item : [string,number], clist: string[]){
    let new_item = item[0];
    let updated = [...clist, new_item];
    return updated;

}

let updatedList = addToShoppingList(groceryItem,currentList);
// TODO: Print the updated shopping list
console.log(updatedList);

// Second test
const bakeryItem: [string, number] = ["cookies", 2];

// TODO: Call your function again using updatedList and bakeryItem, store in finalList
let finalList = addToShoppingList(bakeryItem,updatedList);

// TODO: Print the final shopping list

console.log(finalList);