//1. Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array
const prompt = require("prompt-sync")();

let inputArray = JSON.parse(prompt("Enter an array: "));

console.log("The first item in this array is: " + inputArray[0]);