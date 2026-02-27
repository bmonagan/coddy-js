import { Furniture } from './furniture.js';

// TODO: Create a Table class that extends Furniture and export it
export class Table extends Furniture {
    constructor(material,color,shape) { 
        super(material,color);
        this.shape = shape;
    }
    placeItem() {
        return "Item placed on table";
    }
}
======
import { Furniture } from './furniture.js';

// TODO: Create a Chair class that extends Furniture and export it
export class Chair extends Furniture { 
    constructor(material, color,numberOfLegs) {
        super(material,color);
        this.numberOfLegs = numberOfLegs;
    }

    sit() { 
        return "Sitting on the chair";
    }
}
=====
// Base class
export class Furniture {
  constructor(material, color) {
    this.material = material;
    this.color = color;
  }
  
  describe() {
    return `${this.color} ${this.material} furniture`;
  }
}
=====
import { Furniture } from './furniture.js';
import { Table } from './table.js';
import { Chair } from './chair.js';


// Test code - don't modify
const myChair = new Chair("wood", "brown", 4);
console.log(myChair.describe());   // Should output "brown wood furniture"
console.log(myChair.numberOfLegs); // Should output 4
console.log(myChair.sit());        // Should output "Sitting on the chair"

const myTable = new Table("glass", "clear", "round");
console.log(myTable.describe());   // Should output "clear glass furniture"
console.log(myTable.shape);        // Should output "round"
console.log(myTable.placeItem());  // Should output "Item placed on table"
