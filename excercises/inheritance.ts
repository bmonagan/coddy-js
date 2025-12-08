// TODO: Write your code here

// Create the Employee interface
interface Employee {
    id: number,
    name: string,
    department: string
}

// Create the Manager interface that extends Employee

interface Manager extends Employee {
    teamSize: number,
    budget: number
}


// Create the Contact type alias
type Contact = { 
    email: string,
    phone: string
}

// Create the Developer type alias using intersection types
type Developer = Contact & Employee & {
    programmingLanguages: string[],
    yearsExperience: number
}

// Create the teamLead variable of type Manager
let teamLead: Manager = {
    id: 101,
    name: "Alice Johnson",
    department: "Engineering",
    teamSize: 8,
    budget: 250000
};

// Create the softwareDev variable of type Developer

let softwareDev: Developer = {
    id: 102,
    name: "Bob Smith",
    department: "Engineering",
    email: "bob.smith@company.com",
    phone: "555-0123",
    programmingLanguages: ["TypeScript", "Python", "Java"],
    yearsExperience: 5
};

// Create the getManagerSummary function
function getManagerSummary(manager: Manager): string {
    return `${manager.name} manages ${manager.teamSize} people with a budget of $${manager.budget}`;
}

// Create the getDeveloperSkills function
function getDeveloperSkills(dev: Developer): string {
    return `${dev.name} knows ${dev.programmingLanguages.join(", ")} (${dev.yearsExperience} years experience)`;
}

// Print the required outputs
console.log(getManagerSummary(teamLead));
console.log(getDeveloperSkills(softwareDev));
console.log(teamLead.department);
console.log(softwareDev.email);