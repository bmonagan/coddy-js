// TODO: Write your code here
let firstScores: number[] = [85,92,78];
let secondScores: number[] = [88,95,82];

let allScores: number[] = [...firstScores,...secondScores];
let bonusPonts: number[] = [5,10];

let finalScores: number[] = [100,...allScores, ...bonusPonts,90];
console.log(finalScores);