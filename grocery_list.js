let groceryList = [];

function addItem(ingredient){
    groceryList.push(ingredient);
    console.log(`${ingredient} added to the grocery list.`);
}
addItem("Milk");
addItem("Bread");
addItem("Eggs");