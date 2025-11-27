function processFruits(fruits) {
  // Write your code here
  const result = fruits
  .filter(fruit => fruit.quantity > 0)
  .map(fruit=> fruit.name.toUpperCase() + ": " + fruit.quantity)
  .join(', ')

  return result;


}
