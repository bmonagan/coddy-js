export class Shape {
  // TODO: Add a static property called totalShapes initialized to 0
  static totalShapes = 0;
  constructor(color) {
    this.color = color;
    // TODO: Increment the counter in the constructor: Shape.totalShapes++;
    Shape.totalShapes++;

    
  }
  
  describe() {
    return `A ${this.color} shape`;
  }
  
 // TODO: Add a static method called getTotalCreated() that returns the current count of total shapes   
 static getTotalCreated() {
    return Shape.totalShapes;
 }
  
}

import { Shape } from './Shape.js';

export class Circle extends Shape {
  constructor(color, radius) {
    super(color); 
    this.radius = radius;
  }
  
  describe() {
    return `${super.describe()} (Circle with radius ${this.radius})`;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}


import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

// Tests
console.log(`Initial count: ${Shape.getTotalCreated()}`); // Should be 0

const shape1 = new Shape('red');
const shape2 = new Shape('green');
const circle1 = new Circle('blue', 5);
const circle2 = new Circle('yellow', 10);

console.log(`After creating 4 shapes: ${Shape.getTotalCreated()}`); // Should be 4