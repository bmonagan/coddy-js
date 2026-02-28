export class ShoppingCart {
   static taxRate = 0.08;
   static currency = "USD";
   
   // TODO: Add a static method called calculateTax(amount) that returns amount * ShoppingCart.taxRate

  constructor() {
    // Initialize instance properties items and total
    this.items = [];
    this.total = 0;
  }
  
  // Add instance method addItem
  addItem(price) {
    this.total += price;
    this.items.push(price);
    return this.total;
  }
  static calculateTax(amount) {
     return amount * ShoppingCart.taxRate;
  }
}


============================
import { ShoppingCart } from './shoppingCart.js';

// Test code - don't modify
console.log(ShoppingCart.currency);                // Should output "USD"
console.log(ShoppingCart.calculateTax(100));       // Should output 8 (100 * 0.08)

const cart = new ShoppingCart();
console.log(cart.addItem(25));                     // Should output 25
console.log(cart.addItem(50));                     // Should output 75
console.log(ShoppingCart.calculateTax(cart.total)); // Should output 6 (75 * 0.08)
