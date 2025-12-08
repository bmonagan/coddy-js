// TODO: Write your code here
// Create the Calculator interface with the required properties and methods
interface Calculator {
    brand: string,
    model: string,
    isScientific: boolean,
    add(n1:number, n2: number): number,
    getInfo(): string
}
// Create the BankAccount interface with the required properties and methods
interface BankAccount {
    accountNumber: string,
    balance: number,
    isActive: boolean,
    deposit(amount: number): void,
    getBalance(): number
}
// Create the myCalculator variable of type Calculator

let myCalculator: Calculator = {
    brand: "Casio",
    model: "FX-991EX",
    isScientific: true,
    add(a:number, b: number): number{
        return a + b;
    },
    getInfo() {
        return `${myCalculator.brand} ${myCalculator.model}`
    }};
// Create the savingsAccount variable of type BankAccount
let savingsAccount: BankAccount = {
    accountNumber: "SAV-12345",
    balance: 1500,
    isActive: true,
    deposit(n:number): void{
        savingsAccount.balance += n;
    },
    getBalance(): number{
        return savingsAccount.balance;
    }
}
// Print all the required outputs

console.log(myCalculator.getInfo());
console.log(myCalculator.add(15,27));
console.log(savingsAccount.getBalance());
savingsAccount.deposit(250)
console.log(savingsAccount.getBalance());
console.log(myCalculator.isScientific);