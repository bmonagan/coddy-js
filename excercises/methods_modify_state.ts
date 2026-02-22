export class Thermostat {
  constructor(room, currentTemp) {
    this.room = room;
    this.currentTemp = currentTemp;
  }
  
  // TODO: Add the increaseTemp() method that increases temperature by 1 degree
  increaseTemp() { 
    this.currentTemp += 1;
  }

  // TODO: Add the decreaseTemp() method that decreases temperature by 1 degree
  decreaseTemp() {
    this.currentTemp -= 1;
  }
}
=====================
import { Thermostat } from './thermostat.js';

// Test code - don't modify
const livingRoom = new Thermostat("Living Room", 20);

livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.currentTemp); // Should output 22

livingRoom.decreaseTemp();
console.log(livingRoom.currentTemp); // Should output 21

