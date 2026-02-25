import { Dog } from './animal.js';

// TODO: Create myDog object with name "Buddy" and age 3.
const myDog = new Dog("Buddy", 3);


// Test code - don't modify
console.log(myDog.name);  // Should output "Buddy"
console.log(myDog.age);  // Should output 3
============================================
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export class Dog extends Animal {
  // Dog inherits from Animal
}