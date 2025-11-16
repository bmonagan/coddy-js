let groceryList = [];

function addItem(ingredient){
    groceryList.push(ingredient);
    console.log(`${ingredient} added to the grocery list.`);
}
function removeItem(ingredient){
    let index = groceryList.indexOf(ingredient);

    if (index >= 0){
        groceryList.splice(index,1);
        console.log(`${ingredient} removed from the grocery list.`);

    }
    else{
        console.log(`${ingredient} is not in the grocery list.`)
    }
}
addItem("Milk");
addItem("Bread");
addItem("Eggs");
removeItem("Bread");
removeItem("Cheese");