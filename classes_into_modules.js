// TODO: Import the Laptop class from laptop.js
import {Laptop} from "./laptop.js";

// TODO: Import the Smartphone class from smartphone.js
import {Smartphone} from "./smartphone.js";


const myLaptop = new Laptop();
const myPhone = new Smartphone();

console.log(myLaptop.type);      // Outputs: "laptop"
console.log(myPhone.type);       // Outputs: "smartphone"
====
import { Device } from './device-base.js';

// TODO: Add export to make the Laptop class available
export class Laptop extends Device {
  constructor() {
    super("laptop");
  }
}
====
import { Device } from './device-base.js';

// TODO: Add export to make the Laptop class available
export class Laptop extends Device {
  constructor() {
    super("laptop");
  }
}
====
export class Device {
  constructor(type) {
    this.type = type;
  }
}