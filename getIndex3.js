//3. Write a program `getIndex3.js` that prompts the user for an array then 
//logs out the item at the 3rd index. If there are not four items (i.e., if 
//there is no index 3), it logs out the value at the last index

const prompt = require("prompt-sync")({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let inputLength = userArray.length;
let thirdItem = userArray[3];

if (inputLength > 4){
    console.log("The item at the third index is: " + thirdItem);
}
    else if (inputLength <=4){
        console.log("The last item in this array is: " + userArray[inputLength -1]);

    }
