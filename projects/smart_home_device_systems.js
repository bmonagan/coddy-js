export class SmartDevice {

// TODO: Add static property totalDevices = 0
static totalDevices = 0;
  
  constructor(name) {
    this.name = name;
    this.isOn = false;
    
    // TODO: Increment the counter, add: SmartDevice.totalDevices++;
    SmartDevice.totalDevices++;
    
  }
  
  turnOn() {
    this.isOn = true;
  }
  
  turnOff() {
    this.isOn = false;
  }
  
  getStatus() {
    return `${this.name} is ${this.isOn ? 'ON' : 'OFF'}`;
  }
  
  // TODO:  Add static method called getDeviceCount() that returns the total devices count
  static getDeviceCount() {
    return this.totalDevices;
  }


}
import { SmartDevice } from './device.js';

console.log(`Device count: ${SmartDevice.getDeviceCount()}`); // Should be 0
const basicDevice1 = new SmartDevice('Smart Plug');
const basicDevice2 = new SmartDevice(' Thermostat');
console.log(`Total devices now: ${SmartDevice.getDeviceCount()}`); // Should be 2
