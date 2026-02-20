// TODO: Create a class named Car 
class Car {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }
}

const make = inp[0];
const model = inp[1];
const car = new Car(make, model);
console.log(car.make)
console.log(car.model)