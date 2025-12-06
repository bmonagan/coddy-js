// TODO: Write your code here
// Create type aliases for HasName, HasAge, HasEmail
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = {email: string};

// Create Person and Employee types using intersection
type Person = HasName & HasAge;
type Employee = Person & HasEmail;
// Create variables user and worker
let user: Person = {name: "Alice", age : 25};
let worker: Employee = {name: "Bob", age: 30, email: "bob@company.com"};


// Create displayPerson and displayEmployee functions
function displayPerson(person: Person): string{
    return `Name: ${person.name}, Age: ${person.age}`;
}
function displayWorker(employee: Employee): string{
    return `Name: ${employee.name}, Age: ${employee.age}, Email: ${employee.email}`;
}

// Call the functions and print the results

console.log(displayPerson(user));
console.log(displayWorker(worker));