// TODO: Create the VendingMachine class and export it 
export class VendingMachine { 
    constructor(location, drinks) {
        this.location = location;
        this.drinks = drinks;
    }
    getStatus() {
        return `${this.location} machine: ${this.drinks} drinks left`;
    }
}
-------------------------------------------
import { VendingMachine } from './VendingMachine.js';

// Test - don't modify this part
const cafeMachine = new VendingMachine("Cafe", 20);
console.log(cafeMachine.getStatus()); // "Cafe machine: 20 drinks left"

