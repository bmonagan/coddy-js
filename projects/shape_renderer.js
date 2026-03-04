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

export class Shape {
  constructor(color) {
    this.color = color;
  }
  
  describe() {
    return `A ${this.color} shape`;
  }
}

import { Shape } from './Shape.js';
import { Circle } from './Circle.js';

// Tests
const basicShape = new Shape('red');
console.log(basicShape.describe()); // "A red shape"

const myCircle = new Circle('blue', 10);
console.log(myCircle.describe()); // Should output: "A blue shape (Circle with radius 10)"
console.log(myCircle.calculateArea()); // Should output: "314.1592653589793"