export class BankAccount {
  constructor(accountName) {
    this._balance = 0;
    this._accountName = accountName;
  }
  
  get balance() {
    return this._balance;
  }
  
  set balance(value) {
    // TODO: Validation: Check if value is not a number OR is less than 0 - if so, console.log("Invalid balance")
    if (typeof value !== 'number' || value < 0) {
      console.log("Invalid balance");
      return;
    }
    
    // TODO: Use return to exit the setter
    
    this._balance = value;
    
    // TODO: Log \`Balance updated to $${value}\`
    console.log(`Balance updated to $${value}`);

  }
}

===
import { BankAccount } from './account.js';

// Test cases
const account = new BankAccount("Savings");

// Test 1: Valid balance
account.balance = 100;
console.log(account.balance);

// Test 2: Invalid balance (negative)
account.balance = -50;
console.log(account.balance);

// Test 3: Invalid balance (not a number)
account.balance = "abc";
console.log(account.balance);

