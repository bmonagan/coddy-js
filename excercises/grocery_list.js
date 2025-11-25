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
function viewList(){
    if (groceryList.length === 0){
        console.log("The grocery list is empty.");
        return
    }
    console.log("Grocery List:");
    for (let i = 0; i < groceryList.length;i++){
        console.log(`${i+1}. ${groceryList[i]}`);
    }
}
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");