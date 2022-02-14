//5. `firstItemIsNumber.js`: prompts the user for an array then logs out a boolean 
//indicating whether or not the first item in the array is a number

const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("Enter an array: "));



if (typeof userArray[0] === "number"){
    console.log("The first item in this array is a number.");
}
else { 
    console.log("The first item in this array is NOT a number.");
}
