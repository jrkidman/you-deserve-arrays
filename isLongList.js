//4. `isLongList.js`: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
const prompt = require("prompt-sync")({ sigint: true });

let userArray = JSON.parse(prompt("Enter an array: "));

let atLeast10 = (userArray.length >= 10);

console.log(atLeast10);
