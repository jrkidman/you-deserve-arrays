/*6. `secondCharOfThirdString.js`: prompts the user for an array then logs the 
second character in the third item in the array. If the third item is not a string, log an error instead

check for:
        is it an array? cancel this, CAN'T be solved at this point because of JSON parse error if user input isn't an array
        does it have at least three items?
        does the third item have at least 2 characters?

    is third item a string? 
        if yes log second character in third item
        if no return error
    */

        const prompt = require("prompt-sync")({sigint: true});

        let userArray = JSON.parse(prompt("Enter an array of at least three animals: "));
        let thirdItem = userArray[2];

        //does the array have at least 3 items?
       if (userArray.length < 3){
            console.log("You need to input at least 3 animals in this array.");
        } 
        // //does the third item have at least 2 characters?
       else if (thirdItem.length < 2){
            console.log("The third item does not have at least 2 characters.");
        } 
        //is the third item a string?
       else if (typeof thirdItem !== "string" ){
            console.log("The third item is not a string.  Please try again.");
        } 
        else {
        console.log("The second character of the third animal in your array is: " + thirdItem[1]);
        }



        
