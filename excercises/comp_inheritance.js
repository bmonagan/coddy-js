import { Processor } from './processor.js';
import { Memory } from './memory.js';

export class Computer {
  constructor(processorSpeed, memorySize) {
      
    // TODO: Create a processor property using the Processor class 
    // and pass the processorSpeed to the Processor constructor
    this.processor = new Processor(processorSpeed);

    // TODO: Create a memory property using the Memory class 
    // and pass the memorySize to the Memory constructor
    this.memory = new Memory(memorySize);
  }
  
  start() {
    console.log('Computer starting up...');
    this.processor.compute();
    this.memory.load();
  }
}

===
export class Memory {
  constructor(size) {
    this.size = size;
  }
  
  load() {
    console.log(`Loading ${this.size} GB of data`);
  }
}

===
export class Processor {
  constructor(speed) {
    this.speed = speed;
  }
  
  compute() {
    console.log(`Processing at ${this.speed} GHz`);
  }
}
===
import { Computer } from './computer.js';

const myComputer = new Computer(3.5, 16);
myComputer.start();