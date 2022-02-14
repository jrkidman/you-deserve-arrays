//2. Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array
const prompt = require("prompt-sync")();

let inputArray = JSON.parse(prompt("Enter an array: "));

let inputLength = inputArray.length;
console.log("The last item in this array is: " + inputArray[inputLength -1]);