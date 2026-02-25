export class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }
  
  getBalance() {
    return this.balance;
  }
  
  getAccountInfo() {
    return `${this.accountHolder}: $${this.balance}`;
  }
  
  // TODO: Add the deposit(amount) method
  deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}`);
    } else {
        console.log("Invalid deposit amount");
    }};
  withdraw(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds");
        }
    }

  // TODO: The method should check if the amount is positive (greater than 0)

  // TODO: If valid: Adds the amount to the balance and logs: Deposited $${amount}, 
  // otherwise logs: Invalid deposit amount

  // TODO: Add the withdraw(amount) method

  // TODO: The method should check if the amount is positive AND less than or equal to current balance

  // TODO: If valid: Subtracts the amount from the balance and logs: Withdrew $${amount}, 
  // otherwise logs: Invalid withdrawal amount or insufficient funds
    
}