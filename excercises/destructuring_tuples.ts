// TODO: Write your code here
// Create the employee tuple with ID 1001 and name "Sarah Johnson"
let employee: [number,string] = [1001,"Sarah Johnson"];
// Use destructuring to extract empId and empName
let [empId, empName] = employee;
// Create the coordinates tuple with values 40.7128 and -74.0060 (avoid using 'location' as variable name)
let coordinates: [number,number] = [40.7128, -74.0060];
// Use destructuring to extract latitude and longitude
let [latitude, longitude] = coordinates;
// Print all four variables in the specified order

// Print the results (uncomment and modify as needed)
console.log(empId);
console.log(empName);
console.log(latitude);
console.log(longitude);