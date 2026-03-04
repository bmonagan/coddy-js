export class Shape {
  constructor(name) {
    this.name = name;
  }
  
  describe() {
    return `This is a ${this.name}`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  
  // TODO: Override the describe() method to return: "This is a circle with radius [radius]"
  describe() { 
    return `This is a circle with radius ${this.radius}`;
  }


  
}

export class Square extends Shape {
  constructor(side) {
    super("square");
    this.side = side;
  }
  
  // TODO: Override the describe() method to return: "This is a square with side [side]"
  describe() {
    return `This is a square with side ${this.side}`;
  }

}
=================
import { Shape } from './shapes.js';
import { Circle } from './shapes.js';
import { Square } from './shapes.js';

// Test code - don't modify
const circle = new Circle(5);
const square = new Square(10);

console.log(circle.describe()); // Expected: "This is a circle with radius 5"
console.log(square.describe()); // Expected: "This is a square with side 10"