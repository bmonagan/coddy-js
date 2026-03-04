// TODO: Import the Shape class
import  Shape  from './Shape.js';

// TODO: Create a Circle class that extends Shape and export it
export default class Circle extends Shape {
    constructor(color,radius) {
        super(color);
        this.radius = radius;
    }

}

export default class Shape {
  constructor(color) {
    this.color = color;
  }
  
  describe() {
    return `A ${this.color} shape`;
  }
}

import  Shape  from './Shape.js';
import  Circle  from './Circle.js';


// Tests
const basicShape = new Shape('red');
console.log(basicShape.describe()); // "A red shape"

const myCircle = new Circle('blue', 10);
console.log(myCircle.describe()); // Should output: "A blue shape"