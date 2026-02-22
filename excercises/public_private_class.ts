export class UserAccount {
  // TODO: Add a public field username
  username = "alice";

  // TODO: Add a private field #password
  #password = 0;
  // TODO: Add a constructor that takes username and password parameters and sets them as properties
  constructor(username,password) {
    this.username = username;
    this.password = password;
  }
}
===================
import { UserAccount } from './userAccount.js';

// Test code - don't modify
const user = new UserAccount("alice", "secret123");
console.log(user.username);          // Should output "alice"

