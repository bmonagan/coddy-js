// Import the components
import { LightSource } from './LightSource.js';
import { BrightnessController } from './BrightnessController.js';

export class SmartBulb {
  constructor(color) {
    // Create instances of the two components
    this.light = new LightSource(color);
    this.brightness = new BrightnessController();
  }
  
  activate() {
    // TODO: Call turnOn() method on the light instance
    this.light.turnOn();

  }
  
  adjustBrightness(level) {
    // TODO: Set the brightness to the given level
    this.brightness.setBrightness(level);

    // TODO: Log the new brightness level exactly: Brightness set to ${this.brightness.level}%
    console.log(`Brightness set to ${this.brightness.level}%`);
  }

}

import { SmartBulb } from './SmartBulb.js';

const bedroomLight = new SmartBulb('warm white');

console.log('1. Activating light:');
bedroomLight.activate();

console.log('\n2. Adjusting brightness:');
bedroomLight.adjustBrightness(75);
export class BrightnessController {
  constructor() {
    this.level = 50; // Default 50% brightness
  }
  
  setBrightness(level) {
    this.level = Math.max(0, Math.min(100, level)); // Keep between 0-100
  }
}
export class LightSource {
  constructor(color) {
    this.color = color;
  }
  
  turnOn() {
    console.log(`${this.color} light is ON`);
  }
  
  turnOff() {
    console.log('Light is OFF');
  }
}