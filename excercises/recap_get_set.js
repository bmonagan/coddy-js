export class UserProfile {
  constructor(username, email) {
    this._username = username;
    this._email = email;
  }
  
  // Username getter/setter (already complete)
  get username() {
    return this._username;
  }
  
  set username(newName) {
    if (newName.length < 3) {
      console.log("Username must be at least 3 characters!");
      return;
    }
    this._username = newName;
    console.log(`Username updated to ${newName}`);
  }
  
  // TODO: Add a getter for email that returns the current email value
  get email(){
    return this._email;
  }

  // TODO: Add a setter for email 
  
  // TODO: Check if the email contains the '@' character
  set email(new_email) {
    if (!new_email.includes("@")) {
        console.log("Invalid email!");
        return;
    }
    else {
        console.log(`Email updated to ${new_email}`);
    }
  }
}
import { UserProfile } from './user.js';

// Test code - don't modify
const user = new UserProfile("alice123", "alice@email.com");

user.email = "bob@email.com";      // Valid - should log success
user.email = "invalid-email";      // Invalid - should log error

