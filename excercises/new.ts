function Car(name, year) {
    this.name = name;
    this.year = year;
    
    this.getDescription = function() {
        return "This is a " + this.name + " from " + this.year;
    };
}

// TODO: Create a new car object using the new keyword, pass "Honda" as the name and 2018 as the year
const new_car = new Car("Honda", 2018);

// TODO: Call the getDescription method on your car object and print the result to the console
console.log(new_car.getDescription());


