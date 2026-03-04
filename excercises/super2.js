export class Shape {
  calculateArea() {
    return "Calculating area...";
  }
}

export class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  
  // Override this method using super
  calculateArea() {
    // Call the parent's calculateArea() method using super and store the result
    const parentMessage = super.calculateArea();
    
     // Calculate the rectangle's actual area: width × height
    const area = this.width * this.height;
    
    // Return a combined string: parent's message + rectangle area. Example: Calculating area... Rectangle area: 50
    return `${parentMessage} Rectangle area: ${area}`;
  }
}

=====================
import { Shape } from './shapes.js';
import { Rectangle } from './shapes.js';

// Test code - do not modify
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); // Expected: "Calculating area... Rectangle area: 50"
