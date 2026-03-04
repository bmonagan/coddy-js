// TODO: Create a Shape class
export default class Shape { 
    constructor(color) {
        this.color = color;
    }
    describe() {
        return `A ${this.color} shape`;
    }

}

===
// TODO: Import the Shape class from './Shape.js';
import Shape from './Shape.js';


// Test the Shape class
const myShape = new Shape('blue');
console.log(myShape.describe()); // Outputs: "A blue shape"
