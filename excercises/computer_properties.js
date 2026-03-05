export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // TODO: Add a getter method here that returns the computed area (width × height)
  get area() {
    return this.width * this.height;
  }

  // TODO: Add a getter method here that returns the computed perimeter property (2 × (width + height))
  get perimeter() {
    return (2 * (this.width + this.height));
  }
  
}

==========
import { Rectangle } from './rectangle.js';

// Test code - don't modify
const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.area}`);        // Should output "Area: 50"
console.log(`Perimeter: ${rect.perimeter}`); // Should output "Perimeter: 30"