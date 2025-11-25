let colors = ["red", "blue", "green"];
colors.push("yellow");
let removedColor = colors.shift()
colors.unshift("purple");
let lastColor = colors.pop();

console.log(colors);
console.log(removedColor);
console.log(lastColor);