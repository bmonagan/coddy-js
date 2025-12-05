// TODO: Write your code here
// Create type aliases for Direction, GameState, and Difficulty
type Direction = "left" | "right" | "up" | "down";
type GameState = "menu" | "playing" | "paused" | "gameover";
type Difficulty = "easy" | "medium" | "hard";
// Declare variables using your type aliases 
const playerDirection: Direction = "up";
const currentState: GameState = "playing";
const selectedDifficulty: Difficulty = "medium";
// Create the movePlayer and updateGameState functions
function movePlayer(direction: Direction): string{
    return `Moving ${direction}`;
}
function updateGameState(state: GameState): string{
    return `Game state: ${state}`;
}
// Call the functions and print the results

console.log(movePlayer(playerDirection));
console.log(updateGameState(currentState));
console.log(selectedDifficulty);