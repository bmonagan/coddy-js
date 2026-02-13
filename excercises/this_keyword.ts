const player = {
    name: "Knight",
    health: 100,
    
    takeDamage: function(damage) {
        this.health -= damage;
    },
    
    // TODO: Add getStatus method here that returns a string with the player's name and health
    getStatus: function() { 
        return(`${this.name} has ${this.health} health`);
    }

};


// Test
player.takeDamage(30);
console.log(player.getStatus()); // Should output: "Knight has 70 health"