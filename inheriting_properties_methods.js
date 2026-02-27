import { Dessert } from './desserts.js';
import { Cake } from './desserts.js';

// Test code - don't modify
const myCake = new Cake("Birthday Cake", 300, "Chocolate");
console.log(myCake.describe());   // Should output "Birthday Cake has 300 calories"
console.log(myCake.flavor);       // Should output "Chocolate"
console.log(myCake.addCandles()); // Should output "Added candles to Birthday Cake!"
================
export class Dessert {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
  
  describe() {
    return `${this.name} has ${this.calories} calories`;
  }
}

// TODO: Create the Cake class that extends Dessert and export it
export class Cake extends Dessert { 
  constructor(name,calories,flavor) {
    super(name,calories);
    this.flavor = flavor;
    
  }
  
  addCandles(){
    return `Added candles to ${this.name}!`;
  }
}

// TODO: Add a constructor function with 3 properties: name, calories, flavor

// TODO: Call super() with name and calories

// TODO: Add a new property called 'flavor'

// TODO: Add an 'addCandles()' method that returns a string saying `Added candles to ${this.name}!`
