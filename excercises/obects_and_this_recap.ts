// TODO: Create a constructor function called Thermostat that takes a room parameter
function Thermostat(room) {
    this.room = room;
    this.temperature = 22;
    this.isOn = true;
    this.increaseTemp = function() {
        this.temperature +=1;
    }
    this.decreaseTemp = function(){
        this.temperature -= 1;
    }
    this.getStatus = function() {
        return `${this.room} thermostat: ${this.temperature}°C`
    }

};
// TODO: Inside the constructor, set these properties:
// - room (from the parameter)
// - temperature (set to 22)
// - isOn (set to true)

// TODO: Add a method called increaseTemp() that increases temperature by 1 degree

// TODO: Add a method called decreaseTemp() that decreases temperature by 1 degree

// TODO: Add a method called getStatus() that returns: "[room] thermostat: [temperature]°C"


// Test your code - don't modify this part
const livingRoom = new Thermostat("Living Room");
livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.getStatus()); // Should print: "Living Room thermostat: 24°C"

const bedroom = new Thermostat("Bedroom");
bedroom.decreaseTemp();
bedroom.decreaseTemp();
console.log(bedroom.getStatus()); // Should print: "Bedroom thermostat: 20°C"
