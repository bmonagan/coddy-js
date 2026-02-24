export class GameCharacter {
  name = "";
  #health = 100;
  // Add a private field #isAlive initialized to true
  #isAlive = true;
  
  constructor(name) {
    this.name = name;
  }
  
  takeDamage(amount) {
    this.#health -= amount;
    this.#checkIfAlive();
  }
  
  heal(amount) {
    this.#health += amount;
    if (this.#health > 100) {
      this.#health = 100;
    }
  }
  
  getStatus() {
    return this.#isAlive ? "Alive" : "Defeated";
  }
  
  // Add a private method #checkIfAlive()
  #checkIfAlive() {
  // Set #isAlive to true if #health > 0, set it to false if #health ≤ 0
    this.#isAlive = this.#health > 0;
  }
}