export function createUser(username, age) {
  // Private data - cannot be accessed directly
  let privateUsername = username;
  let privateAge = age;
  
  // Public methods to interact with private data
  return {
    getUsername: function() {
      return privateUsername;
    },
  
    // TODO: Add the getAge() method that returns the correct age and the age info remains private
    getAge() {
      return privateAge;
    }
    
  };
}
=============
import { createUser } from './createUser.js';

// Test code - don't modify
const user = createUser("john_doe", 25);
console.log(user.getUsername()); // Should output "john_doe"
console.log(user.getAge());      // Should output 25

