// TODO: Create a class named BankAccount
class BankAccount {
    constructor(accountHolder,initialBalance = 0){
    this.balance = initialBalance;
    this.accountHolder = accountHolder;
    }
    getBalance() {
        return this.balance;
    }
    getAccountInfo() {
        return `${this.accountHolder}: $${this.balance}`;
    }
}


// Test
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"
console.log('Balance:', testAccount.getBalance()); // 500