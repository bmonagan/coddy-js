export class Shape {
  calculateArea() {
    return 0;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  // TODO: Override the calculateArea() method to calculate and return  the actual area of a circle
  // Use the formula: Math.PI * this.radius * this.radius
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  
}


================
import { Shape } from './shapes.js';
import { Circle } from './shapes.js';

// Test your implementation
const myCircle = new Circle(5);
console.log(myCircle.calculateArea());
