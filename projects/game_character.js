export class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapon = null; // Composition: Character can have a weapon
  }
  
  // Add a method called takeDamage(amount)
  takeDamage(amount) {
      
    // Reduce the character's health by the amount
    this.health -= amount;
    
    // Log: ${this.name} takes ${amount} damage
    console.log(`${this.name} takes ${amount} damage`);
  }
  
  // Add a method called equipWeapon(weapon)
  equipWeapon(weapon) {
      
    // Set character's weapon to the given weapon
    this.weapon = weapon; // Composition: Character HAS-A weapon
    
    // Log: ${this.name} equipped ${weapon.name}
    console.log(`${this.name} equipped ${weapon.name}`);
  }
  
  attack() {
    if (this.weapon) {
      console.log(`${this.name} attacks with ${this.weapon.name} for ${this.weapon.damage} damage`);
    } else {
      console.log(`${this.name} punches for 5 damage`);
    }
  }
}