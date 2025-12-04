// TODO: Write your code here
// Create type aliases for UserID, Priority, and Status
type UserID = string | number;
type Priority = string | boolean;
type Status = string;
// Then declare the variables and assign the specified values
const currentUser: UserID = "admin123";
const guestUser: UserID = 42;
const taskPriority: Priority = "high";
const isUrgent: Priority = true;
const orderStatus: Status = "pending";

// Print each variable's value
console.log(currentUser);
console.log(guestUser);
console.log(taskPriority);
console.log(isUrgent);
console.log(orderStatus);