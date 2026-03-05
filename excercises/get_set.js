export class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;  // Store age privately
  }
  
  // TODO: Add a getter method for age that returns the stored age
  get age() {
    return this._age;
  }
 
  // TODO: Add a setter method for age that validates that age is between 0 and 120
  set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge;
    }
    else {
      console.log("Invalid age!");
    }
    } 
  
  }
  
==
import { User } from './user.js';

// Test code - don't modify
const user = new User("Alice", 25);
console.log(user.age);      // Should output 25

user.age = 30;
console.log(user.age);      // Should output 30

user.age = 150;             // Should show "Invalid age!"
console.log(user.age);      // Should still output 30 (unchanged)

