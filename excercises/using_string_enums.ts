// From previous challenge - Direction enum and variables
enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

const upDirection = Direction.Up;
const downDirection = Direction.Down;
const leftDirection = Direction.Left;
const rightDirection = Direction.Right;

// TODO: Write your code here
// Create the move function that takes a Direction parameter and prints "Moving [direction]..."
function move(direction:Direction):void { 
    console.log(`Moving ${direction}`);
}
// Create the getMovementDescription function that returns movement descriptions
function getMovementDescription(direction:Direction):string {
    if (direction === Direction.Up){
        return "Going upward";
    } else if (direction === Direction.Down) { 
        return "Going downward";
    } else if (direction === Direction.Left) { 
        return "Turning left";
    } else if (direction === Direction.Right) { 
        return "Turning right";
    } }
// Create the playerDirection variable
let playerDirection: Direction = Direction.Up;
// Call the functions and print the required outputs

move(Direction.Up);
move(leftDirection);
move(playerDirection);
console.log(getMovementDescription(Direction.Down));
console.log(getMovementDescription(rightDirection));
move(Direction.Right);