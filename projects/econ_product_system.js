export class Product {
  #price; // Private field for encapsulation
  
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  
  // Getter for price
  get price() {
    return this.#price;
  }
  
  // Setter with validation
  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log('Price must be positive');
    }
  }
  
  // TODO: Add method getPrice() that returns this.#price
  getPrice() {
    return this.#price;
  }

  // TODO: Add method getDescription() that returns ${this.name} - $${this.#price}
  getDescription() {
    return `${this.name} - $${this.#price}`
  }
  
}

import { Product } from './product.js';

export class PhysicalProduct extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  
  getDescription() {
    return `${this.name} - $${this.price} (${this.weight} lbs)`;
  }
  
  // TODO: Add method calculateShipping()
  calculateShipping() {
    return this.weight * 0.5;
  }
  
