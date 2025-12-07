// TODO: Write your code here

// Create the Pet interface
interface Pet {
    name: string,
    species: string,
    age: number,
    isVaccinated: boolean
}

// Create the Vehicle interface
interface Vehicle {
    make: string,
    model: string,
    year: number
}

// Create the variables using your interfaces
let myDog: Pet = {
    name: "Buddy",
    species: "Golden Retriever",
    age: 3,
    isVaccinated: true
};
let myCat: Pet = {
    name: "Whiskers",
    species: "Persian",
    age: 2,
    isVaccinated: false
};

let myCar: Vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
// Create the describePet function
function describePet(pet: Pet): string {
    return `${pet.name} is a ${pet.age}-year-old ${pet.species}`;
}


// Create the getVehicleInfo function
function getVehicleInfo(vehicle: Vehicle): string {
    return `${vehicle.year} ${vehicle.make} ${vehicle.model}`
}

// Print the required outputs
console.log(describePet(myDog));
console.log(describePet(myCat));
console.log(getVehicleInfo(myCar));
console.log(myDog.isVaccinated);